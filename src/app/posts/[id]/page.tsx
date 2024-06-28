import { getPost } from "@/posts/services"

export default async function PostPage(
  {params}:{params:{id:string}}
){
  const post = await getPost(params.id)

  console.log(post)

  return (
    <main>
      <h1>{post.title}</h1>

    </main>
  )
}