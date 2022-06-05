import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./Registration.scss";
import { registerUser } from "../../store/features/userSlice";
import AlertInfo from "../AlertInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const { loading, message } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await dispatch(registerUser(values));
    setAlert(true);
    // navigate('/')
  };

  return (
    <div className="auth__form">
      {alert && <AlertInfo message={message} />}

      <div className="auth__title">
        Присоединяйтесь к 12 миллионам пользователей
      </div>
      <div className="auth__descr">
        Загружайте бесплатные фото и видео, созданные сообществом фотографов.
      </div>
      <Form
        name="basic"
        labelCol={{}}
        wrapperCol={{}}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Имя" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Электронная почта" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input placeholder="Пароль" />
        </Form.Item>
        <Form.Item wrapperCol={{}}>
          <Button
            disabled={loading}
            className="auth__btn"
            type="primary"
            htmlType="submit"
          >
            {loading ? "Подождите..." : "Создать учетную запись"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
