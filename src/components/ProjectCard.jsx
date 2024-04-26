import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoAddCircleSharp } from "react-icons/io5";

const ProjectCard = ({ data }) => {
  const img = `src/assets/projects.jpg`;
  const dispatch = useDispatch();

  const postTitle = data?.title;
  return (
    <div className="flex font-quatro-book flex-col p-4 shadow-md w-64 h-64 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
      <div className="relative font-quatro-book w-full flex flex-col overflow-hidden">
        <Link to={`/post/details`}>
          <p className="text-xl font-quatro-book truncate font-bold m-4">
            {postTitle}
          </p>
          <div className="flex">
            <p className="bg-indigo-600 font-quatro-book text-white text-xs font-semibold mb-2 mx-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 inline-block">
              Audio visuel
            </p>
            <p className="bg-orange-600 font-quatro-book text-white text-xs font-semibold mb-2 mx-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 inline-block">
              Animation
            </p>
          </div>

          <img
            src={img}
            alt="Post"
            className="card-sh rounded-lg font-quatro-book object-cover h-52 w-52"
          />
        </Link>

        <div className="absolute font-quatro-book bottom-4 right-4">
          <Link to={`/rejoindre/${data.id}`}>
            <button className="bg-transparent font-quatro-book border-none outline-none">
              <img
                src="src/assets/rejoindre.png"
                alt="Rejoindre"
                className="w-20 h-10 shadow-sm border-2, font-quatro-book border-white rounded-full z-10"
              />
            </button>
          </Link>
        </div>

        <div className="group-hover:animate-slideup2 font-quatro-book bg-black outline-none rounded-full group-hover:duration-75"></div>
        <Link to={`/post/${data.id}`}>
          <div className="mt-4 font-quatro-book flex flex-col"></div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
