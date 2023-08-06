"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const pathname = usePathname();
  const {language} = useLanguage();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <Link
                className="flex justify-left items-center gap-4 hover:scale-105"
                href="/"
              >
                <Image
                  src="/logo_black.svg"
                  alt="Logo"
                  className="dark:invert"
                  width={60}
                  height={24}
                  priority
                />
                <h2 className="hidden md:block ">
                  {" "}
                  MAS Dev |{" "}
                  <span className="text-cyan-400">{language === "ES" ? "Desarrollo Web" : "Web Development"}</span>
                </h2>
              </Link>
              <ul className="hidden md:flex md:gap-4 md:items-center">
                <li
                  className={`${
                    pathname === "/"
                      ? "border-b-2 border-cyan-400 hover:scale-110"
                      : "text-gray-600 hover:text-black hover:scale-110 dark:text-gray-500 dark:hover:text-white"
                  }`}
                >
                  <Link href="/" prefetch>
                    {language === "ES" ? "Inicio" : "Home"}
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/about"
                      ? "border-b-2 border-cyan-400 hover:scale-110"
                      : "text-gray-600 hover:text-black hover:scale-110 dark:text-gray-500 dark:hover:text-white"
                  }`}
                >
                  <Link href="/about">{language === "ES" ? "Sobre mi" : "About"}</Link>
                </li>
                <li
                  className={`${
                    pathname === "/projects"
                      ? "border-b-2 border-cyan-400 hover:scale-110"
                      : "text-gray-600 hover:text-black hover:scale-110 dark:text-gray-500 dark:hover:text-white"
                  }`}
                >
                  <Link href="/projects">{language === "ES" ? "Proyectos" : "Projects"}</Link>
                </li>
                <li
                  className={`${
                    pathname === "/contact"
                      ? "border-b-2 border-cyan-400 hover:scale-110"
                      : "text-gray-600 hover:text-black hover:scale-110 dark:text-gray-500 dark:hover:text-white"
                  }`}
                >
                  <Link href="/contact">{language === "ES" ? "Contacto" : "Contact"}</Link>
                </li>
                <li>
                  <ThemeButton />
                </li>
                <li>
                  <LanguageButton />
                </li>
              </ul>
              <div className="-mr-2 flex justify-between items-center gap-2 md:hidden">
                <ThemeButton />
                <LanguageButton />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 dark:hover:bg-gray-400">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-teal-50 border-cyan-400 text-teal-500 block px-4 py-2 border-l-4 dark:bg-gray-600 dark:text-white text-base font-medium"
                    : "border-transparent hover:bg-gray-50 hover:border-gray-500 block px-4 py-2 border-l-4 hover:dark:bg-gray-700 dark:text-white text-base font-medium"
                }`}
              >
                {language === "ES" ? "Inicio" : "Home"}
              </Link>
              <Link
                href="/about"
                prefetch
                className={`${
                  pathname === "/about"
                    ? "bg-teal-50 border-cyan-400 text-teal-500 block px-4 py-2 border-l-4 dark:bg-gray-600 dark:text-white text-base font-medium"
                    : "border-transparent hover:bg-gray-50 hover:border-gray-500 block px-4 py-2 border-l-4 hover:dark:bg-gray-700 dark:text-white text-base font-medium"
                }`}
              >
                {language === "ES" ? "Sobre mi" : "About"}
              </Link>
              <Link
                href="/projects"
                prefetch
                className={`${
                  pathname === "/projects"
                    ? "bg-teal-50 border-cyan-400 text-teal-500 block px-4 py-2 border-l-4 dark:bg-gray-600 dark:text-white text-base font-medium"
                    : "border-transparent hover:bg-gray-50 hover:border-gray-500 block px-4 py-2 border-l-4 hover:dark:bg-gray-700 dark:text-white text-base font-medium"
                }`}
              >
                {language === "ES" ? "Proyectos" : "Projects"}
              </Link>
              <Link
                href="/contact"
                prefetch
                className={`${
                  pathname === "/contact"
                    ? "bg-teal-50 border-cyan-400 text-teal-500 block px-4 py-2 border-l-4 dark:bg-gray-600 dark:text-white text-base font-medium"
                    : "border-transparent hover:bg-gray-50 hover:border-gray-500 block px-4 py-2 border-l-4 hover:dark:bg-gray-700 dark:text-white text-base font-medium"
                }`}
              >
                {language === "ES" ? "Contacto" : "Contact"}
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
