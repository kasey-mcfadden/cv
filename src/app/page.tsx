import { MinimalProjectCard } from "@/components/minimal-project-card";
import { PrintButton } from "@/components/print-button";
import { WorkCard } from "@/components/work-card";
import { cleanUrl } from "@/lib/utils";
import { Metadata } from "next";
import { CommandMenu } from "../components/command-menu";
import { ProjectCard } from "../components/project-card";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Section } from "../components/ui/section";
import { RESUME_DATA, WorkEntry } from "../data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name.replace(/ /g, "_")}_CV`,
  description: RESUME_DATA.title,
};

const linkedIn = RESUME_DATA.contact.social.find(
  (social) => social.name === "LinkedIn"
);

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto md:p-12">
      <section className="mx-auto w-full max-w-3xl space-y-3 bg-white">
        <div className="flex items-start justify-between md:flex-row">
          <div className="flex-1">

            <h1 className="text-[14pt] font-bold leading-tight">{RESUME_DATA.name}</h1>

            <div className="flex items-center justify-between w-full text-pretty text-[11pt] leading-tight">
              <p>
                {RESUME_DATA.title}
              </p>
              <a
                className="hover:underline whitespace-nowrap"
                href={RESUME_DATA.personalWebsiteUrl}
              >
                {RESUME_DATA.personalWebsiteUrl ? cleanUrl(RESUME_DATA.personalWebsiteUrl) : null}
              </a>
            </div>

            <div className="flex items-center justify-between w-full text-pretty text-[11pt] leading-tight">
              <a
                className="hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                {RESUME_DATA.location}
              </a>
              {RESUME_DATA.contact.email ? (
                <a
                  className="inline-flex gap-x-2 align-baseline hover:underline"
                  href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span>{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>

            <div className="invisible print:visible flex items-center justify-end w-full text-pretty text-[11pt] leading-tight">
              {linkedIn && (
                <a
                  className="hover:underline whitespace-nowrap"
                  href={linkedIn.url}
                  target="_blank"
                >
                  {cleanUrl(linkedIn.url)}
                </a>
              )}
            </div>

            <div className="flex mt-1 gap-x-1 pt-1 text-[12pt] print:hidden">
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
              <PrintButton />
            </div>
          </div>
        </div>

        <Section>
          {RESUME_DATA.about && RESUME_DATA.about.trim() !== "" && (
            <>
              <h2 className="text-[12pt] border-b border-gray-400 leading-none">ABOUT</h2>
              <p className="text-pretty text-[10pt] leading-tight">
                {RESUME_DATA.about}
              </p>
            </>
          )}
        </Section>

        <Section>
          <h2 className="text-[12pt] border-b border-gray-400 leading-none">WORK EXPERIENCE</h2>
          {RESUME_DATA.work.map((work: WorkEntry) => {
            return (
              <WorkCard
                key={work.company + work.title}
                company={work.company}
                title={work.title}
                description={work.description}
                link={work.link}
                start={work.start}
                end={work.end}
                badges={work.badges}
                bullets={"bullets" in work ? work.bullets : undefined}
                logo={"logo" in work ? work.logo : undefined}
              />
            );
          })}
        </Section>

        <Section>
          <h2 className="text-[12pt] border-b border-gray-400 leading-none">EDUCATION</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    {"logo" in education && education.logo && (
                      <img
                        src={education.logo}
                        alt={`${education.school} logo`}
                        className="h-8 w-8 object-contain print:hidden"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-x-2">
                        <h3 className="font-semibold leading-none">
                          {education.school}
                        </h3>
                        <div className="text-[10pt] tabular-nums italic">
                          {education.start && education.end ? (
                            `${education.start} - ${education.end}`
                          ) : (
                            `Graduated ${education.end}`
                          )}
                        </div>
                      </div>
                      <div className="text-[10pt]">{education.degree}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="hidden">In-Major GPA: {education.departmentalGpa}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-[12pt] border-b border-gray-400 leading-none">SKILLS</h2>
          <div className="text-[10pt] leading-none space-y-0.5">
            {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
              <div key={category}>
                <span className="font-semibold capitalize">{category}:</span>{" "}
                <span>{items.join(", ")}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section className="scroll-mb-16 print:hidden">
          <h2 className="text-[12pt] border-b border-gray-400 leading-none">PROJECTS</h2>
          <div className="print:hidden -mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="invisible print:visible mb-0.5">
            {RESUME_DATA.projects.map((project) => {
              return (
                <MinimalProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
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
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
