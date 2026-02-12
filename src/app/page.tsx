import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Languages } from '@/components/sections/languages';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto flex max-w-4xl items-start p-4 pt-8 md:p-8 md:pt-16">
        <Hero />
      </div>
      <div className="mx-auto max-w-4xl space-y-16 p-4 md:space-y-24 md:p-8">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Separator className="bg-foreground/20" />
        <Contact />
      </div>
    </main>
  );
}
