import { Beaker, ExternalLink } from "lucide-react";

interface ScienceFactProps {
  fact: string;
  source?: string;
  sourceUrl?: string;
}

export function ScienceFact({ fact, source, sourceUrl }: ScienceFactProps) {
  return (
    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Beaker className="w-4 h-4 text-primary" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium leading-relaxed">{fact}</p>
          {source && (
            <p className="text-xs text-muted-foreground">
              Source:{" "}
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {source}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                source
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
