import Topbar from "../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../../components/ProjectCard";
import { useEffect } from "react";
import { fetchpost } from "../../redux/post/postSlice";
import { selectpost } from "../../redux/post/postSelector";
import React from "react";
import { TfiDashboard } from "react-icons/tfi";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";




const Homy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost());
  }, [dispatch]);

  const datapost = useSelector(selectpost);
  const posts = datapost["hydra:member"];

  return (
    <div className="flex flex-col ">
      <Topbar />

      <div className="flex justify-center mt-20">
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {/* ici on map sur post pour afficher les différents post */}
          {posts?.map((post) => (
            <ProjectCard key={post["@id"]} data={post} />
          ))}

          {/* FootBar */}
          <div
            className="fixed bottom-0 w-full flex items-center justify-evenly"
            style={{
              backgroundImage: `url(src/assets/footbar.svg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Link to="/">
              <img
                src="src/assets/house-logo.svg"
                alt="Accueil"
                className="w-8 h-8"
              />
            </Link>
            <img
              src="src/assets/search-logo.svg"
              alt="Rechercher"
              className="w-8 h-8"
            />
            <Link to="/addproject">
              <MdOutlineAddCircle
                className="w-14 h-14 "
                style={{ color: "white" }}
              />
            </Link>
            <img
              src="src/assets/message.svg"
              alt="Messages"
              className="w-8 h-8"
            />

            <Link to="/profile">
              <TfiDashboard className="w-10 h-10" />
            </Link>
          </div>
          {/* FootBar */}
        </div>
      </div>
    </div>
  );
};

export default Homy;
