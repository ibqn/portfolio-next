import Head from 'next/head'
import { MoonIcon } from '@heroicons/react/24/outline'
import NavMenu from 'components/nav-menu'
import Logo from 'components/logo'
import { classNames } from 'class-names'
import { useState } from 'react'
import Image from 'next/future/image'
import PersonImage from 'images/person.png'
import Link from 'next/link'
import TextAnimation from 'components/text-animation'

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
                'shadow-md transition-transform duration-300'
              )}
            />
          </div>
        </nav>

        <div className="absolute -bottom-1/4 right-0 left-0 mx-auto hidden h-big w-big rounded-full bg-indigo-900 lg:block"></div>
        <Image
          className="absolute bottom-0 right-1/2 h-5/6 w-auto translate-x-1/2 object-scale-down"
          priority
          alt="Person"
          src={PersonImage}
        />

        <div className="absolute top-1/3 left-5 w-1/3 text-xl font-bold sm:left-10 sm:text-4xl lg:left-5 lg:text-6xl xl:left-48">
          <span className="text-gray-600">Freelance</span>
          <p className="text-red-500">
            <TextAnimation strings={['Developer', 'Designer', 'Author']} />
          </p>
        </div>

        <div className="absolute top-0 right-10 bottom-0 m-auto hidden h-fit w-1/3 flex-col gap-5 rounded-md bg-white p-6 text-sm shadow-lg dark:bg-slate-900 dark:shadow-slate-800 md:flex lg:text-base">
          <h1 className="text-2xl font-bold text-indigo-900 lg:text-4xl">
            Hi, I'm John
          </h1>
          <p className="text-gray-400">
            with over 10 years of experience on web design and development.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. N oumquam
            quo provident, facere minus temporibus veniam nostrum reprehenderit
            nihil?
          </p>
          <Link href="#">
            <a className="w-fit rounded-md bg-indigo-600 px-4 py-1 text-xl font-semibold text-white">
              Hire me
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
