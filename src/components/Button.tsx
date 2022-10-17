import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot: 'button';

  return (
    <Comp className={clsx(
      "py-4 px-4 bg-blue-500 rounded font-semibold text-black text-sm w-full                         transition-colors hover:bg-blue-200 focus:ring-2 ring-white", 
    )}  
  >
    {children}
  </Comp>
  )
  
}