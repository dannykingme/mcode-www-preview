import Link from '@/components/Link';

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-items">
          <div className="nav-item nav-brand">
            <Link href="/">Modelcode.ai</Link>
          </div>
          <div className="nav-item">
            <Link href="https://blog.modelcode.ai/">Blog</Link>
          </div>
          <div className="nav-item">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
