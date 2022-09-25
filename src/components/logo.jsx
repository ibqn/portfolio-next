import Link from 'next/link'
import Image from 'next/image'

import LogoImage from 'images/logo.png'

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex cursor-pointer items-center gap-2">
        <div className="flex w-8 items-center">
          <Image src={LogoImage} />
        </div>

        <span className="text-2xl font-bold capitalize text-indigo-900">
          portwind.
        </span>
      </a>
    </Link>
  )
}

export default Logo
