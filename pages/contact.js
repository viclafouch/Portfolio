import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import ContactForm from '../components/ContactForm/ContactForm'

export default () => (
  <Page>
    <section className="contact-section">
      <Title title="Contact" subtitle="M'envoyer un message" />
      <ContactForm />
    </section>
  </Page>
)
