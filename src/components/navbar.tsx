import Link from 'next/link'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className='flex gap-4 justify-end px-12'>
        {
          items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                {
                  item.label
                }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}