import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Gallery from "../../components/Gallery";
import HomeHeader from "../../components/HomeHeader";
import { fetchImages } from "../../store/features/imageSlice";
import { getUserById } from "../../store/features/userSlice";
import "./Home.scss";

const Home = () => {
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages(-1));
  }, [dispatch]);

  return (
    <div className="home">
      <HomeHeader />
      <Gallery images={images} />
    </div>
  );
};

export default Home;
