import React from "react";
import "./AuthPage.scss";
import AuthImages from "../../components/AuthImages";
import {Outlet} from 'react-router-dom'

const AuthPage = () => {
  return (
    <div className="auth">
      <Outlet />
      <AuthImages />
    </div>
  );
};

export default AuthPage;
