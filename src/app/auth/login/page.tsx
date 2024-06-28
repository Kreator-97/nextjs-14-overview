
"use client"
import { login } from "@/auth/services";

export default function Login() {
  return (
    <div>
      <form className='space-y-8' onSubmit={async (e) => {
        e.preventDefault()
        await login()
      }}>
        <article>

          <input className='' />
        </article>
        <article>
          <input type="text" name="" id="" />
        </article>
        <button type="submit">XD</button>
      </form>
    </div>
  )
}
