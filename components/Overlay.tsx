import classNames from 'clsx';
import { PortalWithState } from 'react-portal';
import Icon from '@/components/Icon';
import Link from '@/components/Link';
import { ReactNode, MouseEvent, useEffect } from 'react';

interface OverlayProps {
  children: ReactNode;
  className?: string;
  close?: () => void;
  [key: string]: any;
}

const useBodyClassName = (className: string) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};

export const Overlay = ({
  children,
  className,
  close,
  ...rest
}: OverlayProps) => {
  useBodyClassName('overlaying');

  const handleClick = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    if (close) {
      close();
    }
  };

  return (
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
            <Icon name="times" />
          </div>
        </button>
      </div>
    </div>
  );
};

interface MenuOverlayProps {
  close?: () => void;
  title?: string;
  images?: string[];
}

export const MenuOverlay = ({ close, title, images }: MenuOverlayProps) => {
  useBodyClassName('overlaying overlaying-menu');

  return (
    <div className="menu">
      <div className="menu-items">
        <Link className="menu-item" href="/about">
          About
        </Link>
      </div>
    </div>
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
        <Icon name="menu" />
      </button>,
      portal(<MenuOverlay close={closePortal} />),
    ]}
  </PortalWithState>
);
