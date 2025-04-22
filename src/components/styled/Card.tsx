import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  elevated?: boolean;
}

const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ 
    children, 
    as: Component = 'div', 
    elevated = false,
    className,
    ...props 
  }, ref) => {
    const baseClasses = 'bg-white rounded-lg overflow-hidden';
    const elevationClass = elevated ? 'shadow-lg' : 'shadow';

    return (
      <Component
        ref={ref}
        className={twMerge(
          baseClasses,
          elevationClass,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card; 