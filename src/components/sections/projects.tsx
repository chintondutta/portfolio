import { CommandPrompt } from '@/components/ui/command-prompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    name: 'Cortex',
    description: 'AI-Powered Website Builder',
    launchMessage: 'agentic AI orchestration...',
    tech: [
      'TypeScript',
      'tRPC',
      'Prisma ORM',
      'Neon Postgres',
      'Inngest',
      'E2B',
      'OpenAI APIs',
    ],
    details: [
      'Agentic AI system converting natural language prompts into deployed multi-file web applications.',
      'Secure sandbox execution via isolated E2B micro-VMs for code generation.',
      'JSONB-backed persistence for flexible data structures.',
      'Durable orchestration to handle concurrent user requests reliably.',
    ],
    link: 'https://cortex.chintondutta.com/',
    repo: 'https://github.com/chintondutta/cortex',
  },
  {
    name: 'Solvia',
    description: 'AI Customer Support Platform',
    launchMessage: 'RAG pipeline initialization...',
    tech: [
      'TypeScript',
      'Convex',
      'Clerk',
      'OpenAI',
      'RAG',
      'Vapi',
      'AWS Secrets Manager',
      'Sentry',
    ],
    details: [
      'Multi-tenant AI support platform with organization-scoped authentication.',
      'RAG pipelines for providing contextual chat and voice responses.',
      'Secure credential management using AWS Secrets Manager.',
      'Production monitoring and error tracking with Sentry.',
    ],
    link: 'https://solvia.fremn.com/',
  },
  {
    name: 'Synapse',
    description: 'Visual Workflow Automation Platform',
    launchMessage: 'DAG execution engine startup...',
    tech: [
      'TypeScript',
      'Node.js',
      'tRPC',
      'Prisma ORM',
      'Inngest',
      'Redis',
      'OpenAI APIs',
    ],
    details: [
      'Durable workflow engine based on an event-driven architecture.',
      'Directed Acyclic Graph (DAG) based execution with topological sorting.',
      'Modular executor architecture for extensible functionality.',
      'Leverages Redis for efficient Pub/Sub messaging and state management.',
    ],
    link: 'https://synapse.chintondutta.com/',
    repo: 'https://github.com/chintondutta/synapse',
  },
];

export function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>ls -a /var/www/projects</span>
      </h2>
      <div className="space-y-8 pl-6">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="border-foreground/20 bg-transparent"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-accent">
                    {project.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    [LAUNCHING] {project.launchMessage}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      title="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-6">
              <p className="mb-4 text-lg font-medium">{project.description}</p>
              <div className="mb-4 space-y-2">
                {project.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    - {detail}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-accent/50 bg-accent/10 text-accent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
