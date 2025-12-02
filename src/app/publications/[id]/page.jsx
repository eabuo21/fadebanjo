// app/articles/[id]/page.jsx
import Link from 'next/link'
import { articles } from '@/app/components/publications/data/articles'

export default function ArticleDetail({ params }) {
  const { id } = params
  const article = articles.find((a) => a.id === id)

  if (!article) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          publication not found
        </h2>
        <Link
          href="/publications"
          className="text-blue-500 underline mt-4 inline-block"
        >
          Back to publications
        </Link>
      </div>
    )
  }

  // Split details by line breaks and filter out empty lines
  const paragraphs = article.details
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  return (
    <section className="py-12 bg-gray-50 h-full ">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-pbold text-gray-800 mb-2">
          {article.title}
        </h1>
        <p className="text-gray-600 mb-1 font-pregular ">{article.authors}</p>
        <p className="text-gray-500 mb-4 font-plight">
          {article.source} • {article.year}
        </p>
        <a
          href={article.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 text-primary font-plight  underline"
        >
          [PDF] View Full Publication
        </a>
        <div className="bg-white p-6   text-gray-700 leading-relaxed space-y-4">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <Link
          href="/publications"
          className="mt-6 inline-block text-blue-500 underline"
        >
          ← Back to Articles
        </Link>
      </div>
    </section>
  )
}
