import Layout from '../components/Layout'
import Loader from '../components/Loader'
import '../styles/globals.css'
import { useState } from 'react'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  const [load, setLoader] = useState(false)
  Router.events.on('routeChangeStart',
    (url) => {
      setLoader(true)
    })
  Router.events.on('routeChangeComplete',
    (url) => {
      setLoader(false)
    })
  return (
    <Layout>
      {load && <Loader />}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
