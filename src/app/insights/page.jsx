import React from 'react'
import Hero from '../components/insights/hero'
import TheNews from '../components/insights/thenews'

export default function page() {
  return (
    <div className="h-full  w-full bg-white flex flex-col gap-y-9   ">
      <Hero />
      <TheNews />
    </div>
  )
}
