import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./Login.scss";
import { loginUser } from "../../store/features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const onFinish = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [error]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="auth__form">
      <ToastContainer />
      <div className="auth__title">Войдите в свой аккаунт</div>
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
        onFinishFailed={onFinish}
        autoComplete="off"
      >
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
          <Button className="auth__btn" type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
