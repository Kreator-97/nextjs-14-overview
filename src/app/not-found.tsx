import Link from "next/link";

export default function NotFound() {

  return (
    <div>

    <h1 className="heading">
      Page not found
    </h1>

    <Link href={'/'}>Go Home</Link>
    </div>
  )
}