import {
  Card,
  CardHeader,
  CardContent
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  company: string;
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  start: string;
  end: string;
  badges: readonly string[];
  bullets: readonly string[];
  logo: string;
  technologies: readonly string[];
}

export function WorkCard({ company, title, description, tags, link, start, end, badges, bullets, logo, technologies}: Props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2">
                <h3 className="inline-flex items-center justify-center gap-x-1 mb-0 text-[12pt] font-semibold leading-tight">
                {link !== "" ? (
                    <a className="hover:underline" href={link}>
                    {company}
                    </a>
                ) : (
                    <span>{company}</span>
                )}
                    <span className="ml-2 inline-flex gap-x-1 leading-none">
                    {badges.map((badge: any) => (
                        <Badge
                        variant="secondary"
                        className="text-[10pt] border-gray-400"
                        key={badge}
                        >
                        {badge}
                        </Badge>
                    ))}
                    </span>
                </h3>
                <div className="text-[10pt] italic tabular-nums leading-none">
                    {start ? (
                    <>
                        {start} - {end === "" ? "Present" : end}
                    </>
                    ) : (
                    <>{end}</>
                    )}
                </div>
                </div>
                <h4 className="mt-0 mb-0 text-[11pt] mt-0 leading-none">
                {title}
                </h4>
            </CardHeader>
            <CardContent className="mt-1">
                {description}
                {bullets && bullets.length > 0 && (
                <ul className="mt-0 space-y-0">
                    {bullets.map((bullet: string, idx: number) => (
                    <li key={idx}>
                        <span className="mr-2">–</span>
                        {bullet}
                    </li>
                    ))}
                </ul>
                )}
                <div className="mt-0 flex flex-wrap gap-1">
                {technologies.map((technology: any) => (
                    <Badge 
                    variant="secondary"
                    className="text-[10px] border-gray-400 pt-0 pb-0"
                    key={technology}
                    >
                    {technology}
                    </Badge>
                ))}
                </div>
            </CardContent>
        </Card>
    );
}
