import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardHeader
} from "./ui/card";

interface Props {
    company: string;
    title: string;
    description: string;
    link: string;
    start: string;
    end: string;
    badges: readonly string[];
    bullets?: readonly string[];
    logo?: StaticImageData;
}

export function WorkCard({ company, title, description, link, start, end, badges, bullets, logo }: Props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-x-3">
                    {logo && (
                        <Image
                            src={logo}
                            alt={`${company} logo`}
                            width={28}
                            height={28}
                            className="object-contain print:hidden"
                        />
                    )}
                    <div className="flex-1">
                        <div className="flex items-center justify-between gap-x-2">
                            <h3 className="inline-flex items-center text-[12pt] font-semibold leading-none">
                                {link !== "" ? (
                                    <a className="hover:underline" href={link}>
                                        {company}
                                    </a>
                                ) : (
                                    <span>{company}</span>
                                )}
                                <span className="ml-2 inline-flex leading-none">
                                    {badges.map((badge) => (
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
                        <h4 className="mt-0 mb-0 text-[11pt] leading-none">
                            {title}
                        </h4>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-0.5 leading-tight">
                {description}
                {bullets && bullets.length > 0 && (
                    <ul className="mt-0.5 space-y-0.2">
                        {bullets.map((bullet: string, idx: number) => (
                            <li
                                className="leading-tight"
                                key={idx}
                            >
                                <span className="mr-2">–</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
}
