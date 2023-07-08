import '@/styles/globals.css'
import Menubar from 'components/Menubar'
import React from 'react'


export default function App({ Component, pageProps }) {
  return (
    <Menubar>
    <Component {...pageProps} />
    </Menubar>
  )
}