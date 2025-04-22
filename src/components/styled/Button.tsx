import { forwardRef } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  as?: React.ElementType;
};

type ButtonProps<T extends React.ElementType = 'button'> = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonBaseProps> & {
    as?: T;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', fullWidth = false, className = '', as: Component = 'button', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
      outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <Component
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button; 