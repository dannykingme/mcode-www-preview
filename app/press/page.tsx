import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App from '@/components/App';
import ContactForm from '@/components/ContactForm';
import Link from '@/components/Link';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <App>
      <Header />
      <div className="main">
        <div className="content">
          <div className="press">
            <div className="press-info">
              <h1>Media & Press Kit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eleifend a orci sed tincidunt. Cras viverra interdum eros at
                tempus. Vivamus a tortor ligula.
              </p>
              <Button text="Download kit." />
            </div>
            <div className="press-media">
              <div className="press-logo">
                <Icon name="mcode-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="articles-container">
          <div className="content">
            <div className="articles-heading">
              <h1>In the news</h1>
            </div>
            <div className="articles">
              <div className="article">
                <h6 className="article-type">CNBC</h6>
                <h2 className="article-title">
                  Michael Fertik talks AI on CNBC Squawk Box
                </h2>
                <div className="article-meta">
                  <span>7 min watch</span>
                  <div className="article-meta-external">
                    <Icon name="external" />
                  </div>
                </div>
                <Link
                  className="article-handle"
                  href="https://www.cnbc.com/video/2024/05/28/we-are-still-in-the-hardware-moments-of-the-ai-cycle-says-heroic-venturesa-michael-fertik.html"
                />
              </div>
              <div className="article">
                <h6 className="article-type">Bloomberg</h6>
                <h2 className="article-title">
                  Michael Fertik discusses AI with Francine Lacqua on Bloomberg
                </h2>
                <div className="article-meta">
                  <span>6 min watch</span>
                  <div className="article-meta-external">
                    <Icon name="external" />
                  </div>
                </div>
                <Link className="article-handle" href="#" />
              </div>
              <div className="article">
                <h6 className="article-type">CNBC</h6>
                <h2 className="article-title">
                  Michael Fertik discusses AI and Silicon Valley on CNBC
                </h2>
                <div className="article-meta">
                  <span>9 min watch</span>
                  <div className="article-meta-external">
                    <Icon name="external" />
                  </div>
                </div>
                <Link className="article-handle" href="#" />
              </div>
            </div>
            <div className="articles-scroll"></div>
          </div>
        </div>
      </div>
      <Footer />
    </App>
  );
}
