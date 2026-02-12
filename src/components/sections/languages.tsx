import { CommandPrompt } from '@/components/ui/command-prompt';

const languages = [
  { lang: 'Bengali', level: 'Native' },
  { lang: 'English', level: 'Full Professional' },
  { lang: 'Hindi', level: 'Professional' },
];

export function Languages() {
  return (
    <section id="languages">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>locale -a</span>
      </h2>
      <div className="space-y-2 pl-6">
        {languages.map(({ lang, level }) => (
          <div key={lang} className="flex">
            <span className="w-32">{lang}</span>
            <span className="text-muted-foreground">({level})</span>
          </div>
        ))}
      </div>
    </section>
  );
}
