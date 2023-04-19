import client from '@/lib/apollo'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { Inter, Bebas_Neue } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --bebas-font: ${bebas.style.fontFamily};
          }
        `}
      </style>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
