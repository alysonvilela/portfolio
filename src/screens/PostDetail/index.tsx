import { IPostDetailQuery } from '@/graphql/generated/index.generated'
import React from 'react'

interface IPostDetailProps {
  post: IPostDetailQuery['portfolio']
}

export const PostDetail = ({ post }: IPostDetailProps) => {
  const name = post?.title
  return <div className="text-white">{name}</div>
}
