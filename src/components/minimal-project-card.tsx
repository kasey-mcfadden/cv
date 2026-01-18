import { cleanUrl } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  link?: string;
}

export function MinimalProjectCard({ title, description, link }: Props) {
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
        {cleanUrl(link)}
      </span>
      )}
    </p>
  );
}
