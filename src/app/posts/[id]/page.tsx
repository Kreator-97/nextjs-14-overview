import { postService } from "@/posts/server/services"

export default async function PostPage(
  { params }: { params: { id: string } }
){
  const post = await postService.getOne(params.id)
  console.log({ post })

  return (
    <main>
      <h1>{post?.title}</h1>

      <p>
        {
          post?.content
        }
      </p>

    </main>
  )
}