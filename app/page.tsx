'use client';

import React, { useRef, RefObject, Suspense, useState, useEffect } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App from '@/components/App';
import ContactForm from '@/components/ContactForm';
import Toast from '@/components/Toast';
import Hyperlink from '@/components/Link';
import HeroicLogo from '@/images/heroic-logo.svg';
import BessemerLogo from '@/images/bessemer-logo.svg';
import IlloWriting from '@/images/writing.svg';
import IlloCode from '@/images/code.svg';
import IlloSecurity from '@/images/security.svg';
import IlloEnterprise from '@/images/enterprise.svg';
import Diff from '@/images/diff.svg';
import DiffSpacer from '@/images/diff-spacer.svg';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Image from 'next/image';

import { basePath } from '@/lib/constants';

// const codelines = [
//   `issues.append(f"{idx}: Print statement, issues=[] Print statement too long") return issues`,
//   `issues=[] if 'TODO' in line: issues.append(f"Line {idx}: TODO found") if len(line) > 80:`,
//   `class ModelcodeTool: def __init__(self, codebase): self.codebase=codebase`,
//   `for idx, line in enumerate(_analyze_file(self, file):)] def _find_issues(self, line, idx):`,
//   `analyze_code(self): {idx}: Print statement, issues=[] for file in self.codebase:`,
//   `issues.extend(self._analyze_file(file)) return issues def _analyze_file(self, file):`,
//   `open(file, 'r') as f: lines=f.readlines() return [self._find_issues(line, idx)`,
//   `issues.append(f"Line {idx}: Line too long") if then 'print' in line: issues.append(f"Line")`,
//   `line in enumerate(_analyzefile(self,Legacy code is expensive,.file):)] def __find_issues(self, l)`,
//   `issues=[] if int line: issues.append(f"let's fix it. {idx}: TODO found") if len(line) > 80:`,
//   `for idx, line in enumerate(_analyze_file(self, file):)] def _find_issues(self, line, idx):`,
//   `issues.extend(self._analyze_file(file)) return issues def _analyze_file(self, file):`,
//   `class ModelcodeTool: def __init__(self, codebase): self.codebase=codebase`,
//   `issues.append(f"Line {idx}: Line too long") if then 'print' in line: issues.append(f"Line")`,
//   `for idx, line in enumerate(_analyze_file(self, file):)] def _find_issues(self, line, idx):`,
//   `issues=[] if 'TODO' in line: issues.append(f"Line {idx}: TODO found") if len(line) > 80:`,
//   `for idx, line in enumerate(_analyze_file(self, file):)] def _find_issues(self, line, idx):`,
//   `issues.extend(self._analyze_file(file)) return issues def _analyze_file(self, file):`,
//   `class ModelcodeTool: def __init__(self, codebase): self.codebase=codebase`,
//   `for idx, line in enumerate(_analyze_file(self, file):)] def _find_issues(self, line, idx):`,
// ];

const codelines = [
  'def refactAI(data): xfrm = AI(xtrm); prcsr = prcs(xfrm); return prcsr',
  'from ai_refactor import Transformer as T; t = T(); def run(x): return t.refactor(x)',
  'import ai; def optimize_code(old_code): new_code = ai.refactor(old_code); return new_code',
  'class RefactorAI: def __init__(self): self.model = load_model(); def refactor(self, code): return self.model.transform(code)',
  'def transfrm_cde(code): trnsfrm = ai.Engine(); return trnsfrm.refactor(code, verbose=True)',
  "def save_refactored(code): refactored_code = ai.Transform(old_code); save(new_code_to_file(refactored_code, 'refactored_code.py'))",
  "model = ai.load('refactor_model'); optimized_code = model.apply(old_code)",
  'code_refactor = lambda code: ai.transform(code); output = code_refactor(input_code)',
  'refact = ai.refactor(t); code = `Legacy code is expensive,`; refact.transform();return xfrm',
  "def fix_codebase(): ai_tool = AIRefactor(); new__code = xfrm + `let's fix it.` + old_code; xfrm = ai_tool.transform(to_code); return new_code",
  'def ai_refactor(): ai_eng = load_ai(); xfrm = ai_eng.refactor(input_code); new_code = xfrm.transform(); return new_code',
  'ai_engine = AIRefactor(); output = ai_engine.transform(input_code); save_output(output)',
  'import ai_engine; def refactor(old_code): new_code = ai_engine.transform(old_code); save(new_code)',
  'class AIRefactor: def refactor(self, code): return ai.model(code).transform()',
  'refactor_model = load_model(); transformed_code = refactor_model.transform(codebase)',
  'ai_tool = AIModel(); new_code = ai_tool.refactor(old_code); save(new_code)',
  'def refactor_code(code): model = AIModel(); return model.transform(code)',
  'load_ai_model = AI(); refactor = load_ai_model.refactor(codebase); save(refactor)',
  'ai_refactor = AI(); optimized_code = ai_refactor.transform(input_code); save(optimized_code)',
  'from ai_model import Refactor; def optimize_code(old): model = Refactor(); return model.transform(old)',
];

