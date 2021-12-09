import React, { ReactNode } from 'react';

import classes from './iconButton.module.scss';

interface IIConButton {
  href?: string;
  onClick?: () => {};
  icon: ReactNode;
  name?: string;
  hideName?: boolean;
}

export default function IconButton({
  href,
  onClick,
  icon,
  name,
  hideName = false,
}: IIConButton) {
  const content = (
    <>
      <div className={classes.icon} aria-hidden={!name}>
        {icon}
      </div>
      {!hideName && name && <p>{name}</p>}
    </>
  );
  return (
    <div className={classes.iconButton}>
      {onClick && !href && <button onClick={onClick}>{content}</button>}
      {href && <a href={href}>{content}</a>}
      {!onClick && !href && content}
    </div>
  );
}
