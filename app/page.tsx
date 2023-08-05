import Image from "next/image";
import profile from "@/public/perfil.png";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl ">
          Welcome!
        </h1>
      </div>

      <div className="items-center space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <aside className="flex flex-col items-center pt-8">
          <Image
            src={profile}
            alt="Profile picture"
            width={200}
            height={200}
            className=" rounded-full"
          />
          <h3 className="py-3 text-2xl font-bold tracking-tight">
            Miguel Angel Suarez
          </h3>
          <p className="text-center text-md">FrontEnd Developer</p>
          <div className="flex space-x-5 pt-6">
            <a
              href="https://www.linkedin.com/in/miguel-suarez-1805/"
              target="_blank"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 hover:text-cyan-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="https://github.com/MiguelSuarez-hub" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 hover:text-cyan-600"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="">
              <svg
                viewBox="0 0 900 1000"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 hover:text-cyan-600"
              >
                <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
              </svg>
            </a>
          </div>
        </aside>
        <article className="prose max-w-none prose-lg py-8 dark:prose-invert lg:col-span-2">
          <p className="text-left text-md">
            Hi! My name is Miguel Suarez, I am a FrontEnd Developer located in
            Bogota/Colombia, I am a selfmade Developer who is always learning
            and serching new tools to be a better developer, since 2020 I
            started learning web development and fell in love with programing.
          </p>
          <p className="text-left text-md">
            <span className="text-cyan-600 font-bold">React</span> is a
            powerfull language and i love to use it in my projects, also{" "}
            <span className="text-cyan-600 font-bold">NextJs</span> provides us
            with a lot of tools to improve our development, I enjoy developing
            useful web applications, and expend time reading and writing code.
          </p>
          <div className="flex-col items-center justify-center">
            <p className="text-center text-2xl m-0">Developed with: </p>
            <div className="flex items-center justify-center gap-4">
              <div className=" h-16 w-28 m-0 relative ">
                <Image
                  src="/next.svg"
                  alt="next logo"
                  fill
                  className=" w-full h-full my-0 object-contain"
                />
              </div>
              <p className="text-center text-4xl m-0">+</p>
              <div className=" h-16 w-16 m-0 relative ">
                <Image
                  src="/tailwind.png"
                  alt="tailwind logo"
                  fill
                  className=" w-full h-full my-0 object-contain"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
