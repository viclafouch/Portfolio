import React, { useEffect } from 'react'
import Head from 'next/head'

function Meta(props) {
  useEffect(() => {
    const handleChangeVisiblity = () => {
      if (document.hidden) {
        document.title = 'Reviens moi 😢'
      } else {
        document.title = props.title
      }
    }
    document.addEventListener('visibilitychange', handleChangeVisiblity)
    return () => {
      document.removeEventListener('visibilitychange', handleChangeVisiblity)
    }
  }, [props.title])

  return (
    <Head>
      <title>{props.title || '404 - Not found'}</title>
      <meta name="description" content={props.description} />
    </Head>
  )
}

export default Meta
