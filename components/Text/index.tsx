import React, { HTMLAttributes } from 'react';

import styles from './text.module.scss';

interface IText extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  fluid?: boolean;
  background?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  primary?: boolean;
  slim?: boolean;
  muted?: boolean;
}

export default function Text({
  className,
  children,
  fluid = false,
  background,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  primary,
  muted,
  slim,
  ...rest
}: IText) {
  const el = h1
    ? 'h1'
    : h2
    ? 'h2'
    : h3
    ? 'h3'
    : h4
    ? 'h4'
    : h5
    ? 'h5'
    : h6
    ? 'h6'
    : 'p';

  let id = el !== 'p' ? children.toString() : undefined;
  return React.createElement(
    el,
    {
      style: { background: background },
      className: `
      ${styles.text}
      ${fluid ? styles.fluid : ''}
      ${primary ? styles.primary : ''}
      ${slim ? styles.slim : ''}
      ${muted ? styles.muted : ''}     
      ${className}
      `,
      id: id && id.toLowerCase().replace(/ /g, '-'),
      ...rest,
    },
    children
  );
}
