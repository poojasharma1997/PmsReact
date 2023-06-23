import "./App.css";
// import Sidebar from './Components/Sidebar';
import { useEffect, useState } from "react";
import Sidebar from "./CommonComponents/Sidebar";
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Signin from "./view/Signin";

import Signin2 from "./view/Signin/Signin2";
import Signin3 from "./view/Signin/Signin3";

import store from "./Redux/Store";

import AuthRoute from "./CommonComponents/Routes";
// import Header from './Components/Header';

function App() {
  const [sidebarShow, setSidebarShow] = useState(false);
  useEffect(() => {
    if (!!localStorage.getItem("token")) {
      setSidebarShow(true);
    } else {
      setSidebarShow(false);
    }
  }, []);
  // const token = localStorage.getItem('token')

  return (
    <Provider store={store}>
      <div className="container-fluid px-0 d-flex">
        {sidebarShow ? <Sidebar /> : ""}

        <Routes>
          <Route
            path="/"
            element={<Signin setSidebarShow={setSidebarShow} />}
          />
          <Route
            path="/signin"
            element={<Signin setSidebarShow={setSidebarShow} />}
          />
          <Route
            path="/signin2"
            element={<Signin2 setSidebarShow={setSidebarShow} />}
          />
          <Route
            path="/signin3"
            element={<Signin3 setSidebarShow={setSidebarShow} />}
          />
          {AuthRoute.map((item) => {
            return <Route path={item.route} element={item.compo} />;
          })}

        
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
