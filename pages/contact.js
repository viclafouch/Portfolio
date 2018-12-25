import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import ContactForm from '../components/ContactForm/ContactForm'
import Meta from '../components/Meta/Meta'

export default () => (
  <Page>
    <Meta title="Contacter Victor de la Fouchardiere" />
    <section className="contact-section">
      <Title title="Contact" subtitle="M'envoyer un message" />
      <ContactForm />
    </section>
  </Page>
)
