import { HTMLAttributes } from 'react';
import classes from './row.module.scss';

interface IRow extends HTMLAttributes<HTMLDivElement> {
  column?: string;
  layout?: 'flex-start' | 'space-between' | 'space-around' | 'center';
  slim?: boolean;
  background?: string;
}

export default function Row({
  children,
  layout,
  column,
  slim,
  background,
  ...rest
}: IRow) {
  return (
    <div
      className={`${column ? classes.grid : classes.row} ${
        slim && classes.slim
      }`}
      {...rest}
      style={{
        justifyContent: layout,
        gridTemplateColumns: column
          ? `repeat(auto-fit, minmax(${column}, 1fr))`
          : '',
        background: background,
      }}
    >
      {children}
    </div>
  );
}
