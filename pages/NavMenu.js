import Link from 'next/link'

export default function NavMenu()
{
  return (
    <nav className="NavMenu">
              <span className="NavLink"><Link href="/">Home</Link></span>
              <span className="NavLink"><Link href="/webportfolio">Portfolio</Link></span>
              <span className="NavLink"><Link href="/users">Users</Link></span>
          </nav>
  )
}