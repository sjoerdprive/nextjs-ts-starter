import Header from 'components/Header';
import { HTMLAttributes } from 'react';

interface ILayout extends HTMLAttributes<HTMLDivElement> {
  background?: string;
}

export default function LayoutDefault({ children, background }: ILayout) {
  return (
    <div style={{ background: background }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
