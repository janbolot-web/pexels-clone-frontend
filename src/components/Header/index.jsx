import { CaretDownOutlined, CloudUploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLogin } from "../../store/features/userSlice";
import "./Header.scss";

const menu = (logout, userId) => (
  <Menu
    className="header__auth-dropdown"
    items={[
      {
        key: "1",
        label: <Link to={`/profile/${userId}`}>Мой профил</Link>,
      },
      {
        key: "2",
        label: (
          <button
            onClick={logout}
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Выйти из аккаунта
          </button>
        ),
      },
    ]}
  />
);

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { userId } = useSelector((state) => state.user.user);
  const [navbar, setNavbar] = useState(false);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setIsLogin());
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="header">
      <div className={navbar ? "header__inner active" : "header__inner"}>
        <Link to={"/"} className="header__logo">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/1d/de/9a/1dde9a64-4183-4ca9-c37e-c0b22dcf48b7/source/512x512bb.jpg"
            alt=""
          />
          <span>Pexels</span>
        </Link>
        <div className="header__search">
          <Search placeholder="Поиск бесплатных изображений" />
        </div>
        <div className="header__auth">
          {isAuth ? (
            <>
              <Dropdown
                className=""
                overlay={() => menu(logout, userId)}
                placement="bottom"
                arrow
              >
                <Link to={`/profile/${userId}`}>
                  <Button
                    type="primary"
                    shape="circle"
                    className="header__auth-user"
                    icon={<UserOutlined />}
                    size={"large"}
                  />
                </Link>
              </Dropdown>

              <Link to="/upload">
                <button className="header__auth-login">Загрузить</button>
                <button className="header__auth-login upload"><CloudUploadOutlined /></button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth">
                <button className="header__auth-login">Войти</button>
              </Link>

              <Link to="/auth/registration">
                <button className="header__auth-registration">
                  Присоединиться
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
