import scrollIntoView from 'scroll-into-view-if-needed';
import Link from '@/components/Link';
import Logo from '@/components/Logo';

export default function Header({ handleAboutClick, handleContactClick }) {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-items content">
          <div className="nav-item nav-brand">
            <Logo />
            <button className="link" href="/" onClick={handleAboutClick} />
          </div>
          <div className="nav-item">
            <button onClick={handleAboutClick}>About</button>
          </div>
          <div className="nav-item">
            <Link href="https://blog.modelcode.ai/">Blog</Link>
          </div>
          <div className="nav-item">
            <button onClick={handleContactClick}>Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
}
