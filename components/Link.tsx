import { FC, ReactNode } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import cn from 'clsx';

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: ReactNode;
  target?: string;
}

export const HyperLink: FC<LinkProps> = ({ className, ...rest }) => {
  return <Link className={cn(className, 'hyperlink')} {...rest} />;
};

const Link: FC<LinkProps> = ({ className, ...rest }) => {
  return <NextLink className={cn(className, 'link')} {...rest} />;
};

export default Link;
