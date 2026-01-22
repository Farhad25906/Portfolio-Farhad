/**
 * Design System Type Definitions
 * Standardized types for consistent spacing, text sizing, and colors
 */

// Text Size Scale - Limited to 5 sizes
export type TextSize = 'sm' | 'base' | 'lg' | '2xl' | '4xl';

export const textSizeClasses: Record<TextSize, string> = {
  sm: 'text-sm',      // 0.875rem (14px) - Small text, captions
  base: 'text-base',  // 1rem (16px) - Body text
  lg: 'text-lg',      // 1.125rem (18px) - Emphasized body text
  '2xl': 'text-2xl',  // 1.5rem (24px) - Subsection headers
  '4xl': 'text-4xl',  // 2.25rem (36px) - Section headers
};

// Spacing Scale - Standardized gaps and padding
export type SpacingSize = '4' | '6' | '8';

export const gapClasses: Record<SpacingSize, string> = {
  '4': 'gap-4',  // 1rem - Tight spacing
  '6': 'gap-6',  // 1.5rem - Standard spacing
  '8': 'gap-8',  // 2rem - Section spacing
};

export const paddingClasses: Record<SpacingSize, string> = {
  '4': 'p-4',   // 1rem - Tight padding
  '6': 'p-6',   // 1.5rem - Standard padding
  '8': 'p-8',   // 2rem - Large padding
};

// Color Variants - Blue only
export type ColorVariant = 'primary' | 'hover' | 'light' | 'border';

export const blueColorClasses = {
  light: {
    primary: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:text-blue-700 dark:hover:text-blue-500',
    bg: 'bg-blue-600 dark:bg-blue-400',
    bgHover: 'hover:bg-blue-700 dark:hover:bg-blue-500',
    bgLight: 'bg-blue-50 dark:bg-blue-950',
    border: 'border-blue-200 dark:border-blue-800',
    borderHover: 'hover:border-blue-500 dark:hover:border-blue-400',
  },
} as const;

// Header Component Props
export interface BaseHeaderProps {
  subtitle?: string;
  title: string | React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export interface SectionHeaderProps extends BaseHeaderProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
}

export interface SubsectionHeaderProps extends BaseHeaderProps {
  size?: 'default' | 'small';
}
