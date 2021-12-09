import { HTMLAttributes } from 'react';

import classes from './container.module.scss';

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export default function Container({
  children,
  fluid = false,
  ...rest
}: IContainer) {
  return (
    <div
      className={`${fluid ? classes.containerFluid : classes.container}`}
      {...rest}
    >
      {children}
    </div>
  );
}
