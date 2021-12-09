import { HTMLAttributes } from 'react';
import Container from 'components/Container';

import styles from './section.module.scss';

interface ISection extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  background?: string;
  header?: React.ReactNode;
  hero?: boolean;
}

export default function Section({
  children,
  fluid = false,
  background,
  header,
  hero,
  ...rest
}: ISection) {
  return (
    <section
      className={`${styles.section} ${hero && styles.hero}`}
      style={{ background: background }}
      {...rest}
    >
      <Container fluid={fluid}>
        <div className={styles.header}>{header && header}</div>
        <div className={styles.body}>{children}</div>
      </Container>
    </section>
  );
}
