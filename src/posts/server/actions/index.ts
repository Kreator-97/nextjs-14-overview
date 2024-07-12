'use server'

import { Post, Prisma } from "@prisma/client"
import { db } from '@/database'

export const createPost = async (data: Prisma.PostCreateInput): Promise<Post> => {
  const {
    content, title, published
  } = data

  const post = await db.post.create({
    data: {
      content,
      title,
      published,
    },
  })

  return post
}
