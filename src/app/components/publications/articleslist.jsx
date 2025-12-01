// app/articles/page.jsx
import Link from 'next/link'
import { articles } from './data/articles'

export default function ArticlesList() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-pbold text-gray-700 text-center mb-8">
          Publications
        </h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/publications/${article.id}`}
              className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-1">{article.authors}</p>
              <p className="text-gray-500 text-sm mt-1">
                {article.source} • {article.year}
              </p>
              <p className="text-gray-700 mt-2">{article.abstract}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
