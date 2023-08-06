"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";

interface TechProps {
  title: string;
  _id: string;
  imageUrl: string;
}

interface ProjectProps {
  title: string;
  description_en: string;
  description_es: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  link_1: string;
  link_2: string;
  _id: string;
  imageUrl: string;
}

export const LanguageContext = createContext<{
  language: string;
  setLanguage: (language: string) => void;
  techs: TechProps[];
  projects: ProjectProps[];
}>({
  language: "",
  setLanguage: (language: string) => {},
  techs: [],
  projects: []
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useContext must be used whitin a Provider");
  }

  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState("EN");
  const [techs, setTechs] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const initialLanguage = window.navigator.language
      .slice(0, 2)
      .toLocaleUpperCase();
    setLanguage(initialLanguage);
    getTechs();
    getProjects();
  }, []);

  async function getTechs() {
    const query = `*[_type == "tech"] {
      title,
        _id,
        "imageUrl": image.asset->url
    }`;
    const data = await client.fetch(query);
    setTechs(data);
  }

  async function getProjects() {
    const query = `*[_type == "project"] {
      title,
        description_en,
        description_es,
        tag_1,
        tag_2,
        tag_3,
        link_1,
        link_2,
        _id,
        "imageUrl": image.asset->url
    }`;
    const data = await client.fetch(query);
    setProjects(data);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, techs, projects }}>
      {children}
    </LanguageContext.Provider>
  );
};
