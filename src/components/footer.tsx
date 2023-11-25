import Link from 'next/link'

import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <div className="mb-20 grid grid-cols-2 items-center justify-items-center gap-10 text-white sm:grid-cols-4">
      <Link
        href="https://github.com/claudomiro-monteiro/claudomiro-monteiro"
        className="transition duration-300 hover:text-blue-500"
      >
        <Github size={36} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/claudomiro-monteiro-3ab959a6"
        className="transition duration-300 hover:text-blue-500"
      >
        <Linkedin size={36} />
      </Link>
      <Link
        href="mailto:claudomiromonteiro@gmail.com?subject=Contato do portfólio&"
        className="transition duration-300 hover:text-blue-500"
      >
        <Mail size={36} />
      </Link>
      <Link
        href="https://www.instagram.com/claudomiro_monteiro"
        className="transition duration-300 hover:text-blue-500"
      >
        <Instagram size={36} />
      </Link>
    </div>
  )
}
