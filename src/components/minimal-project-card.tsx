import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function MinimalProjectCard({ title, description, tags, link }: Props) {
  return (
    <p className="text-[10pt] leading-tight">
      <span className="font-semibold">
      {link ? (
        <a
          href={link}
          target="_blank"
          className="hover:underline"
        >
          {title}
        </a>
      ) : (
        title
      )}
      </span>
      {": "}
      {description}
      {link && (
      <span className="hidden underline print:visible">
        <br></br>
        {link.replace("https://", "").replace("www.", "")}
      </span>
      )}
    </p>
  );
}
