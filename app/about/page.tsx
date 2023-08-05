import { client } from "../lib/sanity";
import TechCard from "../components/TechCard";

interface TechProps {
  title: string;
  _id: string;
  imageUrl: string;
}

async function getTechs() {
  const query = `*[_type == "tech"] {
    title,
      _id,
      "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const techs: TechProps[] = await getTechs();

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl ">
          About me!
        </h1>
      </div>

      <div className=" items-start space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
        <aside className="flex flex-col items-start pt-8 gap-2 lg:col-span-2">
          <p className="text-left text-md">
            Hey! My name is Miguel Suarez, and I am a passionate Frontend
            Developer hailing from the vibrant city of Bogota. At the age of 26,
            I have dedicated myself to the world of programming, with a
            particular focus on crafting exceptional user experiences through
            frontend development.
          </p>
          <p className="text-left text-md">
            With a strong foundation in{" "}
            <span className="text-cyan-600 font-bold">React</span>,{" "}
            <b>JavaScript</b>, and{" "}
            <span className=" text-[#3178C6] font-bold">Typescript</span>, I
            possess a keen understanding of modern web technologies. I am
            well-versed in building interactive and dynamic web applications
            that bring ideas to life. Additionally, my expertise extends to
            frameworks like <b>Next.js</b> and <b>Astro</b>, which allow me to
            create performant and scalable applications with ease.
          </p>

          <p className="text-left text-md">
            I am excited about the endless possibilities that technology brings,
            and I am thrilled to be part of the frontend development community.
            If you have any projects or opportunities where my skills can make a
            difference, please don&apos;t hesitate to reach out. I look forward to
            creating exceptional web experiences together!
          </p>
        </aside>
        <article className="prose max-w-none prose-lg py-8 dark:prose-invert lg:col-span-2">
          <h3 className="py-3 text-2xl font-bold tracking-tight">Tech Stack</h3>
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
