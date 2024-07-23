import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App from '@/components/App';
import ContactForm from '@/components/ContactForm';
import Link from '@/components/Link';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';

import { basePath } from '@/lib/constants';

export default function ContactPage() {
  return (
    <App>
      <Header />
      <div className="main">
        <div className="content tiny">
          <h1>Modernize your entire codebase.</h1>
          <p>
            We’re a team of AI experts and veteran engineers from Google, Apple,
            and Meta. We have a history of founding successful AI ventures, and
            we are on a mission to make manual code modernization obsolete.
          </p>
          <p>
            We know what it’s like to spend months paying off massive tech debt
            at the expense of product innovation. Every member of our team has
            served in the trenches tediously rebuilding, translating,
            annotating, and unit testing countless lines of legacy code.
          </p>
          <p>
            We’re here to finish the war on outdated code, so you can free up
            your time, budget, and resources for more meaningful projects.
          </p>
          <p>
            <button className="hyperlink">Try modelcode</button> today. Liberate
            your engineers to do their best work.
          </p>
        </div>
        <div className="content small">
          <h2>Leadership team</h2>
          <div className="headshots">
            <div className="headshot">
              <div className="headshot-media">
                <Image
                  src={`${basePath}/images/michael.png`}
                  width={640}
                  height={640}
                  alt="Michael Fertik"
                  layout="responsive"
                />
              </div>
              <div className="headshot-info">
                <h3>Michael Fertik</h3>
                <p>CEO</p>
              </div>
            </div>
            <div className="headshot">
              <div className="headshot-media">
                <Image
                  src={`${basePath}/images/shiv.png`}
                  width={640}
                  height={640}
                  alt="Shiv Prakash"
                  layout="responsive"
                />
              </div>
              <div className="headshot-info">
                <h3>Shiv Prakash</h3>
                <p>CTO</p>
              </div>
            </div>
            <div className="headshot">
              <div className="headshot-media">
                <Image
                  src={`${basePath}/images/antoine.png`}
                  width={640}
                  height={640}
                  alt="Antoine Raux"
                  layout="responsive"
                />
              </div>
              <div className="headshot-info">
                <h3>Antoine Raux</h3>
                <p>CAIO</p>
              </div>
            </div>
          </div>
          <h2>Our investors</h2>
          <div className="backed-logos">
            <div className="backed-logo">
              <HeroicLogo />
              <Link
                className="link"
                href="https://www.heroicvc.com/"
                target="_blank"
              />
            </div>
            <div className="backed-logo">
              <BessemerLogo />
              <Link
                className="link"
                href="https://www.bvp.com/"
                target="_blank"
              />
            </div>
          </div>
          <h2>The board</h2>
          <div className="headshots">
            <div className="headshot">
              <div className="headshot-media">
                <Image
                  src={`${basePath}/images/michael.png`}
                  width={224}
                  height={224}
                  alt="Michael Fertik"
                  layout="responsive"
                />
              </div>
              <div className="headshot-info">
                <h3>Michael Fertik</h3>
                <p>Board member</p>
              </div>
            </div>
            <div className="headshot">
              <div className="headshot-media">
                <Image
                  src={`${basePath}/images/david.png`}
                  width={224}
                  height={224}
                  alt="David Cowan"
                  layout="responsive"
                />
              </div>
              <div className="headshot-info">
                <h3>David Cowan</h3>
                <p>Board member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </App>
  );
}
