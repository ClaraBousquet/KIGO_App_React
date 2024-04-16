import Topbar from "../../components/Topbar";
import Footbar from "../../components/Footerbar";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import ProjectCard from "../../components/ProjectCard";
import { useEffect } from "react";
import { fetchprojects } from "../../redux/project/projectSlice";
import { selectprojects } from "../../redux/project/projectSelector";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprojects());
  }, [dispatch]);

  const dataProjects = useSelector(selectprojects);
  return (
    <div className="flex flex-col ">
      <Topbar />
      <p className=" font-medium  m-2 text-2xl text-purple-700 text-center">
        Projet :{" "}
        <span className="text-pink_01 text-center">Création campagne pub</span>
      </p>
      <p font-medium ml-auto text-2xl text-purple-700 text-center>
        Création d’une campagne publicitaire pour un jus de fruit en canette. Recherche :
        Graphiste, ingé son, illustrateur
      </p>
      <div className="flex justify-center mt-20">
        {/* <ButtonLoader /> */}
        {/* début du test */}
        <img
          src="../src/assets/projects.webp"
          alt="img"
          width={327}
          height={282}
          style={{
            top: "69px",
            left: "34px",
            gap: "0px",
            borderRadius: "15px 80px 15px 80px",
            opacity: "0px",
          }}
        />{" "}
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          <img className="ml-auto " src="../src/assets/rejoindre.png" alt="" />
          {/* fin du test */}
          Les projets
        </h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {Array.isArray(dataProjects) &&
            dataProjects.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          <Footbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
