import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'section';
  elevated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, as: Component = 'div', elevated = false, className = '', ...props }, ref) => {
    const baseStyles = 'bg-white rounded-lg overflow-hidden';
    const elevationStyles = elevated
      ? 'shadow-lg hover:shadow-xl transition-shadow duration-300'
      : 'shadow-md hover:shadow-lg transition-shadow duration-300';

    return (
      <Component
        ref={ref}
        className={`${baseStyles} ${elevationStyles} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card; 