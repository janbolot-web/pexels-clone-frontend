import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AuthPage from "./page/AuthPage";
import Home from "./page/Home";
import ProfilePage from "./page/ProfilePage";
import UploadPage from "./page/UploadPage";
import UserProfile from "./page/UserProfile";

const useRoutes = () => {
  const { isAuth } = useSelector((state) => state.user);
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/upload" element={<UploadPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/profile/:userId" element={<UserProfile />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </div>
  );
};

export default useRoutes;
