import Header from '@/components/Header';
import App from '@/components/App';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <App>
      <div className="main">
        <div className="hero">
          <Header />
          <div className="hero-content content">
            <div className="hero-media">
              <div className="hero-logo">
                <Logo />
              </div>
            </div>
            <div className="hero-paragraph">
              Liberating engineers to do their best work.
            </div>
          </div>
        </div>
        <div className="content small">
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

          <p>Funded by Bessemer and Heroic.</p>
        </div>
      </div>
    </App>
  );
}
