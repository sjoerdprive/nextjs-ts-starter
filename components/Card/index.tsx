import { HTMLAttributes } from 'react';

import styles from './card.module.scss';

interface ICard extends HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  href?: string;
  theme?: string;
}

export default function Card({
  header,
  body,
  href,
  children,
  footer,
  theme,
  ...rest
}: ICard) {
  const content = (
    <div
      {...rest}
      className={`${styles.card} ${header && styles.withHeader} ${
        footer && styles.withFooter
      } ${theme && styles[theme]}`}
    >
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children ? children : <p>{body}</p>}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
