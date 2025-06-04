import { PrintButton } from "@/components/print-button";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";
import { CommandMenu } from "../components/command-menu";
import { ProjectCard } from "../components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Section } from "../components/ui/section";
import { RESUME_DATA } from "../data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name.replace(/ /g, "_")}_CV`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-6 bg-white">
        <div className="flex items-start justify-between md:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-gray-700">
              {RESUME_DATA.summary}
            </p>
            <div className="flex mt-2 gap-x-1 pt-1 font-mono text-sm text-gray-700 print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
              <PrintButton/>
            </div>
          </div>

          {/* <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar> */}
          <div className="flex flex-col items-end gap-y-0.5 text-gray-700">
            <p className="max-w-md mt-2 items-center text-pretty font-mono text-sm">
                <a
                  className="inline-flex gap-x-2 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.location}
                </a>
            </p>
            <a 
                className="max-w-md text-pretty font-mono text-sm hover:underline"
                href={RESUME_DATA.personalWebsiteUrl}
            >
              {RESUME_DATA.personalWebsiteUrl?.replace("https://", "").replace("www.", "")}
            </a>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-gray-700 print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span>{RESUME_DATA.contact.email}</span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span>{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
            </div>
          </div>
        </div>
        
        <Section>
        {RESUME_DATA.about && RESUME_DATA.about.trim() !== "" && (
          <>
            <h2 className="text-xl font-bold border-b border-gray-300">About</h2>
            <p className="text-pretty font-mono text-sm text-gray-700">
              {RESUME_DATA.about}
            </p>
          </>
        )}
        </Section>
        <Section>
          <h2 className="text-xl font-bold border-b border-gray-300">Work Experience</h2>
          {RESUME_DATA.work.map((work: any) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 text-lg font-semibold leading-none">
                    {work.link !== "" ? (
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>
                    ) : (
                      <span>{work.company}</span>
                    )}
                      <span className="ml-2 inline-flex gap-x-1">
                        {work.badges.map((badge: any) => (
                          <Badge
                            variant="secondary"
                            className="text-xs border-gray-300"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-700">
                      {work.start ? (
                        <>
                          {work.start} - {work.end === "" ? "Present" : work.end}
                        </>
                      ) : (
                        <>{work.end}</>
                      )}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs text-gray-700">
                  {work.description}
                  {work.bullets && work.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {work.bullets.map((bullet: string, idx: number) => (
                        <li key={idx}>
                          <span className="mr-2">–</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {work.technologies.map((technology: any) => (
                      <Badge 
                        variant="outline"
                        className="align-middle text-xs"
                        key={technology}
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold border-b border-gray-300">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-700">
                      {education.start && education.end ? (
                        `${education.start} - ${education.end}`
                      ) : (
                        `Graduated ${education.end}`
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-700">{education.degree}</CardContent>
                {/* <CardContent className="text-gray-700">In-Major GPA: {education.departmentalGpa}</CardContent> */}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold border-b border-gray-300">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge 
                variant="default"
                className="text-xs border-gray-300" 
                key={skill}
              >
                {skill}
              </Badge>;
            })}
          </div>
        </Section>
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold border-b border-gray-300">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
