import { CommandPrompt } from '@/components/ui/command-prompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    role: 'Co-Founder (Product & Engineering)',
    company: 'FREMN',
    companyUrl: 'https://www.fremn.com/',
    location: 'Kolkata',
    period: 'Nov 2025 – Present',
    logs: [
      'Architecting backend systems & Kubernetes-based cloud infrastructure for AI SaaS products.',
      'Leading API design, distributed job workflows, and DevOps automation.',
      'Building production-ready CI/CD pipelines.',
      'Managing multi-tenant backend architecture.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Yolopment',
    companyUrl: 'https://yolopment.com/',
    location: 'Kolkata',
    period: 'Aug 2025 – Jan 2026',
    logs: [
      'Built REST APIs for various business modules.',
      'Integrated multiple database-driven modules.',
      'Resolved production issues and provided timely support.',
      'Supported deployment and code review workflows.',
    ],
  },
];

const LogLine = ({ message }: { message: string }) => (
  <div className="flex items-start">
    <span className="mr-4 text-accent">{'>'}</span>
    <p className="text-muted-foreground">{message}</p>
  </div>
);

export function Experience() {
  return (
    <section id="experience">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>tail -f /var/log/career.log</span>
      </h2>
      <div className="space-y-8 pl-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-foreground/20 bg-transparent">
            <CardHeader>
              <CardTitle className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-4">
                <div>
                  <p className="text-accent">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    {` :: ${exp.role}`}
                  </p>
                </div>
                <span className="text-sm font-normal text-muted-foreground">
                  {exp.period}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {exp.logs.map((log, logIndex) => (
                <LogLine key={logIndex} message={log} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
