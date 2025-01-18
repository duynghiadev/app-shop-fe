import { useLocation } from "react-router-dom";
import Navigate from "../components/Navigates/Navigate";

const Home = () => {
  const location = useLocation();
  console.log("location: ", location);

  return (
    <>
      <Navigate />
      <h1>Home</h1>
    </>
  );
};

export default Home;
