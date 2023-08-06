'use client'

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const {projects, language} = useLanguage();

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <Header>{language === "EN" ? "Projects" : "Proyectos"}</Header>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map((project) => <ProjectCard key={project._id} {...project}/>)}
      </div>
    </div>
  );
}
