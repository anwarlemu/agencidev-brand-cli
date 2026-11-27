import { ArticleCard } from '@/react/components/site/ArticleCard'
// Three articles in the list's grid.

const articles = [
  { title: 'How to create great interface design', date: 'May 2026', readingTime: '6 min', excerpt: 'Build to the interface’s principal objective and the unnecessary noise sieves itself out.' },
  { title: 'How we hire', date: 'April 2026', readingTime: '4 min', excerpt: 'What we look for in designers and engineers, and how a trial week runs.' },
  { title: 'Designing for agents', date: 'March 2026', readingTime: '8 min', excerpt: 'Agents will become major users of websites and products. This needs to be factored into the design.' },
]

export default function Grid() {
  return (
    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => <ArticleCard key={a.title} href="#" {...a} />)}
    </div>
  )
}
