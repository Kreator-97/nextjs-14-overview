
import { PostForm } from "@/posts/components/post-form"
import { PostList } from "@/posts/components/post-list"
import { postService } from "@/posts/server/services"

export default async function PostsPage() {
  const posts = await postService.getAll()

  console.log({ posts })

  return (
    <main className="p-4">
      <h1 className="">All Posts</h1>

      <PostForm/>

      <PostList posts={posts} />
    </main>
  )
}