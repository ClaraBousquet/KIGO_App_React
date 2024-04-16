import React from "react";
import { useDispatch } from "react-redux";

const ProjectCard = ({data, index, title, content}) => {
    const img =`../assets/projects.webp`
    const dispatch = useDispatch();

    const projectTitle = data?.title
    const projectContent = data?.content

return (
  <div className="flex flex-col w-[250px] p-4 bg-black hover:bg-purple-800 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer group">
    <div className="relative w-full flex flex-col">
      {/* <Link to={`TODO detail project`}> */}
        <img
          src={img}
          alt="Projet"
          className="card-sh rounded-lg object-cover h-52 w-52"
        />
      {/* </Link> */}
      {/* on place notre composant playpause ici */}
     
        <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75 overflow-hidden">
          
       
      </div>
      {/* <Link to={`/detail/${albumId}`}> */}
        <div className="mt-4 flex flex-col">
          <p className="text-white text-xl truncate font-bold">{projectTitle}</p>
        </div>
      {/* </Link> */}
    </div>
  </div>
);


}

export default ProjectCard