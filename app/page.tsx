'use client';

import { useRef, RefObject, Suspense } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App from '@/components/App';
import ContactForm from '@/components/ContactForm';
import Toast from '@/components/Toast';
import Hyperlink from '@/components/Link';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';

export default function Home() {
  const aboutElement: RefObject<HTMLDivElement> = useRef(null);
  const contactElement: RefObject<HTMLDivElement> = useRef(null);

  const handleAboutClick = () => {
    if (aboutElement.current) {
      aboutElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (contactElement.current) {
      contactElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <App>
      <div className="main">
        <div className="hero">
          <Suspense>
            <Toast />
          </Suspense>
          <Header
            handleAboutClick={handleAboutClick}
            handleContactClick={handleContactClick}
          />
          <div className="hero-content content">
            <div className="hero-paragraph">
              <span>Liberate</span>
              <span> engineers to do </span>
              <span>their best work.</span>
            </div>
            <div className="hero-foot">
              <button className="hero-button" onClick={handleAboutClick}>
                <span>Modelcode AI</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content tiny" ref={aboutElement}>
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
            <button className="hyperlink" onClick={handleContactClick}>
              Try modelcode
            </button>{' '}
            today. Liberate your engineers to do their best work.
          </p>
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
        </div>

        <hr />

        <div className="content tiny contact-form" ref={contactElement}>
          <h1>Let’s chat.</h1>
          <p>(A human will respond, not an AI)</p>
          <ContactForm />
        </div>
      </div>
      <Footer handleAboutClick={handleAboutClick} />
    </App>
  );
}
