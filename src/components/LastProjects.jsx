import Link from "next/link";
import { Projects } from "@/lib/constants";
import { useRouter } from "next/navigation";

export const LastProjects = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.values(Projects)
          .slice(-3)
          .reverse()
          .map((project) => (
            <div
              className="rounded-lg border border-[#084CCF]/30 dark:border-gray-200/20 bg-white dark:bg-zinc-700 p-4 text-sm focus:outline-none"
              key={project.url}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex gap-3">
                  <div
                    onClick={() => router.push(`projects/${project.id}`)}
                    className="block cursor-pointer truncate font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500 dark:hover:text-pink-300"
                  >
                    {project.title}
                  </div>
                  <div
                    className={`relative flex justify-center items-center rounded-full ${
                      project.visibility === "Public"
                        ? "bg-purple-500"
                        : project.visibility === "Private"
                        ? "bg-emerald-600"
                        : "bg-purple-500"
                    } py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white`}
                  >
                    <div className="">{project.visibility}</div>
                  </div>
                </div>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-gray-300 antialiased">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                  <p className="block font-sans text-xs font-normal text-gray-700 dark:text-gray-300 antialiased">
                    {project.techStack}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
