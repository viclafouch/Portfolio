import React, { useEffect } from 'react'
import Head from 'next/head'

const Meta = (props) => {
  const { title, description } = props

  useEffect(() => {
    const handleChangeVisiblity = () => {
      if (document.hidden) {
        document.title = 'Back to me 😢'
      } else {
        document.title = title
      }
    }
    document.addEventListener('visibilitychange', handleChangeVisiblity)
    return () => {
      document.removeEventListener('visibilitychange', handleChangeVisiblity)
    }
  }, [title])

  return (
    <Head>
      {/* eslint-disable-next-line no-restricted-syntax */}
      <title>{title || '404 - Not found'}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="description" content={description} />
    </Head>
  )
}

export default Meta
