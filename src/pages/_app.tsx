import client from '@/lib/apollo'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playFair = Playfair_Display({
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
            --play-fair-font: ${playFair.style.fontFamily};
          }
        `}
      </style>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
