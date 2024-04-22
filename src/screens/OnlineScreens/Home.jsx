import Topbar from "../../components/Topbar";
import Footbar from "../../components/Footerbar";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import ProjectCard from "../../components/ProjectCard";
import { useEffect } from "react";
import { fetchpost } from "../../redux/post/postSlice";
import { selectpost } from "../../redux/post/postSelector";

const Home = () => {
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
          <Footbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
