import { Button } from "antd";
import React from "react";
import { useState } from "react";
// import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { addNewImage } from "../../store/features/imageSlice";
import "./DragAndDrop.scss";

const DragAndDrop = () => {
  const [drag, setDrag] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const { userId } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
    setDrag(false);
  };

  const uploadImage = () => {
    let tagsArr = null;
    if (tags.length) {
      tagsArr = tags.split(",");
    }

    const image = {
      tags: tagsArr,
      imageUrl,
      userId,
    };

    dispatch(addNewImage(image));
  };

  return (
    <div className="drop">
      <div className="drop__input">
        {drag ? (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
            className="drop__input-area"
          >
            Отпустите файлы, чтобы загрузить их
          </div>
        ) : (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            <Button>Посмотреть</Button>либо перетяните
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            {/* <FileBase64
              multiple={false}
              ref={ref}
              onDone={({ base64 }) => setImageUrl(base64)}
            /> */}
          </div>
        )}
      </div>

      {imageUrl && (
        <div className="drop__upload-file">
          <div className="drop__upload-file__img">
            <img src={imageUrl} alt="" />
          </div>
          <div className="drop__upload-file__info">
            <div className="drop__upload-file__item">
              <label>
                <span>Название</span> (не обязательно)
              </label>
              <input type="text" />
            </div>{" "}
            <div className="drop__upload-file__item">
              <label>
                <span>Теги</span>{" "}
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>{" "}
            <div className="drop__upload-file__item">
              <label>
                <span>Местоположение</span>{" "}
              </label>
              <input type="text" />
            </div>
          </div>
        </div>
      )}

      <footer className="drop__footer">
        <Button onClick={uploadImage} className="drop__footer-btn">
          Опубликовать
        </Button>
      </footer>
    </div>
  );
};

export default DragAndDrop;
