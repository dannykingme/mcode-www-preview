import scrollIntoView from 'scroll-into-view-if-needed';
import Link from '@/components/Link';

export default function Header({ element }) {
  console.log('element', element);
  const handleContactClick = () => {
    requestAnimationFrame(() => {
      scrollIntoView(element, {
        scrollMode: 'always',
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
      });
    });
  };
  return (
    <header className="header">
      <div className="nav content">
        <div className="nav-items">
          <div className="nav-item nav-brand">
            <Link href="/">Modelcode AI</Link>
          </div>
          <div className="nav-item">
            <Link href="https://blog.modelcode.ai/">Blog</Link>
          </div>
          <div className="nav-item">
            <Link href="#" onClick={handleContactClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
