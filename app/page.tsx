'use client';

import { useRef, RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import scrollIntoView from 'scroll-into-view-if-needed';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button.js';
import App from '@/components/App';
import Logo from '@/components/Logo';
import FormField from '@/components/FormField';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';

export default function Home() {
  const aboutElement: RefObject<HTMLDivElement> = useRef(null);
  const contactElement: RefObject<HTMLDivElement> = useRef(null);
  // console.log(contactElement?.current);
  // const handleContactClick = () => {
  //   requestAnimationFrame(() => {
  //     scrollIntoView(contactElement?.current, {
  //       scrollMode: 'always',
  //       block: 'start',
  //       inline: 'start',
  //       behavior: 'smooth',
  //     });
  //   });
  // };
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
          <Header
            handleAboutClick={handleAboutClick}
            handleContactClick={handleContactClick}
          />
          <div className="hero-content content">
            <div className="hero-media">
              <div className="hero-logo">
                <Logo />
              </div>
            </div>
            <div className="hero-paragraph">
              Liberate engineers to do their best work.
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
            legacy problems of the past. We are here to liberate your best
            engineers to do their best work.
          </p>
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

        <div className="content small contact-form" ref={contactElement}>
          <h1>Let’s chat.</h1>
          <p>(A human will respond, not an AI!)</p>
          {/* <form
            className="form"
            action="https://usebasin.com/f/56024030b3c4"
            method="POST"
            ref={contactElement}
          >
            <FormField label="Name" name="name" required />
            <FormField
              label="Email"
              id="email"
              name="email"
              type="email"
              required
            />
            <FormField
              label="Organization"
              id="organization"
              name="organization"
            />
            <FormField label="Phone" id="phoneNumber1" name="phoneNumber1" />
            <FormField
              label="Message"
              id="anythingYoudLikeToShare"
              name="anythingYoudLikeToShare"
              type="textarea"
            />
            <Button type="submit" text="Submit" />
          </form> */}
          <iframe
            src="https://usebasin.com/form/348457fd5b4c/view/9340a92fbb1e?iframe=true"
            // onLoad="this.contentWindow.postMessage('getHeight', '*');"
            height={524}
            width="100%"
            frameBorder="0"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>

        {/* <form action="https://usebasin.com/f/348457fd5b4c" method="POST">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="organization">Organization </label>
          <input type="text" name="organization" id="organization" />

          <label htmlFor="phoneNumber1">Phone </label>
          <input type="text" name="phoneNumber1" id="phoneNumber1" />

          <label htmlFor="anythingYoudLikeToShare">
            Anything you'd like to share?{' '}
          </label>
          <textarea
            id="anythingYoudLikeToShare"
            name="anythingYoudLikeToShare"
            rows={5}
            cols={33}
          />

          <button type="submit">Submit</button>
        </form> */}
      </div>
      <Footer />
    </App>
  );
}

// Form reference: https://usebasin.com/guides/jamstack/react
