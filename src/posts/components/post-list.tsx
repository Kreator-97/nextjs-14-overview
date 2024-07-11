import { FC } from "react"
import Link from "next/link"
import { Post } from "@prisma/client"

interface Props {
  posts: Post[]
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {
        posts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-100 p-4 my-4 text-black flex flex-col gap-4 rounded-md"
          >
            <h2 className="text-center text-2xl">{post.title}</h2>
            <p className="min-h-[200px]">
              {
                post.content.length > 100
                  ? `${post.content.slice(0, 100)}...`
                  : post.content
              }
            </p>
            <Link href={`/posts/${post.id}`} className="text-orange-500 border-orange-500 border-2 rounded-lg p-2 text-center">Go to post</Link>
          </article>
        ))
      }
    </section>
  )
}