// const codelines = [
//   '*********************************************************************************************',
//   '*********************************************************************************************',
//   '************************************************************************************************',
//   '*****************************************************************************************************************',
//   '******************************************************************************************',
//   '***************************************************************************************************************',
//   '**********************************************************************************************************************',
//   '***************************************************************************************************************',
//   '************************************`Legacy code is expensive,`************************************',
//   '************************************************`let’s fix it.`************************************************',
//   '************************************************************************************************************',
//   '*************************************************************************************************',
//   '*********************************************************************************************',
//   '*********************************************************************************************************',
//   '****************************************************************************************************************',
//   '*******************************************************************************************************************',
//   '*********************************************************************************************************',
//   '****************************************************************************************************************',
//   '**************************************************************************************************************',
//   '**************************************************************************************************************',
// ];

export default function Home() {
  const aboutElement: RefObject<HTMLDivElement> = useRef(null);
  const contactElement: RefObject<HTMLDivElement> = useRef(null);
  const meetElement: RefObject<HTMLDivElement> = useRef(null);
  const codeElement: RefObject<HTMLDivElement> = useRef(null);
  const lineElement: RefObject<HTMLDivElement> = useRef(null);
  const diffElement: RefObject<HTMLDivElement> = useRef(null);

  const [isOutroVisible, setIsOutroVisible] = useState(true);
  const [isDiffVisible, setIsDiffVisible] = useState(true);

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

  const handleMeetClick = () => {
    if (meetElement.current) {
      meetElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const margin = 0;
    const handleScroll = () => {
      if (codeElement.current && lineElement.current) {
        const rect = codeElement.current.getBoundingClientRect();
        const rect2 = lineElement.current.getBoundingClientRect();
        const isOutroVisible =
          rect2.top < window.innerHeight - margin && rect2.bottom > 0;
        const isInvisible = rect.top >= window.innerHeight;

        if (isOutroVisible) {
          setIsOutroVisible(true);
        } else if (isInvisible) {
          setIsOutroVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const margin = 128;
    const handleScroll = () => {
      if (diffElement.current) {
        const rect = diffElement.current.getBoundingClientRect();
        const halfHeight = rect.height / 2;
        const isDiffVisible =
          rect.top < window.innerHeight - halfHeight &&
          rect.bottom > halfHeight;
        const isOutOfViewport =
          rect.bottom <= -margin || rect.top >= window.innerHeight + margin;

        if (isDiffVisible) {
          setIsDiffVisible(true);
        } else if (isOutOfViewport) {
          setIsDiffVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <App>
      <div className="main">
        <div className="hero">
          <Suspense>
            <Toast />
          </Suspense>
          <Header />
          <div className="hero-content content">
            <h1 className="hero-headline">
              <span>Liberate</span>
              <span> engineers to do </span>
              <span>their best work.</span>
            </h1>
            <div className="hero-paragraph">
              <span>Modelcode AI is your single solution</span>
              <span> for modernizing your entire codebase.</span>
            </div>
            <div className="hero-foot">
              <Button
                mode="outlined"
                theme="dark"
                text="Get started."
                href="/contact"
              />
              <Button
                mode="ghost"
                theme="dark"
                text="Learn more."
                onClick={handleMeetClick}
              />
            </div>
          </div>
        </div>

        <div className="meet-container" ref={meetElement}>
          <div className="meet-content content">
            {/* <h2>
              We know what it’s like to spend months paying off tech debt...
            </h2> */}
            <h1>We know the burden of paying off massive tech debt...</h1>
          </div>
          <div className="dff-outer dff-react" ref={diffElement}>
            {isDiffVisible ? (
              <div className="dff">
                <div className="dff-auras">
                  <div className="dff-aura-1 dff-aura" />
                  <div className="dff-aura-2 dff-aura" />
                </div>
                <div className="dff-shadow" />
                <Diff width={1280} />
              </div>
            ) : (
              <DiffSpacer width={1280} />
            )}
          </div>
          <div className="meet-followup">
            {/* <h2>
              We know what it’s like to spend months paying off tech debt...
            </h2> */}
            <div className="meet-icon">
              <Icon name="mcode-logo" />
            </div>
            <h2>That’s why we built Modelcode AI.</h2>
            {/* <p>
              We’re here to finish the war on outdated code, so you can free up
              your time amd budget for something more meaningful.
            </p> */}
            <p>We’re here to finish the war on outdated code.</p>
          </div>
        </div>

        {/* <div className="content tiny" ref={aboutElement}>
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
        </div> */}

        {/* <hr /> */}

        <div className="content">
          <div className="feature">
            <div className="feature-media">
              <IlloCode />
            </div>
            <div className="feature-content">
              <h6 className="subtitle">Code review</h6>
              <hr />
              <h2>Eliminate doubt with our unique review process.</h2>
              {/* <hr /> */}
              <p>
                We’re not interested in smoke and mirrors. You have real code
                and it needs to work. We expect your engineers to review
                everything and we’re confident they’ll be impressed.
              </p>
            </div>
          </div>
          {/* <div className="feature">
            <div className="feature-media">
              <IlloSecurity />
            </div>
            <div className="feature-content">
              <h6 className="subtitle">Reports</h6>
              <h2>Keep everyone in the loop.</h2>
              <hr />
              <p>
                We're shipping a real product for you. You deserve to know
                what's going on.
              </p>
            </div>
          </div> */}
          <div className="feature">
            <div className="feature-media">
              <IlloWriting />
            </div>
            <div className="feature-content">
              <h6 className="subtitle">Documentation</h6>
              <hr />
              <h2>Docs for everything, everywhere, all at once.</h2>
              {/* <hr /> */}
              <p>
                Don’t worry about it. Modelcode generates detailed documentation
                for every line of code it writes. We want your team to onboard
                and collaborate with each other without stress.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-media">
              <IlloEnterprise />
            </div>
            <div className="feature-content">
              <h6 className="subtitle">Support</h6>
              <hr />
              <h2>Dedicated support, every step of the way.</h2>
              {/* <hr /> */}
              <p>
                Enjoy peace of mind and confidence in your new codebase. Whether
                troubleshooting or fine-tuning, our (human) experts will ensure
                a smooth integration of your new code into your production
                environment.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-media">
              <IlloSecurity />
            </div>
            <div className="feature-content">
              <h6 className="subtitle">Safety</h6>
              <hr />
              <h2>Enterprise-level safety and security.</h2>
              {/* <hr /> */}
              <p>
                Our top priority is protecting your source code. Modelcode AI
                employs enterprise-level security protocols to ensure this. We
                use encrypted data transfer and secure storage to protect your
                sensitive information.
              </p>
            </div>
          </div>
        </div>

        {/* <hr /> */}

        <div className="articles-container">
          <div className="content">
            <div className="articles-heading">
              <h1>Latest research</h1>
            </div>
            <div className="articles">
              <div className="article">
                <h6 className="article-type">White paper</h6>
                <h2 className="article-title">
                  Lorem Ipsum Fusce Adipiscing Elit
                </h2>
                <div className="article-meta">
                  <span>15 min read</span>
                  <div className="article-meta-external">
                    <Icon name="external" />
                  </div>
                </div>
                <Link className="article-handle" href="#" />
              </div>
              <div className="article">
                <h6 className="article-type">White paper</h6>
                <h2 className="article-title">
                  Vestibulum Elementum Congue Turpis Eget Luctus Dolor sit Amet
                  Dignissim Diam
                </h2>
                <div className="article-meta">
                  <span>22 min read</span>
                  <div className="article-meta-external">
                    <Icon name="external" />
                  </div>
                </div>
                <Link className="article-handle" href="#" />
              </div>
              <div className="article">
                <h6 className="article-type">White paper</h6>
                <h2 className="article-title">
                  Sed Quis Pretium Consectetur Sapien Etiam
                </h2>
                <div className="article-meta">
                  <span>34 min read</span>
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

        <div className="codelines-container">
          <div
            className={cn('codelines', {
              visible: isOutroVisible,
            })}
            ref={codeElement}
          >
            {codelines.map((line, idx) => (
              <div className="codeline" key={idx}>
                <div className="codeline-inner">{line}</div>
              </div>
            ))}
            {/* <div className="codeline">
              <div className="codeline-inner">
                class ModelcodeTool: def __init__(self, codebase):
                self.codebase=codebase def
              </div>
            </div> */}
            <div className="codelines-screens">
              <div className="codelines-screen" />
              <div className="codelines-screen" />
              <div className="codelines-screen" />
            </div>
            <div className="codeline-copy">
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line" />
              <div className="codeline-copy-line">
                Legacy code is expensive,
              </div>
              {/* <div className="codeline-copy-line" /> */}
              <div className="codeline-copy-line">let’s fix it.</div>
              <div className="codeline-copy-line" ref={lineElement} />
              {/* <div className="codeline-copy-line" /> */}
              {/* <div className="codeline-copy-line">Get started.</div> */}
              {/* <Button mode="filled" theme="dark" text="Get started." /> */}
              <Button
                mode="filled"
                theme="dark"
                text="Get started."
                href="/contact"
              />
            </div>
          </div>
        </div>

        {/* <div className="content tiny contact-form" ref={contactElement}>
          <h1>Let’s chat.</h1>
          <p>(A human will respond, not an AI)</p>
          <ContactForm />
        </div> */}
        {/* <div className="hero">
          <div className="hero-content content"></div>
          <Footer handleAboutClick={handleAboutClick} />
        </div> */}
      </div>
      <Footer handleAboutClick={handleAboutClick} />
    </App>
  );
}
