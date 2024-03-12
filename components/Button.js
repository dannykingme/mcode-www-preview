import cn from 'clsx';
import Link from '@/components/Link';
import Icon from '@/components/Icon';

const ButtonText = ({ text, icon }) => {
  return text || icon ? (
    <>
      {icon ? <Icon name={icon} /> : false}
      {text ? <span>{text}</span> : false}
    </>
  ) : (
    false
  );
};

// mode?: 'default' | 'filled' | 'outlined' | 'ghost'
// tone?: 'default' | 'normal' | 'positive' | 'caution' | 'critical'
// theme?: 'default' | 'light' | 'dark'

const Button = ({
  className,
  mode = 'default',
  tone = 'default',
  theme = 'default',
  text,
  icon,
  href,
  target,
  disabled,
  children,
  onClick,
  style,
  type,
}) => {
  const modeClassName = mode === 'default' ? 'filled' : mode;
  const toneClassName = tone === 'default' ? 'normal' : tone;
  const themeClassName = theme === 'default' ? 'light' : theme;
  const classNames = cn(
    className,
    themeClassName,
    'button',
    modeClassName,
    toneClassName,
    {
      children,
      disabled,
      'icon-left': icon && text,
      'icon-button': icon && !text,
      'text-button': text,
    }
  );
  const textButtonProps = {
    className: classNames,
    href,
    onClick,
    style,
    disabled,
  };
  if (text || icon) {
    if (href) {
      return (
        <Link {...textButtonProps} target={target}>
          <ButtonText text={text} icon={icon} />
        </Link>
      );
    } else {
      return (
        <button {...textButtonProps} type={type}>
          <ButtonText text={text} icon={icon} />
        </button>
      );
    }
  } else if (children) {
    return (
      <div className={classNames}>
        {children}
        {href ? (
          <Link className="click" href={href} target={target} />
        ) : (
          <button
            className="click"
            onClick={onClick}
            disabled={disabled}
            type={type}
          />
        )}
      </div>
    );
  }
};

export default Button;
