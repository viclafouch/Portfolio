import FontFaceObserver from 'fontfaceobserver'

const Fonts = async () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=ABeeZee|Karma'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const ABeeZee = new FontFaceObserver('ABeeZee')
  const Karma = new FontFaceObserver('Karma')

  Promise.all([ABeeZee.load(), Karma.load()]).then(() =>
    document.documentElement.classList.add('fonts-loaded')
  )
}

export default Fonts
