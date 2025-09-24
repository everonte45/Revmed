import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SearchProgress } from "@/components/SearchProgress";
import {
  Search,
  Download,
  Filter,
  Calendar,
  Database,
  FileText,
  CheckCircle,
  Plus,
  X,
  AlertCircle,
  Mail,
  ExternalLink,
  Star,
  Folder,
  FolderOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { usePubMedSearch } from "@/hooks/usePubMedSearch";

const Tool = () => {
  const { toast } = useToast();
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [showBrowseDialog, setShowBrowseDialog] = useState(false);
  const [browseSuggestions, setBrowseSuggestions] = useState<string[]>([]);

  // Use the custom hook for PubMed search functionality
  const {
    searchTerms,
    filters,
    savePath,
    isSearching,
    progress,
    maxArticles,
    batchSize,
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
    generateQuery,
    isValidQuery,
  } = usePubMedSearch();

  // Handle browse folder suggestions
  const handleBrowse = async () => {
    try {
      const suggestions = await getBrowseSuggestions();
      setBrowseSuggestions(suggestions);
      setShowBrowseDialog(true);
    } catch (error) {
      toast({
        title: "Errore",
        description: "Impossibile ottenere suggerimenti cartelle",
        variant: "destructive",
      });
    }
  };

  const handleBrowseSelect = (path: string) => {
    setSavePath(path);
    setShowBrowseDialog(false);
  };

  const processDownload = () => {
    if (!email) {
      toast({
        title: "Email richiesta",
        description: "Inserisci la tua email per ricevere i risultati",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Download avviato!",
      description: "Riceverai i risultati via email entro pochi minuti",
    });
    
    setShowEmailGate(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-4">
            RevMed PubMed Search Tool
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Costruisci query avanzate e scarica articoli open access per la tua revisione sistematica
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Query Builder */}
          <div className="lg:col-span-2">
            <Card className="border-medical-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-teal" />
                  Costruttore Query
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Terms */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Termini di Ricerca</Label>
                  <div className="space-y-4">
                    {searchTerms.map((term, index) => (
                      <div key={term.id} className="flex items-center gap-3">
                        {index > 0 && (
                          <Select
                            value={term.operator}
                            onValueChange={(value) => updateSearchTerm(term.id, "operator", value)}
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AND">AND</SelectItem>
                              <SelectItem value="OR">OR</SelectItem>
                              <SelectItem value="NOT">NOT</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                        
                        <Input
                          placeholder="Inserisci termine di ricerca..."
                          value={term.term}
                          onChange={(e) => updateSearchTerm(term.id, "term", e.target.value)}
                          className="flex-1"
                        />
                        
                        <Select
                          value={term.field}
                          onValueChange={(value) => updateSearchTerm(term.id, "field", value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Tutti i campi</SelectItem>
                            <SelectItem value="title">Titolo</SelectItem>
                            <SelectItem value="abstract">Abstract</SelectItem>
                            <SelectItem value="mesh">MeSH Terms</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        {searchTerms.length > 1 && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeSearchTerm(term.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={addSearchTerm}
                    className="mt-4"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Aggiungi termine
                  </Button>
                </div>

                <Separator />

                {/* Filters */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Filtri</Label>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="free-text"
                      checked={filters.freeFullTextOnly}
                      onCheckedChange={(checked) => setFilters(prev => ({ ...prev, freeFullTextOnly: checked as boolean }))}
                    />
                    <Label htmlFor="free-text" className="text-sm">
                      Solo articoli "Free Full Text"
                    </Label>
                    <Badge variant="secondary" className="ml-2">Consigliato</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date-from" className="text-sm">Data da</Label>
                      <Input
                        id="date-from"
                        type="date"
                        value={filters.dateFrom || ""}
                        onChange={(e) => setFilters(prev => ({ ...prev, dateFrom: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="date-to" className="text-sm">Data a</Label>
                      <Input
                        id="date-to"
                        type="date"
                        value={filters.dateTo || ""}
                        onChange={(e) => setFilters(prev => ({ ...prev, dateTo: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="study-type" className="text-sm mb-2 block">Tipo di studio</Label>
                    <Select value={filters.studyType || "all"} onValueChange={(value) => setFilters(prev => ({ ...prev, studyType: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tutti</SelectItem>
                        <SelectItem value="systematic-review">Revisioni sistematiche</SelectItem>
                        <SelectItem value="meta-analysis">Meta-analisi</SelectItem>
                        <SelectItem value="rct">Randomized Controlled Trial</SelectItem>
                        <SelectItem value="cohort">Studi di coorte</SelectItem>
                        <SelectItem value="case-control">Caso-controllo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                {/* Search Parameters */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Parametri Ricerca</Label>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="max-articles" className="text-sm">Numero Articoli</Label>
                      <Input
                        id="max-articles"
                        type="number"
                        min="1"
                        max="1000"
                        value={maxArticles}
                        onChange={(e) => setMaxArticles(parseInt(e.target.value) || 100)}
                      />
                      <small className="text-xs text-muted-foreground">Massimo 1000</small>
                    </div>
                    <div>
                      <Label htmlFor="batch-size" className="text-sm">Dimensione Batch</Label>
                      <Input
                        id="batch-size"
                        type="number"
                        min="1"
                        max="50"
                        value={batchSize}
                        onChange={(e) => setBatchSize(parseInt(e.target.value) || 5)}
                      />
                      <small className="text-xs text-muted-foreground">1-50</small>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="save-path" className="text-sm">Percorso Salvataggio</Label>
                    <div className="flex gap-2">
                      <Input
                        id="save-path"
                        value={savePath}
                        onChange={(e) => setSavePath(e.target.value)}
                        placeholder="./downloads"
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon" onClick={handleBrowse}>
                        <FolderOpen className="h-4 w-4" />
                      </Button>
                    </div>
                    <small className="text-xs text-muted-foreground">Cartella dove salvare i PDF</small>
                  </div>
                </div>

                <Separator />

                {/* Generated Query Preview */}
                {isValidQuery && (
                  <div className="bg-medical-bg p-4 rounded-lg">
                    <Label className="text-sm font-medium mb-2 block">Query Generata</Label>
                    <code className="text-sm text-muted-foreground bg-white p-2 rounded border block">
                      {generateQuery()}
                    </code>
                  </div>
                )}

                <Button 
                  onClick={startSearch}
                  disabled={isSearching || !isValidQuery}
                  className="w-full"
                  size="lg"
                >
                  {isSearching ? (
                    <>
                      <Database className="h-5 w-5 mr-2 animate-pulse" />
                      Ricerca in corso...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Cerca su PubMed
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="border-medical-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-teal" />
                  Come funziona
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Costruisci la query con termini booleani</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Filtra automaticamente per open access</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scarica risultati in Excel/PDF</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Export compatibile con PRISMA</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal bg-teal-light">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-dark">
                  <Star className="h-5 w-5 mr-2" />
                  Upgrade Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-teal-dark mb-4">
                  Vuoi trasformare questa ricerca in una revisione pubblicabile?
                </p>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <a href="/pacchetti">Scopri i pacchetti →</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search Progress */}
        <SearchProgress 
          progress={progress} 
          isSearching={isSearching} 
          onStop={stopSearch} 
        />

        {/* Browse Dialog */}
        <Dialog open={showBrowseDialog} onOpenChange={setShowBrowseDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Folder className="h-5 w-5 mr-2 text-teal" />
                Seleziona Cartella
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Scegli una cartella suggerita o inserisci un percorso personalizzato:
              </p>
              
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {browseSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => handleBrowseSelect(suggestion)}
                  >
                    <FolderOpen className="h-4 w-4 mr-2" />
                    {suggestion}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowBrowseDialog(false)} className="flex-1">
                  Annulla
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Email Gate Modal */}
        <Dialog open={showEmailGate} onOpenChange={setShowEmailGate}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal" />
                Scarica i tuoi risultati
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Inserisci la tua email per ricevere i risultati della ricerca in formato Excel/PDF
              </p>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="la.tua@email.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowEmailGate(false)} className="flex-1">
                  Annulla
                </Button>
                <Button onClick={processDownload} className="flex-1">
                  Invia risultati
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Riceverai anche consigli esclusivi per migliorare le tue revisioni sistematiche
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
};

export default Tool;