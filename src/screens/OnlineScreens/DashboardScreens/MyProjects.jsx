import React from 'react'
import Topbar from "../../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../../../components/ProjectCard";
import { useEffect } from "react";
import { fetchpost } from "../../../redux/post/postSlice";
import { selectpost } from "../../../redux/post/postSelector";
import { Link } from "react-router-dom";




const MyProjects = ({data}) => {
      const img = `src/assets/projects.jpg`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost());
  }, [dispatch]);

  const datapost = useSelector(selectpost);
  const posts = datapost["hydra:member"];

  const postTitle = data?.title;

  return (
    <div>
      <Topbar />
      <div className="flex justify-center mt-20">
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {/* ici on map sur post pour afficher les différents post */}
          {posts?.map((post) => (
            <div className="flex flex-col p-4 shadow-md w-64 h-64 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
              <div className="relative w-full flex flex-col overflow-hidden">
                {/* Utilise un Link pour lier chaque post à sa page détail */}
                <Link to={`/post/${data.id}`}>
                  {/* Assure-toi de remplacer data.id par la propriété correspondant à l'identifiant unique de ton post */}
                  <p className="text-xl truncate font-bold m-4">{postTitle}</p>
                  <img
                    src={img}
                    alt="Post"
                    className="card-sh rounded-lg object-cover h-52 w-52"
                  />
                </Link>

                <div className="absolute bottom-4 right-4">
                  <Link to={`/rejoindre/${data.id}`}>
                    
                  </Link>
                </div>

                <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75"></div>
                <Link to={`/post/${data.id}`}>
                  {/* Assure-toi de remplacer data.id par la propriété correspondant à l'identifiant unique de ton post */}
                  <div className="mt-4 flex flex-col"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProjects