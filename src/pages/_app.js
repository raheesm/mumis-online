import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.scss'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
   <Fragment>
     <Header/>
    <Component {...pageProps} />
    <Footer/>
   </Fragment>
  )
}
