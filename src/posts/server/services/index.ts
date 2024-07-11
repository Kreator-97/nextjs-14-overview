import { db } from '@/database'
import { Prisma } from '@prisma/client'

type Post = Prisma.PostGetPayload<{}>

const getAll = async (): Promise<Post[]> => {
  const post = await db.post.findMany({})

  return post
}

const getOne = async (id: string): Promise<Post | null> => {
  const post = await db.post.findUnique({
    where: {
      id,
    },
  })

  return post
}

const createPost = async (data: Prisma.PostCreateInput): Promise<Post> => {
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

export const postService = {
  getAll,
  getOne,
  createPost
}