import Image from 'next/image'
import About from './about'
import Projects from './projects'
import Skills from './skills'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 justify-items-center gap-6 overflow-x-hidden p-6 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 px-16 text-left text-white">
          <h4 className="text-emerald-500">Desenvolvedor Web Front End</h4>
          <h1 className="text-6xl font-extrabold">Oi, sou o Claudomiro</h1>
          <p>
            Desenvolvedor Web Front End desde 2019, com habilidades em HTML,
            CSS, Styled-Commponents, Javascript, React...
          </p>
        </div>
        <div>
          <Image
            src="/developer-image.svg"
            width={600}
            height={0}
            quality={100}
            alt=""
          />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
