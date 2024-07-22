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
      </div>
      <Footer />
    </App>
  );
}
