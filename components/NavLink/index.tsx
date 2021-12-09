import { useRouter } from 'next/dist/client/router';

import classes from './navLink.module.scss';

import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface INavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  cta?: boolean;
  fluid?: boolean;
}

export default function NavLink({ href, cta, fluid, ...rest }: INavLink) {
  const { asPath } = useRouter();

  return (
    <Link passHref href={href}>
      <a
        className={`${classes.navlink} ${href === asPath && classes.active} ${
          cta && classes.cta
        } ${fluid && classes.fluid} `}
        {...rest}
      ></a>
    </Link>
  );
}
