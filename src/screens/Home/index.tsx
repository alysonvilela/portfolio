import { Locale, usePersonalsQuery } from '@/graphql/generated/index.generated'
import React from 'react'
import dynamic from 'next/dynamic'
// import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { Title } from './Title'
import { Navigation } from './Navigation'
import { Posts } from './Posts'
import { Banner } from './Banner'
// const Navigation = dynamic(
//   () => import('./Navigation').then((mod) => mod.Navigation),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// )

export const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Banner />
      <Title />
      <Posts />
    </>
  )
}
