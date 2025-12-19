import { Star, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  name: string;
  description: string;
  url: string;
  stars?: number;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
              {project.name}
            </CardTitle>
            <div className="flex items-center gap-2">
              {project.stars && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span>{project.stars}</span>
                </div>
              )}
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

