import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Categories from "../components/Categories";
import CreateEvent from "../components/CreateEvent";

const Homepage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);
  console.log(user)

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <HeroImage />
      <Categories />
      {user.role==="Organizer" && <CreateEvent />}
      <Footer />
    </>
  );
};

export default Homepage;
