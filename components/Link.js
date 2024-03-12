import { default as NextLink } from 'next/link';
import cn from 'clsx';

export const HyperLink = ({ className, ...rest }) => {
  return <Link className={cn(className, 'hyperlink')} {...rest} />;
};

const Link = ({ className, ...rest }) => {
  return <NextLink className={cn(className, 'link')} {...rest} />;
};

export default Link;
