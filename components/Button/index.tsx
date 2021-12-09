import { HTMLAttributes } from 'react';

import classes from './button.module.scss';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  cta?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  cta,
  type = 'button',
  ...rest
}: IButton) {
  return (
    <button
      type={type}
      {...rest}
      className={`${classes.button} ${cta && classes.cta}`}
    >
      {children}
    </button>
  );
}
