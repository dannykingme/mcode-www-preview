'use client';

import { useRef, RefObject, useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import cn from 'clsx';
import scrollIntoView from 'scroll-into-view-if-needed';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import App from '@/components/App';
import Logo from '@/components/Logo';
import FormField from '@/components/FormField';
import ContactForm from '@/components/ContactForm';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';

function Toast() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [searchParams] = useSearchParams();
  const router = useRouter();

  const [closedSuccessMessage, setclosedSuccessMessage] = useState(false);

  useEffect(() => {
    if (searchParams && searchParams[0] === 'submitted') {
      setShowSuccessMessage(true);
      router.push('/');
    }
  }, [searchParams]);

  const handleClosedClick = () => {
    setclosedSuccessMessage(true);
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="toast-wrapper">
          <div className={cn('toast', { closed: closedSuccessMessage })}>
            <div className="toast-message">
              Thanks for reaching out. We’ll get back to you soon!
            </div>
            <button className="toast-action" onClick={handleClosedClick}>
              {/* @ts-ignore */}
              <Icon times />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

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
            {/* <div className="hero-media">
              <div className="hero-logo">
                <Logo />
              </div>
            </div> */}
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
        <div className="content small" ref={aboutElement}>
          <h1>Rebuild, refactor, and modernize your entire codebase.</h1>
          <p>
            We are a group of serial software VC-backed entrepreneurs, with a
            track record of successful exits. We have worked together before. We
            are AI experts.
          </p>

          <p>
            Over the decades, we have built and rebuilt and re-rebuilt a lot of
            software platforms. We have suffered while refactoring enormous code
            bases at both mega cap and startup companies. We have been in the
            trenches rebuilding and translating and annotating and unit testing
            old code, bad code, incomprehensible code.
          </p>

          <p>
            We have led teams of engineers — our best engineers, our best
            friends, our best hires, our most valuable players — who have been
            forced to pay off massive tech debt instead of being liberated to
            create beautiful new products and features for customers and users.
            We have face-palmed and banged our heads on our keyboards in late
            night translation sessions and architecture reviews in thankless
            pursuit of just...fixing...this...crappy...old...code.
          </p>

          <p>You know what we’re talking about. You’ve been there, too.</p>

          <p>
            We decided to vanquish this problem. We at modelcode.ai are solving
            this problem with AI so you never need to spend another minute with
            your best resources and precious budget focusing on fixing the
            legacy problems of the past.
          </p>
          <p>We’re here to liberate your engineers to do their best work.</p>
        </div>

        <div className="content small backed">
          {/* <h4>Backed by</h4> */}
          <div className="backed-logos">
            <div className="backed-logo">
              <HeroicLogo />
              <Link className="link" href="https://www.heroicvc.com/" />
            </div>
            <div className="backed-logo">
              <BessemerLogo />
              <Link className="link" href="https://www.bvp.com/" />
            </div>
          </div>
        </div>

        <hr />

        <div className="content contact-form" ref={contactElement}>
          <h1>Let’s chat.</h1>
          <p>(A human will respond, not an AI)</p>
          <ContactForm contactElement={contactElement} />
        </div>
      </div>
      <Footer handleAboutClick={handleAboutClick} />
    </App>
  );
}

// Form reference: https://usebasin.com/guides/jamstack/react
