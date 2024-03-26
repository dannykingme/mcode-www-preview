import { default as NextLink } from 'next/link';
import cn from 'clsx';

const Link = ({ className, ...rest }) => {
  return <NextLink className={cn(className, 'link')} {...rest} />;
};

export const HyperLink = ({ className, ...rest }) => {
  return <Link className={cn(className, 'hyperlink')} {...rest} />;
};

export default Link;
