import React from "react";
import Masonry from "react-masonry-css";
import "./AuthImages.scss";

const AuthImages = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="authImages">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=484&w=398"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=282&w=398"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1    "
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=490&w=398"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/3250360/pexels-photo-3250360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=578&w=398"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/11572548/pexels-photo-11572548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/11995419/pexels-photo-11995419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="authImages__img">
          <img
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </Masonry>
    </div>
  );
};

export default AuthImages;
