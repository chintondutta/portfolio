'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
import { BlinkingCursor } from '@/components/blinking-cursor';

const bootSequence = [
  { text: '> booting profile...', delay: 100 },
  { text: '> initializing system architecture...', delay: 150 },
  { text: '> user: chinton_dutta', delay: 100 },
  { text: '> role: backend & devops engineer', delay: 200 },
  { text: '> loading distributed workflows...', delay: 150 },
  { text: '[OK]', delay: 50 },
];

export function Hero() {
  const { changeTheme } = useTheme();
  const [lines, setLines] = useState<string[]>([]);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timeouts = new Set<ReturnType<typeof setTimeout>>();

    const runSequence = (index: number) => {
      if (index >= bootSequence.length) {
        const t = setTimeout(() => setShowName(true), 100);
        timeouts.add(t);
        return;
      }

      setLines(prev => [...prev, bootSequence[index].text]);

      const t = setTimeout(() => runSequence(index + 1), bootSequence[index].delay);
      timeouts.add(t);
    };

    const initialTimeout = setTimeout(() => runSequence(0), 500);
    timeouts.add(initialTimeout);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, []);

  return (
    <section id="hero">
    <div className="w-full text-xs md:text-sm">
      <div className="min-h-40">
        {lines.map((line, index) => (
          <p key={index} className="font-code">
            {line.startsWith('[OK]') ? (
              <span className="text-primary">{line}</span>
            ) : (
              line
            )}
          </p>
        ))}
      </div>

      {showName && (
        <div>
          <h1
            className="group mt-4 cursor-pointer select-none text-4xl font-bold transition-transform duration-150 ease-in-out hover:scale-[1.01] active:scale-[0.99] md:text-6xl"
            onClick={changeTheme}
            title="Click to change theme"
          >
            Chinton Dutta
            <BlinkingCursor className="ml-1 inline-block h-8 w-1 md:h-12 md:w-2" />
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            Backend & DevOps Engineer
          </p>
        </div>
      )}
    </div>
    </section>
  );
}
