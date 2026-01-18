import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { cleanUrl } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center hover:underline"
              >
                {title}{" "}
                <span className="ml-2 h-1 w-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden text-xs underline print:visible">
            {link ? cleanUrl(link) : null}
          </div>
          <CardDescription className="text-xs">
            {description}
          </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
