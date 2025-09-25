import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  X, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Loader2,
  X \
} from "lucide-react";
import { SearchProgress as ProgressType } from "@/hooks/usePubMedSearch";

interface SearchProgressProps {
  progress: ProgressType;
  isSearching: boolean;
  onStop: () => void;
}

export const SearchProgress = ({ progress, isSearching, onStop }: SearchProgressProps) => {
  if (!progress.isActive && !isSearching) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getLogIcon = (level: string) => {
    switch (level) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <X className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <FileText className="h-4 w-4 text-blue-500" />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="border-medical-border mt-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            {isSearching ? (
              <Loader2 className="h-5 w-5 mr-2 text-teal animate-spin" />
            ) : (
              <FileText className="h-5 w-5 mr-2 text-teal" />
            )}
            Progresso Ricerca
          </CardTitle>
          
          {isSearching && (
            <Button variant="outline" size="sm" onClick={onStop}>
              <Stop className="h-4 w-4 mr-2" />
              Ferma
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Progresso</span>
            <span className="text-muted-foreground">
              {progress.percentage}% ({progress.downloaded + progress.failed} / {progress.total})
            </span>
          </div>
          <Progress value={progress.percentage} className="h-3" />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-center mb-2">
              <Download className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">
              {progress.downloaded}
            </div>
            <div className="text-sm text-green-700">Scaricati</div>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center justify-center mb-2">
              <X className="h-5 w-5 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-600">
              {progress.failed}
            </div>
            <div className="text-sm text-red-700">Falliti</div>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {progress.total}
            </div>
            <div className="text-sm text-blue-700">Totali</div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center">
          {isSearching ? (
            <Badge variant="default" className="bg-teal text-white">
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              Ricerca in corso...
            </Badge>
          ) : (
            <Badge variant="secondary">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completata
            </Badge>
          )}
        </div>

        <Separator />

        {/* Log Activity */}
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Log Attività
          </h4>
          
          <ScrollArea className="h-64 border border-medical-border rounded-lg p-3">
            <div className="space-y-2">
              {progress.logs.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Nessun log disponibile
                </p>
              ) : (
                progress.logs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    {getLogIcon(log.level)}
                    <span className={`flex-1 ${getLogColor(log.level)}`}>
                      {log.message}
                    </span>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Summary */}
        {!isSearching && progress.total > 0 && (
          <div className="bg-medical-bg p-4 rounded-lg border border-medical-border">
            <h4 className="font-medium mb-2">Riepilogo Ricerca</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Totale articoli processati: {progress.total}</p>
              <p>• Scaricati con successo: {progress.downloaded}</p>
              <p>• Falliti: {progress.failed}</p>
              <p>• Tasso di successo: {progress.total > 0 ? Math.round((progress.downloaded / progress.total) * 100) : 0}%</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};



