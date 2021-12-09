import Link from 'next/link';
import Image from 'next/image';

import classes from './logo.module.scss';

export default function Logo() {
  return (
    <div>
      <Link passHref href="/">
        <img
          className={classes.logo}
          src="https://via.placeholder.com/300x80.webp?text=Velis"
          alt="Modo logo; terug naar hoofdpagina"
        />
      </Link>
    </div>
  );
}
