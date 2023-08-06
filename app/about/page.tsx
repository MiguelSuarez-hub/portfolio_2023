'use client'

import TechCard from "../components/TechCard";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const {language, techs} = useLanguage();
  
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <Header >{language === "ES" ? "Sobre mi" : "About me"}</Header>

      <div className=" items-start space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0 mx-2">
        <aside className="flex flex-col items-start pt-8 gap-2 lg:col-span-2">
          <p className="text-left text-md">
          {language === "ES" ? "Mi nombre es Miguel Suarez, y soy un apasionado Desarrollador Frontend proveniente de la vibrante ciudad de Bogotá. A la edad de 26 años, me he dedicado al mundo de la programación, con un enfoque particular en la elaboración de experiencias de usuario excepcionales a través del desarrollo frontend." : "Hey! My name is Miguel Suarez, and I am a passionate Frontend Developer hailing from the vibrant city of Bogota. At the age of 26, I have dedicated myself to the world of programming, with a particular focus on crafting exceptional user experiences through frontend development."}
            
          </p>
          {language === "ES" ? <p className="text-left text-md">
          Con una base sólida en{" "}
            <span className="text-cyan-600 font-bold">React</span>,{" "}
            <b>JavaScript</b>, y{" "}
            <span className=" text-[#3178C6] font-bold">Typescript</span>, poseo una gran comprensión de las tecnologías web modernas. Estoy bien versado en la construcción de aplicaciones web interactivas y dinámicas que dan vida a las ideas. Además, mi experiencia se extiende a frameworks como <b>Next.js</b> y <b>Astro</b>, que me permiten crear aplicaciones escalables y de alto rendimiento con facilidad.
          </p> : <p className="text-left text-md">
            With a strong foundation in{" "}
            <span className="text-cyan-600 font-bold">React</span>,{" "}
            <b>JavaScript</b>, and{" "}
            <span className=" text-[#3178C6] font-bold">Typescript</span>, I
            possess a keen understanding of modern web technologies. I am
            well-versed in building interactive and dynamic web applications
            that bring ideas to life. Additionally, my expertise extends to
            frameworks like <b>Next.js</b> and <b>Astro</b>, which allow me to
            create performant and scalable applications with ease.
          </p>}
          

          <p className="text-left text-md">
          {language === "ES" ? "Estoy entusiasmado con las infinitas posibilidades que ofrece la tecnología, y estoy encantado de formar parte de la comunidad de desarrollo frontend. Si tienes algún proyecto u oportunidad en el que mis habilidades puedan marcar la diferencia, no dudes en ponerte en contacto conmigo. Estoy deseando que creemos juntos experiencias web excepcionales." : "I am excited about the endless possibilities that technology brings, and I am thrilled to be part of the frontend development community. If you have any projects or opportunities where my skills can make a difference, please don&apos;t hesitate to reach out. I look forward to creating exceptional web experiences together!"}
            
          </p>
        </aside>
        <article className="prose max-w-none prose-lg py-8 dark:prose-invert lg:col-span-2">
          <h3 className="py-3 text-2xl font-bold tracking-tight">{language === "ES" ? "Habilidades" : "Tech Stack"}</h3>
          <div className="align-center items-center grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-x-2 gap-y-2">
            {techs.map((tech) => (
              <TechCard key={tech._id} {...tech} />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}