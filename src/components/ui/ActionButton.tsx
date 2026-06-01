import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'danger' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ActionButtonProps {
    label?: string;
    onClick: () => void;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    iconColor?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white  hover:bg-primary/80',
    outline: 'bg-white text-primary  hover:text-primary hover:bg-primary/10',
    danger: 'bg-white text-red-600  hover:bg-red-50 ',
    warning: 'bg-white text-yellow-600  hover:bg-yellow-50 ',
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-8  px-2 text-xs gap-1.5',
    md: 'h-9  px-2.5 text-sm gap-2',
    lg: 'h-11 px-5 text-sm gap-2',
};

const iconSizeClasses: Record<ButtonSize, string> = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4   h-4',
    lg: 'w-5   h-5',
};

const ActionButton: React.FC<ActionButtonProps> = ({
    label,
    onClick,
    Icon,
    iconColor,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
        group inline-flex items-center justify-center font-medium rounded-md
        transition-all duration-200 border border-gray-200 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
        >
            {label}
            {Icon && (
                <Icon
                    className={`
            ${iconSizeClasses[size]}
            transition-transform duration-200
             group-hover:scale-110
            ${iconColor ?? ''}
          `.trim().replace(/\s+/g, ' ')}
                />
            )}
        </button>
    );
};

export default ActionButton;