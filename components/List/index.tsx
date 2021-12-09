import React, {
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react';

import classes from './list.module.scss';

interface IList extends HTMLAttributes<HTMLOListElement> {
  ordered?: boolean;
  items: ReactNode[];
  listType?: 'none' | 'default';
  marker?: React.ReactNode;
  inline?: boolean;
  slim?: boolean;
  listItem?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function List({
  items,
  ordered,
  listType = 'default',
  marker,
  inline,
  slim,
  listItem = <span></span >,
  ...rest
}: IList) {
  const listProps = {
    className: `${classes.list} ${classes[listType]} ${
      marker && classes.none
    } ${inline && classes.inline}`,
    ...rest,
  };
  const content = (
    <>
      {items.map((item, index) => {
        return (
          <li key={index}>
            {React.cloneElement(
              listItem,
              {
                className: `${classes.listItem} ${slim && classes.slim}`,
              },

              <>
                {marker && (
                  <span aria-hidden className={classes.marker}>
                    {marker}
                  </span>
                )}
                {item}
              </>
            )}
          </li>
        );
      })}
    </>
  );

  return ordered ? (
    <ol {...listProps}>{content}</ol>
  ) : (
    <ul {...listProps}>{content}</ul>
  );
}
