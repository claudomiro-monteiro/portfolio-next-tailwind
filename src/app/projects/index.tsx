'use client'

import { useKeenSlider } from 'keen-slider/react'
import { projects } from './project'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

export default function Projects() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 320px)': {
        slides: {
          origin: 'center',
          perView: 1,
          spacing: 15,
        },
      },
      '(min-width: 700px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      '(min-width: 1130px)': {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
  })
  return (
    <div
      id="projects"
      className="flex scroll-mt-12 flex-col px-8 py-4 text-lg font-normal text-white sm:scroll-mt-16"
    >
      <div className="h-px bg-white" />
      <h1 className="py-6 text-2xl font-extrabold">Projetos</h1>
      <div ref={ref} className="keen-slider mb-40 flex items-start gap-8">
        {projects.map((repo) => {
          return (
            <div
              key={repo.id}
              className="keen-slider__slide flex !min-w-[19rem] flex-col items-center justify-center gap-8 !overflow-auto rounded-md bg-zinc-800 p-6 sm:!min-w-[20rem] md:!min-w-[22rem]"
            >
              {repo.title}
              <Image
                src={repo.img}
                alt=""
                width={1366}
                height={768}
                // className="h-32 w-auto sm:h-36 md:h-40"
              />
              {repo.description}
              <a
                href={repo.rote}
                className="flex items-center rounded-lg border-none bg-blue-500 px-10 py-2 font-semibold text-gray-950 outline-none transition duration-300 hover:brightness-75"
              >
                Saiba mais...
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
