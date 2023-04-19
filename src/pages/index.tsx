import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Locale, usePersonalsQuery } from '@/graphql/generated'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const {data} = usePersonalsQuery({
 variables: {
  locales: [Locale.PtBr, Locale.En]
 }
})


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.personals[0].description}
    </main>
  )
}