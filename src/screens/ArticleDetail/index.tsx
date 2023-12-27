import { IArticleDetailQuery } from '@/graphql/generated/index.generated'
import React from 'react'
import { Navigation } from '../Home/Navigation'
import { PageTitle } from '@/components/page-title'
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
      <PageTitle title={name} />
      <section id="article">
        <MDXRemote {...source} />
      </section>
    </>
  )
}
