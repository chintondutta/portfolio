import { Button } from '@/components/ui/button';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { Download } from 'lucide-react';

const summaryPoints = [
  'Scalable backend systems and AI-driven production platforms.',
  'Node.js, TypeScript, and distributed job orchestration.',
  'Kubernetes-based cloud deployments and workflow engines.',
  'Multi-tenant SaaS platforms & sandboxed execution environments.',
  'Durable background processing systems & real-time data pipelines.',
  'Focus on reliability, system design, and performance under concurrent workloads.',
];

export function About() {
  return (
    <section id="about">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center text-2xl font-bold">
          <CommandPrompt />
          <span>cat about.txt</span>
        </h2>
        <Button variant="ghost" asChild>
          <a href="/Chinton Dutta - Resume.pdf" download>
            <Download />
            [Resume]
          </a>
        </Button>
      </div>
      <div className="space-y-4 pl-6 text-muted-foreground">
        <p>
          Backend and DevOps engineer building scalable backend systems and
          AI-driven production platforms. Experienced in architecting and
          managing:
        </p>
        <ul className="list-disc list-inside space-y-2">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
