import type { ReactElement } from 'react';

interface WrapWhenProps {
  wrap: Function;
  when: boolean;
  children: ReactElement;
}

const WrapWhen = ({ when, wrap, children }: WrapWhenProps) =>
  when ? wrap(children) : children;

export default WrapWhen;
