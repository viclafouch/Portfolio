import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import ContactForm from '../components/ContactForm/ContactForm'
import Meta from '../components/Meta/Meta'

export default () => (
  <Page>
    <Meta
      title="Contacter Victor de la Fouchardiere"
      description="Prendre contact avec Victor de la Fouchardiere"
      canonical="https://www.victor-de-la-fouchardiere.fr/contact"
    />
    <section className="contact-section">
      <Title title="Contact" subtitle="M'envoyer un message" />
      <ContactForm />
    </section>
  </Page>
)
