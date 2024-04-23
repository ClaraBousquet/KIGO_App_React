import React from 'react'
import Topbar from "../../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost } from "../../../redux/post/postSlice";
import { selectpost } from "../../../redux/post/postSelector";
import { Link } from "react-router-dom";




const MyProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost());
  }, [dispatch]);

  const datapost = useSelector(selectpost);
  const posts = datapost["hydra:member"] || []; // Assurez-vous que cela est correctement initialisé.

  return (
    <div className='flex flex-col justify-center items-center'>
      <Topbar />
      <h1 style={{ color: `#8f00ff` }} className='text-3xl font-bold justify-center shadow-lg underline-1'>Mes projets</h1>
      <div className="flex justify-center mt-20">
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col p-4 shadow-md w-64 h-64 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group"
            >
              <div className="relative w-full flex flex-col overflow-hidden">
                <Link to={`/post/${post.id}`}>
                  <p className="text-xl truncate font-bold m-4">{post.title}</p>
                  <img
                    src={post.image || `src/assets/projects.jpg`} // Supposons que vous avez une propriété 'image' dans 'post'.
                    alt="Post"
                    className="card-sh rounded-lg object-cover h-52 w-52"
                  />
                </Link>
                {/* Assurez-vous que les liens suivants ont les bonnes routes et les bonnes données à utiliser. */}
                <div className="absolute bottom-4 right-4">
                  <Link to={`/rejoindre/${post.id}`}>
                    {/* Contenu du lien ici */}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;