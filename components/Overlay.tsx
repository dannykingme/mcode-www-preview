import classNames from 'clsx';
import BodyClassName from 'react-body-classname';
import { PortalWithState } from 'react-portal';
import Icon from '@/components/Icon';
import Link from '@/components/Link';

export const Overlay = ({ children, className, close, ...rest }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (close) {
      close();
    }
  };
  return (
    <BodyClassName className="overlaying">
      <div className={classNames('overlay', className)} {...rest}>
        <div className={classNames('overlay-background')} />
        <div className={classNames('overlay-foreground')} onClick={handleClick}>
          {children}
          <button
            className="overlay-action"
            disabled={!close}
            onClick={handleClick}
          >
            <div className="overlay-action-title">Close</div>
            <div className="overlay-action-icon">
              <Icon times />
            </div>
          </button>
        </div>
      </div>
    </BodyClassName>
  );
};

export const MenuOverlay = ({ close, title, images }) => {
  return (
    <BodyClassName className="overlaying overlaying-menu">
      <div className="menu">
        <div className="menu-items">
          <Link className="menu-item" href="/about">
            About
          </Link>
        </div>
      </div>
    </BodyClassName>
  );
};

export const OpenMenu = () => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => [
      <button
        className="menu-button"
        onClick={openPortal}
        key="menu-button-key"
      >
        <Icon menu />
      </button>,
      portal(<MenuOverlay close={closePortal} />),
    ]}
  </PortalWithState>
);
