import { useState, useEffect, useCallback, useRef } from 'react';
import { apiService, SearchRequest, SearchStatus } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export interface SearchTerm {
  id: string;
  term: string;
  field: "all" | "title" | "abstract" | "mesh";
  operator?: "AND" | "OR" | "NOT";
}

export interface SearchFilters {
  freeFullTextOnly: boolean;
  dateFrom?: string;
  dateTo?: string;
  studyType?: string;
}

export interface SearchProgress {
  isActive: boolean;
  downloaded: number;
  failed: number;
  total: number;
  percentage: number;
  logs: Array<{
    message: string;
    level: 'info' | 'success' | 'error' | 'warning';
  }>;
}

export const usePubMedSearch = () => {
  const { toast } = useToast();
  const [searchTerms, setSearchTerms] = useState<SearchTerm[]>([
    { id: "1", term: "", field: "all" }
  ]);
  const [filters, setFilters] = useState<SearchFilters>({
    freeFullTextOnly: true,
    dateFrom: "",
    dateTo: "",
    studyType: "all"
  });
  const [savePath, setSavePath] = useState("./downloads");
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState<SearchProgress>({
    isActive: false,
    downloaded: 0,
    failed: 0,
    total: 0,
    percentage: 0,
    logs: []
  });
  const [maxArticles, setMaxArticles] = useState(100);
  const [batchSize, setBatchSize] = useState(5);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate query from terms and filters
  const generateQuery = useCallback(() => {
    const baseQuery = apiService.generateQuery(searchTerms);
    return apiService.addFiltersToQuery(baseQuery, filters);
  }, [searchTerms, filters]);

  // Start progress monitoring
  const startProgressMonitoring = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(async () => {
      try {
        const status: SearchStatus = await apiService.getSearchStatus();
        
        setProgress({
          isActive: status.active,
          downloaded: status.downloaded,
          failed: status.failed,
          total: status.total,
          percentage: status.total > 0 ? Math.round(((status.downloaded + status.failed) / status.total) * 100) : 0,
          logs: status.logs
        });

        // Stop monitoring if search is complete
        if (!status.active && progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
          setIsSearching(false);
          
          toast({
            title: "Ricerca completata!",
            description: `Scaricati ${status.downloaded} articoli, ${status.failed} falliti`,
          });
        }
      } catch (error) {
        console.error('Errore monitoraggio progresso:', error);
      }
    }, 2000);
  }, [toast]);

  // Start search
  const startSearch = useCallback(async () => {
    const query = generateQuery();
    
    if (!query.trim()) {
      toast({
        title: "Query vuota",
        description: "Inserisci almeno un termine di ricerca",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSearching(true);
      setProgress(prev => ({ ...prev, logs: [] }));

      const request: SearchRequest = {
        query,
        max_total: maxArticles,
        batch_size: batchSize,
        save_path: savePath
      };

      await apiService.startSearch(request);
      
      // Start monitoring progress
      startProgressMonitoring();
      
      toast({
        title: "Ricerca avviata",
        description: `Ricerca per: "${query}"`,
      });

    } catch (error) {
      setIsSearching(false);
      toast({
        title: "Errore ricerca",
        description: error instanceof Error ? error.message : "Errore sconosciuto",
        variant: "destructive",
      });
    }
  }, [generateQuery, maxArticles, batchSize, savePath, startProgressMonitoring, toast]);

  // Stop search
  const stopSearch = useCallback(async () => {
    try {
      await apiService.stopSearch();
      setIsSearching(false);
      
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      
      toast({
        title: "Ricerca interrotta",
        description: "La ricerca è stata fermata",
      });
    } catch (error) {
      toast({
        title: "Errore stop",
        description: error instanceof Error ? error.message : "Errore sconosciuto",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Get browse suggestions
  const getBrowseSuggestions = useCallback(async (): Promise<string[]> => {
    try {
      const response = await apiService.getBrowseSuggestions(savePath);
      return response.suggestions;
    } catch (error) {
      console.error('Errore browse:', error);
      return [];
    }
  }, [savePath]);

  // Add search term
  const addSearchTerm = useCallback(() => {
    const newTerm: SearchTerm = {
      id: Date.now().toString(),
      term: "",
      field: "all",
      operator: "AND"
    };
    setSearchTerms(prev => [...prev, newTerm]);
  }, []);

  // Remove search term
  const removeSearchTerm = useCallback((id: string) => {
    if (searchTerms.length > 1) {
      setSearchTerms(prev => prev.filter(term => term.id !== id));
    }
  }, [searchTerms.length]);

  // Update search term
  const updateSearchTerm = useCallback((id: string, field: keyof SearchTerm, value: string) => {
    setSearchTerms(prev => prev.map(term => 
      term.id === id ? { ...term, [field]: value } : term
    ));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return {
    // State
    searchTerms,
    filters,
    savePath,
    isSearching,
    progress,
    maxArticles,
    batchSize,
    
    // Actions
    setSearchTerms,
    setFilters,
    setSavePath,
    setMaxArticles,
    setBatchSize,
    addSearchTerm,
    removeSearchTerm,
    updateSearchTerm,
    startSearch,
    stopSearch,
    getBrowseSuggestions,
    
    // Computed
    generateQuery,
    isValidQuery: searchTerms.some(term => term.term.trim()),
  };
};
