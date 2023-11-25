// export interface headerProps {}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './sidebar'
import MobileButton from './mobilebutton'
import { createContext, useContext, useState } from 'react'

interface handleMobileButtonProps {
  openSidebar: boolean
  handleMobileButton: () => void
}

export const MobileContext = createContext({} as handleMobileButtonProps)

export function Header() {
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleMobileButton() {
    setOpenSidebar(!openSidebar)
  }
  return (
    <MobileContext.Provider value={{ handleMobileButton, openSidebar }}>
      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-blue-100 px-8 sm:h-20">
        <Sidebar />
        <Link href="/">
          <Image
            src="/logo1.svg"
            alt="logomarca"
            width={0}
            height={0}
            quality={100}
            className="flex h-16 w-auto py-1 sm:h-20"
          />
        </Link>
        <MobileButton />
        <nav className="hidden sm:flex">
          <Link
            href="/#about"
            className="relative inline-block h-20 px-4 leading-[80px] transition duration-200  hover:text-blue-500 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[3px] hover:after:w-full hover:after:rounded-t hover:after:bg-blue-500 hover:after:content-['']"
          >
            Sobre
          </Link>
          <Link
            href="/#skills"
            className="relative inline-block h-20 px-4 leading-[80px] transition duration-200 hover:text-blue-500 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[3px] hover:after:w-full hover:after:rounded-t hover:after:bg-blue-500 hover:after:content-['']"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="relative inline-block h-20 px-4 leading-[80px] transition duration-200 hover:text-blue-500 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[3px] hover:after:w-full hover:after:rounded-t hover:after:bg-blue-500 hover:after:content-['']"
          >
            Projetos
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden items-center justify-center rounded-md border-0 px-8 py-2 outline-none transition-all duration-300 hover:bg-blue-500 hover:text-white sm:flex"
        >
          Contato
        </Link>
      </header>
    </MobileContext.Provider>
  )
}

export const useMobileButton = () => useContext(MobileContext)
