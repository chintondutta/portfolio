import { BlinkingCursor } from '@/components/blinking-cursor';
import { Button } from '@/components/ui/button';
import { CommandPrompt } from '@/components/ui/command-prompt';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

const contacts = [
  {
    protocol: 'mailto:',
    value: 'chintondutta.tech@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    protocol: 'tel:',
    value: '+919073644046',
    icon: Phone,
    label: 'Phone',
  },
  {
    href: 'https://github.com/chintondutta',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/chinton-dutta/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export function Contact() {
  return (
    <section id="contact" className="pb-24">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <CommandPrompt />
        <span>contact --all</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 pl-6 sm:grid-cols-2">
        {contacts.map((contact) => (
          <Button
            key={contact.label}
            variant="ghost"
            asChild
            className="h-auto justify-start p-4 text-base"
          >
            <a
              href={contact.href || `${contact.protocol}${contact.value}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon className="mr-4 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold">{contact.label}</p>
                <p className="text-sm text-muted-foreground">
                  {contact.value || contact.href?.replace('https://', '')}
                </p>
              </div>
            </a>
          </Button>
        ))}
      </div>
      <div className="mt-12 flex items-center pl-6">
        <CommandPrompt />
        <p>
          Developed by{' '}
          <a
            href="https://amarkt.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Amar
          </a>
        </p>
        <BlinkingCursor className="ml-2 inline-block h-5 w-3" />
      </div>
    </section>
  );
}
