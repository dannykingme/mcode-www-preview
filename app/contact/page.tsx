import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App from '@/components/App';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <App>
      <Header />
      <div className="main">
        <div className="content tiny contact-form">
          <h1>Let’s chat.</h1>
          <p>(A human will respond, not an AI)</p>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </App>
  );
}
