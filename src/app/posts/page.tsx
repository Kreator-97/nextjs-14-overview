
// https://jsonplaceholder.typicode.com/posts
import { getAllPosts } from "@/posts/services"
import Link from "next/link"

export default async function PostsPage(){
    const posts = await getAllPosts()

    console.log(posts)

    return (
      <main>
        <h1 className="">Post</h1>

        {
          posts.map((post: any) => (
            <article key={post.id}>
              <h2 >{post.title}</h2>
              <Link href={`/posts/${post.id}`}>Go to post</Link>
            </article>
          ))
        }
    </main>
  )
}