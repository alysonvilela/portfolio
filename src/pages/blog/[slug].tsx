import {
  IPostDetailQuery,
  IPostsSlugsQuery,
  PostDetailDocument,
  PostsSlugsDocument,
} from '@/graphql/generated/index.generated'
import client from '@/lib/apollo'
import { PostDetail } from '@/screens/PostDetail'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<IPostsSlugsQuery>({
    query: PostsSlugsDocument,
  })

  const paths = data?.portfolios.map((path) => ({
    params: {
      slug: path.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const { data } = await client.query<IPostDetailQuery>({
    query: PostDetailDocument,
    variables: {
      slug,
    },
  })

  return {
    props: {
      post: data.portfolio,
    },
  }
}

export default PostDetail
