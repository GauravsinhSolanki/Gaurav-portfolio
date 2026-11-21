'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
};

/** Rises 32px and fades in once when it enters the viewport. Opacity only under reduced motion. */
export default function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Tag>
  );
}
