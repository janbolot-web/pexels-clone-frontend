import React from "react";
import { Alert } from "antd";
import "./AlertInfo.scss";

const AlertInfo = ({ message, setAlert }) => {
  return (
    <Alert
      message={message}
      type="success"
      closable
      className="alertInfo"
      afterClose={() => setAlert(false)}
    />
  );
};

export default AlertInfo;
