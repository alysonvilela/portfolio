import React from 'react'
import { Navigation } from '../Home/Navigation'
import { Emphasis } from '../../components/emphasis'
import { PageTitle } from '@/components/page-title'

import { PageSummary } from '@/components/page-summary'
import { ArticleCard } from '@/components/article-card'
import { useArticlesQuery } from '@/graphql/generated/index.generated'

export const Articles = () => {
  const { data } = useArticlesQuery()

  return (
    <>
      <Navigation />

      <PageTitle title="Artigos" />
      <PageSummary
        title="Da minha cabeça para o mundo,"
        description={`Dúvidas que já respondi ou aprendi com outros profissionais.`}
      />
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-8 lg:px-24 pb-12">
          {data?.articles.map(({ content, createdAt }) => {
            return (
              <ArticleCard
                key={`card-${content.slug}`}
                slug={content.slug}
                coverUrl={
                  'https://www.birobirobiro.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzp6uwf2o%2Fimage%2Fupload%2Fv1693197667%2Fprojects%2Fwqrfwu6fsfmwn6foctf9.png&w=384&q=75'
                }
                description={content.summary}
                title={content.title}
                publishedAt={String(
                  new Intl.DateTimeFormat('pt-BR').format(
                    new Date(createdAt as string)
                  )
                )}
              />
            )
          })}
        </div>
      </section>

      <Emphasis title="Veja também" />
    </>
  )
}
