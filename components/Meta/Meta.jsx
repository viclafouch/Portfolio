import Head from 'next/head'

export default ({ title, description }) => {
  if (title && title !== 'Contacter Victor de la Fouchardiere')
    title += ' de Victor de la Fouchardiere – Développeur Front-end'
  return (
    <Head>
      <title>{title || '404 - Not found'}</title>
      <meta
        name="description"
        content={
          description ||
          "Je m'appelle Victor de la Fouchardière, titulaire d'une licence 'Chef de Projets Digitaux' (à l'Ecole Européenne des Métiers de l'Internet) et développeur web fullstack chez Seald, j'ai une vraie vocation pour la programmation web coté frontend (React, Vue.js, Angular ...)."
        }
      />
    </Head>
  )
}
