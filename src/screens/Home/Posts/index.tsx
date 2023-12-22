import { usePostCardQuery } from '@/graphql/generated/index.generated'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
  publishedAt: string
  title: string
  description: string
  coverUrl: string
  slug: string
}

export const Card = ({
  slug,
  publishedAt,
  title,
  description,
  coverUrl,
}: CardProps) => {
  return (
    <Link href={`/${slug}/b`}>
      <article
        aria-labelledby="episode-1-title"
        className="px-8 lg:px-24 py-12 items-center hover:bg-white group bg-zinc-900"
      >
        <div className="flex items-center sm:items-start">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden b sm:h-40 sm:w-40 relative">
            <Image
              src={coverUrl}
              alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." //TODO - Adicionar alt
              className="h-full w-full object-cover object-center grayscale absolute"
              fill
            />
          </div>
          <div className="ml-6 flex-1 text-sm">
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
                <h2 className="text-lg lg:text-2xl font-semibold text-white uppercase tracking-tight group-hover:text-black">
                  {title}
                </h2>
              </div>
            </div>
            <div>
              <p className="mt-1 text-white/60 font-light line-clamp-1 lg:text-lg md:line-clamp-2 group-hover:text-black">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export const Posts = () => {
  const { data } = usePostCardQuery({
    variables: {},
  })

  return (
    <section className="bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl border-x border-zinc-900">
        <div className="mx-auto divide-y divide-white">
          {data?.portfolios.map((item) => {
            return (
              <Card
                key={item.slug}
                slug={item.slug}
                coverUrl={item.cover.url}
                description={item.description}
                title={item.title}
                publishedAt={String(
                  new Intl.DateTimeFormat('pt-BR').format(
                    new Date(item.publishedAt as string)
                  )
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
