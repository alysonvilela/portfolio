import { IArticleDetailQuery } from '@/graphql/generated/index.generated'
import React from 'react'
import { Navigation } from '../Home/Navigation'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'

interface IPostDetailProps {
  post: IArticleDetailQuery['articles'][0]
  source: MDXRemoteProps
}

export const ArticleDetail = ({ post, source }: IPostDetailProps) => {
  const name = post?.content.title
  return (
    <>
      <Navigation />
      <article className="overflow-hidden">
        <div className="mx-auto max-w-2xl w-full pb-12 px-4 md:px-0">
          <div className="mx-auto max-w-7xl pt-8 md:pt-24 pb-8">
            <div className="relative flex justify-start flex-col">
              <h1 className="text-2xl lg:text-3xl font-black text-brand-dark-3 font-display">
                {name}
                <span className="text-brand-dark-1/30">.</span>
              </h1>
            </div>
          </div>
          <section id="article-detail">
            <MDXRemote {...source} />
          </section>
        </div>
      </article>
    </>
  )
}
