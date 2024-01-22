"use client";

import { LastProjects } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 md:px-3 xl:px-0">
      <section id="about" className="py-8 md:py-10">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          About me
        </h1>
        <div className="pt-10 pb-8 max-w-5xl flex flex-col gap-y-3">
          <div className="text-lg text-black dark:text-white font-light leading-relaxed">
            <p>
              Lorem ipsum diam sodales volutpat sapien magna interdum, proin
              platea tempus libero hendrerit semper pellentesque odio, fermentum
              a tristique fusce commodo fusce. Facilisis auctor aptent consequat
              sem risus nec netus praesent cubilia diam, vestibulum pretium
              egestas netus risus egestas molestie arcu posuere sociosqu amet,
              lectus tellus mi habitasse per sem vulputate feugiat nostra.
              Malesuada praesent risus commodo aliquam dictumst vitae tristique,
              nullam fringilla dolor fermentum suspendisse euismod, posuere
              phasellus congue tortor placerat eros.
            </p>
            <p className="mt-2">
              Quisque sodales adipiscing placerat euismod sapien ac erat,
              fringilla pellentesque praesent habitasse tortor fringilla,
              eleifend ultricies tincidunt iaculis sit arcu. Pellentesque vitae
              rutrum venenatis non porttitor accumsan, faucibus non habitant
              dictum sit, quam vitae rutrum lacinia rhoncus. Aenean purus
              elementum interdum orci primis cras, mattis duis porta donec purus
              massa potenti, faucibus euismod molestie augue eleifend. Pulvinar
              etiam imperdiet taciti cursus eget consequat, justo a mauris
              euismod ligula, ad platea interdum himenaeos suspendisse.
            </p>
            <p className="mt-2">
              <span className="font-medium">Tech Stack:</span> X, Y, Z, A, B, C
              and a few other things.
            </p>
          </div>
        </div>
      </section>
      <section id="education" className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          Education
        </h1>
        <div className="pt-10 pb-16">
          <div className="space-y-6 ml-3 border-l-2 border-dashed">
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 bg-black/80 dark:bg-white/80 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-blue-500 dark:text-blue-400">Lorem ipsum</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500 dark:text-gray-300">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
                <span className="mt-1 block text-sm font-semibold text-blue-500 dark:text-blue-400">
                  2021 - Present
                </span>
              </div>
            </div>
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 bg-black/80 dark:bg-white/80 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-blue-500 dark:text-blue-400">Lorem ipsum</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500 dark:text-gray-300">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
                <span className="mt-1 block text-sm font-semibold text-blue-500 dark:text-blue-400">
                  2016 - 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          Experience
        </h1>
        <div className="pt-10 pb-16">
          <div className="relative">
            <ul className="list-none ml-1 m-0 p-0">
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                  <div className="flex-1 ml-4 font-medium">
                    Oct 2020 - Learn X
                  </div>
                </div>
                <div className="ml-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos tenetur, suscipit atque et nulla dolores unde
                  maiores doloribus nemo possimus commodi totam consectetur
                  temporibus odit velit illo repellendus provident vitae.
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                  <div className="flex-1 ml-4 font-medium">
                    May 2019 - Learn Y
                  </div>
                </div>
                <div className="ml-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos tenetur, suscipit atque et nulla dolores unde
                  maiores doloribus nemo possimus commodi totam consectetur
                  temporibus odit velit illo repellendus provident vitae.
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                  <div className="flex-1 ml-4 font-medium">
                    April 2019 - Learn Z
                  </div>
                </div>
                <div className="ml-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos tenetur, suscipit atque et nulla dolores unde
                  maiores doloribus nemo possimus commodi totam consectetur
                  temporibus odit velit illo repellendus provident vitae.
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                  <div className="flex-1 ml-4 font-medium">
                    Feb 2018 - Learn W
                  </div>
                </div>
                <div className="ml-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos tenetur, suscipit atque et nulla dolores unde
                  maiores doloribus nemo possimus commodi totam consectetur
                  temporibus odit velit illo repellendus provident vitae.
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                  <div className="flex-1 ml-4 font-medium">
                    May 2017 - Learn Q
                  </div>
                </div>
                <div className="ml-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos tenetur, suscipit atque et nulla dolores unde
                  maiores doloribus nemo possimus commodi totam consectetur
                  temporibus odit velit illo repellendus provident vitae.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          Last Projects
        </h1>
        <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-y-3">
          <div className="text-xl font-light leading-relaxed">
            <LastProjects />
            <div className="py-4">
              <Link href="/projects">
                <span className="font-medium text-base text-[#084CCF] dark:text-[#4577d4]">
                  See more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
