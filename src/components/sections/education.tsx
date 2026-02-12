import { CommandPrompt } from '@/components/ui/command-prompt';
import { Card, CardContent } from '@/components/ui/card';

export function Education() {
  return (
    <section id="education">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>cat /etc/education.conf</span>
      </h2>
      <div className="pl-6">
        <Card className="border-foreground/20 bg-transparent">
          <CardContent className="p-6">
            <p className="text-lg font-bold">
              BCA(H) - Bachelor’s in Computer Application (Honours)
            </p>
            <p className="text-muted-foreground">Techno India University</p>
            <p className="mt-2 text-sm text-accent">Sep 2023 – Aug 2027</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
