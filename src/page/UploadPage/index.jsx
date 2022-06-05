import React from "react";
import DragAndDrop from "../../components/DragAndDrop";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <div className="upload">
      <div className="upload__title">Загрузка фото и видео</div>
      <ul className="upload__condition">
        <li className="upload__condition-item">
          Загруженные вами фото будут распространяться бесплатно под лицензией
          Pexels. Подробнее
        </li>
        <li className="upload__condition-item">
          Чтобы повысить шансы на публикацию, убедитесь, что ваши материалы
          отвечают требованиям документа нашим требованиям.
        </li>
        <li className="upload__condition-item">
          Мы рассмотрим ваши материалы. Если ваше фото будет отобрано, вы
          получите уведомление по электронной почте. После этого фото будет
          представлено в поиске.
        </li>
      </ul>
      <DragAndDrop />
    </div>
  );
};

export default UploadPage;
