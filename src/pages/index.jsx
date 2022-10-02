import Head from 'next/head'
import { MoonIcon } from '@heroicons/react/24/outline'
import NavMenu from 'components/nav-menu'
import Logo from 'components/logo'
import { classNames } from 'class-names'
import { useState } from 'react'
// import Image from 'next/image'
import Image from 'next/future/image'
import PersonImage from 'images/person.png'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Portfolio site</title>
        <meta name="description" content="Personal Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-[calc(100vh/2)] overflow-hidden bg-gradient-to-t from-indigo-200 to-white lg:h-screen">
        <nav className="fixed top-0 z-20 w-full bg-white">
          <div className="container mx-auto flex items-center justify-between p-5">
            <Logo />

            <NavMenu className="hidden items-center gap-x-8 text-sm font-bold uppercase text-gray-600 md:flex" />
            <MoonIcon className="hidden w-5 cursor-pointer md:flex" />
            <div
              className="relative z-10 h-[14px] w-6 cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={classNames(
                  'absolute left-0 top-0 flex h-0.5 w-6',
                  menuOpen ? 'bg-white' : 'bg-black',
                  'transition-all duration-300',
                  menuOpen && 'top-1/2 -translate-y-1/2 rotate-45'
                )}
              ></span>
              <span
                className={classNames(
                  'absolute top-1/2 flex h-0.5 w-6 -translate-y-1/2',
                  menuOpen ? 'bg-white' : 'bg-black',
                  'transition-all duration-300',
                  menuOpen && 'opacity-0'
                )}
              ></span>
              <span
                className={classNames(
                  'absolute left-0 bottom-0 flex h-0.5 w-6',
                  menuOpen ? 'bg-white' : 'bg-black',
                  'transition-all duration-300',
                  menuOpen && 'bottom-1/2 translate-y-1/2 -rotate-45'
                )}
              ></span>
            </div>
            <NavMenu
              className={classNames(
                'absolute left-0 top-0 flex w-full flex-col items-center space-y-10 rounded-b-3xl bg-indigo-900 p-10 uppercase text-white',
                menuOpen ? 'translate-y-0' : '-translate-y-[400px]',
                'transition-transform duration-300'
              )}
            />
          </div>
        </nav>

        <div class="absolute -bottom-1/4 right-0 left-0 mx-auto hidden h-big w-big rounded-full bg-indigo-900 lg:block"></div>
        <Image
          className="absolute bottom-0 right-1/2 h-5/6 translate-x-1/2 object-scale-down"
          src={PersonImage}
        />
      </div>
    </>
  )
}
