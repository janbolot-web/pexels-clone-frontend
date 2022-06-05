import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import useRoutes from "./routes";
import { getUser, setUser } from "./store/features/userSlice";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = useRoutes();
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      dispatch(setUser(data));
    }
  }, []);
  return (
    <Layout className="layout">
      <Header />
      <div className="container">{routes}</div>
    </Layout>
  );
}

export default App;
