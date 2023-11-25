import Link from 'next/link'
import { useMobileButton } from './header'

export default function Sidebar() {
  const { handleMobileButton, openSidebar } = useMobileButton()
  return (
    <div
      className={`fixed  bottom-0 right-0 z-20 flex h-[calc(100%-4rem)] flex-col items-center justify-center overflow-x-hidden bg-emerald-500 text-white transition-all duration-300 sm:hidden ${
        openSidebar ? 'w-full' : 'w-0'
      }`}
    >
      <nav className="flex h-full flex-col items-center justify-evenly">
        <Link href="/">Inicio</Link>
        <Link href="/#about" onClick={handleMobileButton}>
          Sobre
        </Link>
        <Link href="/#skills" onClick={handleMobileButton}>
          Skills
        </Link>
        <Link href="/#projects" onClick={handleMobileButton}>
          Projects
        </Link>
        <Link href="/contact" onClick={handleMobileButton}>
          Contato
        </Link>
      </nav>
    </div>
  )
}
