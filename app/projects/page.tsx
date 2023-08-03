import ProjectCard from "../components/ProjectCard";
import { client } from "../lib/sanity";

interface ProjectProps {
  title: string;
  description: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  link_1: string;
  link_2: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      description,
      tag_1,
      tag_2,
      tag_3,
      link_1,
      link_2,
      _id,
      "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Projects() {
  const projects: ProjectProps[] = await getProjects();

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl ">
          Projects
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map((project) => <ProjectCard key={project._id} {...project}/>)}
      </div>
    </div>
  );
}
