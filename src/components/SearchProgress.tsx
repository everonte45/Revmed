import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Download,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Loader2
} from 'lucide-react';
import { SearchProgress as ProgressType } from '@/hooks/usePubMedSearch';

interface SearchProgressProps {
  progress: ProgressType;
  isSearching: boolean;
  onStop: () => void;
}

export function SearchProgress({ progress, isSearching, onStop }: SearchProgressProps) {
  if (!progress.isActive && !isSearching) {
    return null;
  }

  const formatTime = (seconds: number): string => {
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Progresso Ricerca</span>
          {isSearching && (
            <Button variant="outline" size="sm" onClick={onStop}>
              <X className="h-4 w-4 mr-2" />
              Stop
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Completamento</span>
            <span className="text-sm text-muted-foreground">
              {progress.articlesFound} articoli trovati
            </span>
          </div>
          <Progress value={progress.percentage} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{progress.percentage}%</span>
            <span>{formatTime(progress.elapsedTime)}</span>
          </div>
          
          {progress.logs.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Log</h4>
              <ScrollArea className="h-32 w-full">
                <div className="space-y-1">
                  {progress.logs.map((log, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      {getLogIcon(log.level)}
                      <span className="text-muted-foreground">{log.message}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
