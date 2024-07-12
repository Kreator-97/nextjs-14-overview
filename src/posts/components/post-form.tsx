'use client'

import { FormEvent, useState } from "react"
import { postService } from "../server/services"
import { createPost } from "../server/actions"
import { useRouter } from "next/navigation"

export const PostForm = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const router = useRouter()

  const onCreatePost = async (event: FormEvent) => {
    event.preventDefault()
    console.log('creating post')
    console.log({ title, content })

    if( !title && !content ) {
      return alert('Title and content are required')
    }

    const post = await createPost({
      title,
      content,
    })

    console.log({ post })

    router.refresh()
  }

  return (
    <form
      onSubmit={onCreatePost}
      className=" flex flex-col gap-4 max-w-[500px] mx-auto mb-12"
    >
      <h2>Create post</h2>
      <label htmlFor="title">Titulo</label>
      <input
        className="bg-white text-black p-2 border-2 border-blue-500 rounded-md"
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="content">Contenido</label>
      <input
        className="bg-white text-black p-2 border-2 border-blue-500 rounded-md"
        type="text"
        name="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button className="bg-orange-500 p-2 rounded-md mt-4">
        Agregar
      </button>
    </form>
  )
}