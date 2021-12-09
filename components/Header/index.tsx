import Logo from 'components/Logo';
import Container from 'components/Container';
import NavLink from 'components/NavLink';

import styles from './header.module.scss';
import Row from 'components/Row';
import Navigation from 'components/Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row slim layout="space-between">
          <Logo />
          <Navigation>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#">#</NavLink>
          </Navigation>
        </Row>
      </Container>
    </header>
  );
}
