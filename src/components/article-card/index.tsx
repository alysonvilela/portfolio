import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  publishedAt: string
  title: string
  description: string
  coverUrl: string
  slug: string
}

export const ArticleCard = ({
  slug,
  publishedAt,
  title,
  description,
  coverUrl,
}: ArticleCardProps) => {
  return (
    <Link href={`/${slug}/a`}>
      <article
        aria-labelledby="episode-1-title"
        className="px-8 lg:px-24 py-12 items-center group border-b-2 border-brand-brown-1/20"
      >
        <div className="flex items-center sm:items-start">
          <div className="flex-1 text-sm">
            <div className="font-medium text-gray-900 sm:flex">
              <div>
                <h5>
                  <time
                    dateTime={String(new Date(publishedAt))}
                    className="order-first text-xs leading-7 text-zinc-500 group-hover:text-black"
                  >
                    {publishedAt}
                  </time>
                </h5>
                <h2 className="text-3xl group-hover:underline transform transition-all duration-500 ease-in-out font-bold text-brand-dark-3 uppercase tracking-wide">
                  {title}
                </h2>
              </div>
            </div>
            <div>
              <p className="mt-1 text-brand-dark-1/60 font-normal line-clamp-1 lg:text-lg md:line-clamp-2 group-hover:text-brand-dark-1 transform transition-all duration-500 ease-in-out">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
