import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
  const Comp = asChild ? Slot: 'h2';

  return (
    <Comp className={clsx(
      "text-gray-100 font-bold font-sans", 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
        'text-3xl': size === 'xlg',
      },
      className,

    )}  
  >
    {children}
  </Comp>
  )
  
}