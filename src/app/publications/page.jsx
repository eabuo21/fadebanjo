import React from 'react'
import Hero from '../components/publications/hero'
import ArticlesList from '../components/publications/articleslist'

export default function page() {
  return (
    <div className="h-full  w-full bg-white flex flex-col gap-y-9   ">
      <Hero />
      <ArticlesList />
    </div>
  )
}
