import React from 'react'
import Hero from './components/home/hero'
import Bio from './components/home/bio'

export default function page() {
  return (
    <div className="h-full  w-full bg-white flex flex-col gap-y-9   ">
      <Hero />
      <Bio />
    </div>
  )
}
