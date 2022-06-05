import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./HomeHeader.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchImages } from "../../store/features/imageSlice";

const menu = (changeSortName) => (
  <Menu
    items={[
      {
        key: "2",
        label: (
          <span
            name="Новые"
            onClick={() => changeSortName(1)}
            style={{
              fontSize: "16px",
              width: "150px",
              display: "block",
            }}
          >
            Новые
          </span>
        ),
      },
      {
        key: "1",
        label: (
          <span
            name="Тенденции"
            onClick={() => changeSortName(2)}
            style={{
              fontSize: "16px",
              width: "150px",
              display: "block",
            }}
          >
            Тенденции
          </span>
        ),
      },
    ]}
  />
);

const HomeHeader = () => {
  const [sortName, setSortName] = useState(1);
  const dispatch = useDispatch();
  const changeSortName = (name) => {
    setSortName(name);
    const sort = name === 1 ? -1 : 1;
    dispatch(fetchImages(sort));
  };
  return (
    <div className="homeHeader">
      <div className="homeHeader__title">Бесплатные стоковые фото</div>
      <Dropdown
        overlay={() => menu(changeSortName)}
        placement="bottomRight"
        arrow
        className="homeHeader__filter"
      >
        <Button className="homeHeader__filter-btn">
          <span>{sortName === 1 ? "Новые" : "Тенденции"}</span>
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default HomeHeader;
