import { navData } from 'data'
import Link from 'next/link'

const NavMenu = (props) => {
  const { menuLinks } = navData
  return (
    <ul {...props}>
      {menuLinks.map((menuItem, index) => {
        const { name, href } = menuItem
        return (
          <li
            key={index}
            className="group transition-colors duration-300 hover:text-gray-500"
          >
            <Link href={href}>
              <a className="transition-all duration-300 group-hover:border-b group-hover:border-gray-500">
                {name}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
