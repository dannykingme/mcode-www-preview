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
          <div className="nav-item nav-brand">
            <Logo />
            {handleAboutClick ? (
              <button className="link" onClick={handleAboutClick} />
            ) : (
              <Link className="link" href="/" />
            )}
          </div>
          <div className="nav-item">
            {handleAboutClick ? (
              <button onClick={handleAboutClick}>About</button>
            ) : (
              <Link href="/about">About</Link>
            )}
          </div>
          <div className="nav-item">
            <Link href="https://blog.modelcode.ai/" target="_blank">
              Blog
            </Link>
          </div>
          <div className="nav-item">
            {handleContactClick ? (
              <button onClick={handleContactClick}>Contact</button>
            ) : (
              <Link href="/contact">Contact</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
