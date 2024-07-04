import { db } from '@/database'
import { Prisma } from '@prisma/client'

type Post = Prisma.PostGetPayload<{
  include: {
    author: true
  }
}>

export const getPosts = async (): Promise<Post[]> => {
  return await db.post.findMany(
    {
      include: {
        author: true
      }
    }
  )
}

getPosts().then( (posts) => {
  posts.forEach( (post) => {
    post.author.name
  })
})