/**
 * API Service for RevMed PubMed Search
 * Connects React frontend to Flask backend
 */

export interface SearchRequest {
  query: string;
  max_total: number;
  batch_size: number;
  save_path: string;
}

export interface SearchStatus {
  active: boolean;
  downloaded: number;
  failed: number;
  total: number;
  logs: Array<{
    message: string;
    level: 'info' | 'success' | 'error' | 'warning';
  }>;
  current_query: string;
  save_path: string;
}

export interface BrowseSuggestions {
  suggestions: string[];
}

class ApiService {
  private baseUrl: string;

  constructor() {
    // Use environment variable or default to local development
    this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  }

  /**
   * Start a new PubMed search
   */
  async startSearch(request: SearchRequest): Promise<{ message: string; status: string }> {
    const response = await fetch(`${this.baseUrl}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get current search status and progress
   */
  async getSearchStatus(): Promise<SearchStatus> {
    const response = await fetch(`${this.baseUrl}/api/status`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Stop current search
   */
  async stopSearch(): Promise<{ message: string }> {
    const response = await fetch(`${this.baseUrl}/api/stop`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get folder path suggestions
   */
  async getBrowseSuggestions(currentPath: string): Promise<BrowseSuggestions> {
    const response = await fetch(`${this.baseUrl}/api/browse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ current_path: currentPath }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Generate PubMed query from search terms
   */
  generateQuery(terms: Array<{ term: string; field: string; operator?: string }>): string {
    return terms
      .filter(term => term.term.trim())
      .map((term, index) => {
        const prefix = index > 0 ? ` ${term.operator || 'AND'} ` : '';
        const fieldSuffix = term.field === 'all' ? '' : `[${term.field}]`;
        return `${prefix}${term.term}${fieldSuffix}`;
      })
      .join('');
  }

  /**
   * Add filters to query
   */
  addFiltersToQuery(baseQuery: string, filters: {
    freeFullTextOnly: boolean;
    dateFrom?: string;
    dateTo?: string;
    studyType?: string;
  }): string {
    let query = baseQuery;

    if (filters.freeFullTextOnly) {
      query += ' AND "free full text"[Filter]';
    }

    if (filters.dateFrom || filters.dateTo) {
      let dateFilter = '';
      if (filters.dateFrom && filters.dateTo) {
        dateFilter = `(${filters.dateFrom}[Date - Publication] : ${filters.dateTo}[Date - Publication])`;
      } else if (filters.dateFrom) {
        dateFilter = `${filters.dateFrom}[Date - Publication] : 3000[Date - Publication]`;
      } else if (filters.dateTo) {
        dateFilter = `1800[Date - Publication] : ${filters.dateTo}[Date - Publication]`;
      }
      if (dateFilter) {
        query += ` AND ${dateFilter}`;
      }
    }

    if (filters.studyType && filters.studyType !== 'all') {
      const studyTypeFilters: Record<string, string> = {
        'systematic-review': 'systematic[sb]',
        'meta-analysis': 'meta-analysis[pt]',
        'rct': 'randomized controlled trial[pt]',
        'cohort': 'cohort studies[pt]',
        'case-control': 'case-control studies[pt]'
      };
      
      if (studyTypeFilters[filters.studyType]) {
        query += ` AND ${studyTypeFilters[filters.studyType]}`;
      }
    }

    return query;
  }
}

export const apiService = new ApiService();
