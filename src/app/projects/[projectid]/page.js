import { Projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { TbShare3 } from "react-icons/tb";

const Detail = ({ params }) => {
  const project = Projects[params.projectid];

  return (
    <div className="min-h-screen py-8 md:py-10 px-4 md:px-3 xl:px-0">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
        {project.title}
      </h1>
      <div className="pt-10 pb-16 flex flex-col md:flex-row gap-y-6 md:gap-x-6">
        <div className="">
          <Image
            width={300}
            height={300}
            src={project.image}
            alt={project.title}
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-2xl"
          />
        </div>
        <div className="w-full flex-1">
          <p className="font-normal text-md md:text-lg">
            <span className="font-medium">Description:</span>
            {project.description}
          </p>
          <span className="">
            <p className="font-normal text-md md:text-lg">
              <span className="font-medium">Tech-Stack:</span>
              {project.techStack}
            </p>
            <p className="font-normal text-md md:text-lg">
              <span className="font-medium">Visibility:</span>
              {project.visibility}
            </p>
            <p className="font-medium text-md md:text-lg">
              <Link href={project.url} className="flex">
                Repository
                <div className="mt-[0.5px] ml-1">
                  <TbShare3 size={20} />
                </div>
              </Link>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;

// <p>{project.description}</p>
//         <p>{project.url}</p>
//         <p>{project.techStack}</p>
//         <p>{project.visibility}</p>
//         <p>{project.image}</p>
//         <p>{project.id}</p>
