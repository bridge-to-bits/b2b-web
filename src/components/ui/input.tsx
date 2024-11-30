import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-10 items-center rounded-md border bg-graphite px-3 border-blue text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
          className
        )}
      >
        {icon}

        <input
          {...props}
          ref={ref}
          className='w-full p-2 placeholder:text-muted-foreground bg-graphite focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
