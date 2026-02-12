import { cn } from '@/lib/utils';

export const BlinkingCursor = ({ className }: { className?: string }) => {
  return (
    <span className={cn('cursor-blink bg-foreground', className)}>
      &nbsp;
    </span>
  );
};
