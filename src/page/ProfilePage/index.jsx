import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "../../components/Gallery";
import { fetchImagesById } from "../../store/features/imageSlice";
import { getUser } from "../../store/features/userSlice";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user.user);
  const { userData } = useSelector((state) => state.user.user);
  const { myImages } = useSelector((state) => state.images);
  useEffect(() => {
    dispatch(fetchImagesById(userId));
  }, []);
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__header-img">
          <img
            src="https://images.pexels.com/lib/avatars/orange.png?w=130&h=130&fit=crop&dpr=1"
            alt=""
          />
        </div>
        <div className="profile__header-name">Janbolot</div>
        <Button className="profile__header-edit">
          <EditOutlined />
          <span>Редактировать профиль</span>
        </Button>
        <div className="profile__header-info">
          <div className="profile__header-info__item">
            <span>Всего просмотров</span>
            <div>0</div>
          </div>
          <div className="profile__header-info__item">
            <span>Всего лайков</span>
            <div>0</div>
          </div>
          <div className="profile__header-info__item">
            <span>Всего скачиваний</span>
            <div>0</div>
          </div>
        </div>
      </div>
      <div className="profile__images">
        <Gallery images={myImages} />
      </div>
    </div>
  );
};

export default ProfilePage;
