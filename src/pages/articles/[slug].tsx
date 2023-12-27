import {
  ArticleDetailDocument,
  ArticlesSlugsDocument,
  IArticleDetailQuery,
  IArticlesSlugsQuery,
} from '@/graphql/generated/index.generated'
import client from '@/lib/apollo'
import { ArticleDetail } from '@/screens/ArticleDetail'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { serialize } from 'next-mdx-remote/serialize'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<IArticlesSlugsQuery>({
    query: ArticlesSlugsDocument,
  })

  const paths = data?.articles.map((path) => ({
    params: {
      slug: path.content.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const { data } = await client.query<IArticleDetailQuery>({
    query: ArticleDetailDocument,
    variables: {
      slug,
    },
  })

  const source = await serialize(data.articles[0].md)

  return {
    props: {
      post: data.articles[0],
      source,
    },
  }
}

export default ArticleDetail
