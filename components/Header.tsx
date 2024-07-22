import scrollIntoView from 'scroll-into-view-if-needed';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import { FC } from 'react';

interface HeaderProps {
  handleAboutClick?: () => void;
  handleContactClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  handleAboutClick = null,
  handleContactClick = null,
}) => {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-items content">
          <Link className="nav-item nav-brand" href="/">
            <Logo />
            <span className="mcode-name display">Modelcode AI</span>
            {/* <Link className="link" href="/" /> */}
          </Link>
          {handleAboutClick ? (
            <button className="nav-item" onClick={handleAboutClick}>
              About
            </button>
          ) : (
            <Link className="nav-item" href="/about">
              About
            </Link>
          )}
          <Link className="nav-item" href="/press">
            Press
          </Link>
          <Link
            className="nav-item"
            href="https://blog.modelcode.ai/"
            target="_blank"
          >
            Blog
          </Link>
          {handleContactClick ? (
            <button className="nav-item" onClick={handleContactClick}>
              Contact
            </button>
          ) : (
            <Link className="nav-item" href="/contact">
              Contact
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
