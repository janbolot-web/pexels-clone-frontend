import { DownloadOutlined, HeartOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchImages } from "../../store/features/imageSlice";
import { getUserById } from "../../store/features/userSlice";

import "./Gallery.scss";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  426: 1,
};

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images &&
          images.map((image, index) => (
            <div
              // onClick={() => getUser(image.userId)}
              className="gallery__img"
              key={index}
            >
              <img src={image.imageUrl} alt="" />
              <div className="gallery__img-bottom">
                <div className="gallery__img-hover">
                  <Link
                    to={`/profile/${image.userId}`}
                    className="gallery__img-hover-user"
                  >
                    <img
                      src="https://images.pexels.com/lib/avatars/orange.png?w=130&h=130&fit=crop&dpr=1"
                      alt=""
                    />
                    <span className="gellery__img-hover-name">
                      {image.photographer}
                    </span>
                  </Link>
                  <div className="gallery__img-hover-actions">
                    <Link
                      to={image.imageUrl}
                      download
                      target="_blank"
                      className="gallery__img-hover-item"
                    >
                      <div>
                        <DownloadOutlined />
                      </div>
                    </Link>
                    <div className="gallery__img-hover-item">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Masonry>
    </div>
  );
};
export default Gallery;
