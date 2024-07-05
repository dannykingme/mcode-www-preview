import cn from 'clsx';
import piles from '@/data/piles.json';
import paths from '@/data/paths.json';
import { ReactNode } from 'react';

type PilesType = { [key: string]: string[] };
const typedPiles: PilesType = piles as PilesType;

type PathsType = { [key: string]: string };
const typedPaths: PathsType = paths as PathsType;

function Shape({
  shape,
  className,
  d,
  ...rest
}: {
  shape: string;
  className?: string;
  d?: string;
}) {
  const type = shape.split('-')[0];
  const name = shape.split(type)[1].substr(1);
  return (
    <path
      d={d}
      className={cn('icon-shape', `shape-${name}`, type, className)}
      {...rest}
    />
  );
}

function Shapes({
  className,
  ...rest
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <svg
      className={cn('icon-shapes', className)}
      viewBox={'0 0 100 100'}
      {...rest}
    />
  );
}

function Icon({
  name,
  inline,
  style,
  className,
  ...rest
}: {
  name?: string;
  inline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { warn } = console;
  const iconName = Object.keys(rest)[0];
  let id = iconName;

  if (name) {
    id = name;
  } else if (!typedPiles[iconName]) {
    warn(`iconpile "${iconName}" is undefined`);
    id = 'delete';
  }

  return (
    <i
      className={cn(className, { inline }, `icon-${id}`, 'icon')}
      style={style}
    >
      <Shapes>
        {typedPiles[id].map((n) => (
          <Shape shape={n} d={typedPaths[n]} key={n} />
        ))}
      </Shapes>
    </i>
  );
}

// Icon.propTypes = {}
// Icon.defaultProps = {}
// Object.keys(piles).forEach(icon => {
//   Icon.propTypes[icon] = PropTypes.bool
//   Icon.defaultProps[icon] = false
// })

export default Icon;
