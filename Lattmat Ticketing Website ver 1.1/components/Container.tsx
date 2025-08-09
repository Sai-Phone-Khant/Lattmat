import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px] ${className}`}>
      {children}
    </div>
  );
}