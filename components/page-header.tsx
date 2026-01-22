'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { SectionHeaderProps, SubsectionHeaderProps } from '@/lib/design-system.types';

// Re-export for backward compatibility
export type { SectionHeaderProps, SubsectionHeaderProps };

export function SectionHeader({
  subtitle,
  title,
  className = '',
  align = 'left',
  maxWidth = '2xl',
}: SectionHeaderProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
    none: '',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const renderTitle = () => {
    if (typeof title !== 'string') {
      return title;
    }

    const letters = title.split('');
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            style={{
              display: letter === ' ' ? 'inline' : 'inline-block',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div className={`${className}`}>
      <div className={`flex flex-col gap-2 ${maxWidthClasses[maxWidth]} ${alignClasses[align]}`}>
        {/* Subtitle with animation */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex flex-col gap-1"
          >
            <motion.p
              className="text-sm font-mono text-black dark:text-white uppercase font-bold tracking-wider"
            >
              {subtitle}
            </motion.p>
            <div className="h-[2px] w-12 bg-blue-600 dark:bg-blue-400" />
          </motion.div>
        )}

        {/* Title with blue color - standardized to text-4xl */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-display text-blue-600 dark:text-whiy font-bold"
        >
          {renderTitle()}
        </motion.h2>
      </div>
    </div>
  );
}

// Even simpler version with just fade-in animation
export function SimpleSectionHeader({
  subtitle,
  title,
  className = '',
  align = 'left',
  maxWidth = '2xl',
}: SectionHeaderProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
    none: '',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${className}`}
    >
      <div className={`flex flex-col gap-2 ${maxWidthClasses[maxWidth]} ${alignClasses[align]}`}>
        {subtitle && (
          <p className="text-sm font-mono text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider">
            {subtitle}
          </p>
        )}
        <h2 className="text-2xl font-display text-blue-600 dark:text-blue-400 font-bold">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

// New SubsectionHeader component for secondary headers
export function SubsectionHeader({
  subtitle,
  title,
  className = '',
  align = 'left',
  size = 'default',
}: SubsectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const titleSizeClass = size === 'small' ? 'text-lg' : 'text-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-2 ${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <p className="text-sm font-mono text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider">
          {subtitle}
        </p>
      )}
      <h3 className={`${titleSizeClass} font-display text-blue-600 dark:text-blue-400 font-bold`}>
        {title}
      </h3>
    </motion.div>
  );
}