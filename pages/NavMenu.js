import Link from 'next/link'

export default function NavMenu()
{
  return (
    <nav className="NavMenu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/webportfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
          </nav>
  )
}