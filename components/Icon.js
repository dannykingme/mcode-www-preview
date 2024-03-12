import cn from 'clsx';
import piles from '@/data/piles.json';
import paths from '@/data/paths.json';

const Shape = ({ shape, className, ...rest }) => {
  const type = shape.split('-')[0];
  const name = shape.split(type)[1].substr(1);
  return (
    <path
      className={cn('icon-shape', `shape-${name}`, type, className)}
      {...rest}
    />
  );
};

const Shapes = ({ className, ...rest }) => (
  <svg
    className={cn('icon-shapes', className)}
    viewBox={'0 0 100 100'}
    {...rest}
  />
);

const Icon = ({ name, inline, style, className, ...rest }) => {
  const { warn } = console;
  const iconName = Object.keys(rest)[0];
  let id = iconName;

  if (name) {
    id = name;
  } else if (!piles[iconName]) {
    warn(`iconpile "${iconName}" is undefined`);
    id = 'delete';
  }

  return (
    <i
      className={cn(className, { inline }, `icon-${id}`, 'icon')}
      style={style}
    >
      <Shapes>
        {piles[id].map((n) => (
          <Shape shape={n} d={paths[n]} key={n} />
        ))}
      </Shapes>
    </i>
  );
};

// Icon.propTypes = {}
// Icon.defaultProps = {}
// Object.keys(piles).forEach(icon => {
//   Icon.propTypes[icon] = PropTypes.bool
//   Icon.defaultProps[icon] = false
// })

export default Icon;
