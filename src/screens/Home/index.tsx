import React from 'react'

import { Hero } from './Hero'
import { Title } from './Title'
import { Navigation } from './Navigation'

import { Emphasis } from '../../components/emphasis'

export const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Emphasis />
      <Title />
      {/* <Posts /> */}
    </>
  )
}
