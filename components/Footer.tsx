import Link from '@/components/Link';
import Logo from '@/components/Logo';

interface FooterProps {
  handleAboutClick?: () => void;
}

export default function Footer({ handleAboutClick = undefined }: FooterProps) {
  return (
    <footer className="footer">
      <div className="nav content">
        <div className="nav-items">
          {/* <div className="nav-item nav-brand">
            <Link href="/">Modelcode AI</Link>
          </div> */}
          <div className="nav-item nav-brand">
            <Logo />
            <button className="link" onClick={handleAboutClick} />
          </div>
          {/* <div className="nav-item">
            <Link href="https://blog.modelcode.ai/">Blog</Link>
          </div> */}
          {/* <div className="nav-item">
            <Link href="/contact">Contact</Link>
          </div> */}
          <div className="nav-item nav-copyright">© 2024 Modelcode AI</div>
        </div>
      </div>
      {/* <div className="nav content">© 2024 Modelcode AI</div> */}
    </footer>
  );
}
