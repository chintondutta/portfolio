import { CommandPrompt } from '@/components/ui/command-prompt';

const skills = {
  Languages: ['TypeScript', 'JavaScript', 'SQL', 'Bash'],
  Backend: [
    'Node.js',
    'Express.js',
    'tRPC',
    'REST APIs',
    'WebSockets',
    'JWT',
    'Zod',
    'Prisma ORM',
    'Clerk',
  ],
  Databases: [
    'PostgreSQL',
    'MongoDB',
    'Redis (Pub/Sub, Streams)',
    'Neon Serverless Postgres',
    'Convex',
  ],
  AI: [
    'OpenAI APIs',
    'Retrieval-Augmented Generation (RAG)',
    'AI Agents',
    'Inngest',
    'E2B Sandboxes',
  ],
  DevOps: [
    'Docker',
    'Docker Compose',
    'Kubernetes',
    'Helm',
    'AWS (EC2, ECS, ECR, ASGs, Secrets Manager)',
    'CI/CD',
    'ArgoCD',
    'Prometheus',
    'Grafana',
    'New Relic',
    'Sentry',
  ],
};

export function Skills() {
  return (
    <section id="skills">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>skills --list</span>
      </h2>
      <div className="space-y-4 pl-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2 md:flex-row md:items-center">
            <p className="w-28 flex-shrink-0 font-semibold text-accent">
              {category.toLowerCase()}:
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-2">
              {items.map((item) => (
                <span key={item}>
                  <span className="text-muted-foreground">--</span>
                  {item}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
