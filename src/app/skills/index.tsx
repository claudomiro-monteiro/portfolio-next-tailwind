/* eslint-disable @next/next/no-img-element */
// import img from 'next/image'

// import Image from 'next/image'

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex scroll-mt-12 flex-col px-8 py-4 text-lg font-normal text-white sm:scroll-mt-16"
    >
      <div className="h-px bg-white" />
      <h1 className="py-6 text-2xl font-extrabold">Skills</h1>
      <p>
        Eu crio sites responsivos fáceis de usar e construidos com as melhores
        práticas. Minha área de especialização é Desenvolvimento Web Front-End,
        utilizando as melhores ferramentas disponiveis no mercado atualmente,
        HTML, CSS, Sass, Styled-components, Tailwind CSS, Javascript, ReactJs,
        Typescript, Next.Js...
      </p>
      <div className="grid grid-cols-1 justify-items-center gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
        <section>
          <img
            alt="Static Badge"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3"
            alt="CSS"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=Sass&logoColor=white"
            alt="Sass"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/STYLED--COMPONENTS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"
            alt="Styled-components"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/Tailwins_CSS-06B6D4?style=for-the-badge&logo=Tailwind%20Css&logoColor=white"
            alt="Tailwind CSS"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="Javascript"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/REACT-030712?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"
            alt="Typescript"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/next.js-030712?style=for-the-badge&logo=nextdotjs&logoColor=white"
            alt="Next.JS"
            width={100}
            height={100}
            className="h-12 w-auto rounded"
          />
        </section>
      </div>
    </div>
  )
}
