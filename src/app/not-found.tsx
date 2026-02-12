import Link from 'next/link';
import { BlinkingCursor } from '@/components/blinking-cursor';
import { CommandPrompt } from '@/components/ui/command-prompt';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl p-4 font-code">
        <p>
          <CommandPrompt />
          <span>cat /var/log/nginx/error.log | grep &quot;404&quot;</span>
        </p>
        <p className="mt-2">
          <span className="text-destructive">error:</span> Page not found. The
          requested resource could not be located.
        </p>

        <div className="mt-8">
          <h1 className="flex items-center text-4xl font-bold md:text-6xl">
            404
            <BlinkingCursor className="ml-1 inline-block h-8 w-1 md:h-12 md:w-2" />
          </h1>
          <p className="mt-2 text-xl text-muted-foreground md:text-2xl">
            File Not Found
          </p>
        </div>

        <p className="mt-8">
          <CommandPrompt />
          <span>
            If you believe this is an error, please{' '}
            <a href="mailto:chintondutta.tech@gmail.com" className="text-accent underline">
              contact support
            </a>
            .
          </span>
        </p>

        <p className="mt-4">
          <CommandPrompt />
          <span>
            Click here to return to the{' '}
            <Link href="/" className="text-accent underline">
              homepage
            </Link>
            .
          </span>
        </p>

        <div className="mt-8 flex items-center">
          <CommandPrompt />
          <BlinkingCursor className="inline-block h-5 w-3" />
        </div>
      </div>
    </div>
  );
}
