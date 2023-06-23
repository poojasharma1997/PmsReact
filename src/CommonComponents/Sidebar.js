import React, { useState } from "react";
import "./header.css";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import menuList from "./menuOption";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [showSmall, setshowSmall] = useState(false);
  const [option, setOption] = useState({
    menu: "",
    submenu: "",
    supersubmenu: "",
  });
  const [sidebarShow, setSidebarShow] = useState(false);
  // const [close, setClose] = useState(true);

  let a = window.location;
  console.log("url", a.hash);

  const HideSidebar = () => {
    if (sidebarShow) {
      document.getElementById("mainContent").classList.remove("contentShow");
      setShow(false);
      document.getElementById("sidebar").classList.remove("show");
      setSidebarShow(!sidebarShow);
    } else {
      document.getElementById("mainContent").classList.add("contentShow");
      setShow(true);
      document.getElementById("sidebar").classList.add("show");

      setSidebarShow(!sidebarShow);
    }
  };
  // const ShowSidebar = ()=>{
  //   document.getElementById('sidebar').classList.add('side')
  // }
  // const hideSidebar =()=>{
  //   document.getElementById('sidebar').classList.remove('side')
  // }
  console.log("option",menuList);
  return (
    <div
      className="sidebar shadow py-3"
      id="sidebar"
      onMouseOver={() => {
        if (show) {
          document
            .getElementById("mainContent")
            .classList.remove("contentShow");
          // setShow(false);
          document.getElementById("sidebar").classList.remove("show");
          setshowSmall(true);
        }
      }}
      // onMouseLeave={}
      onMouseLeave={() => {
        if (show) {
          setshowSmall(false);
          // setShowContent1(false)
          // setShowContent(false)
          document.getElementById("mainContent").classList.add("contentShow");
          document.getElementById("sidebar").classList.add("show");
        }
      }}
      // onMouseEnter={() => {
      //   if (show) {
      //     setshowSmall(true);
      //   }
      // }}
    >
      <div className="sidebarHeader ">
        <div className="w-100 sidebarTitle">
          <div className="row mx-0 gy-2 text-center">
            <div className="col-md-12 px-0 position-relative">
              <Link to="" className="sidebarLogo m-auto">
                <img
                  src={"./assets/logo.png"}
                  alt="react logo"
                  className="sidebarLogoImg img-fluid"
                />
              </Link>

              <div
                onClick={HideSidebar}
                to=""
                className="siidebarMenu"
                style={{ cursor: "pointer" }}
                // onClick={HideSidebar}
              >
                <img
                  src={"./assets/menuYellow.svg"}
                  alt=""
                  className="siidebarMenuImg"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="profileTypeName">Hotel International</div>
            </div>

            <div className="col-md-12">
              <div className="profilestatus">
                <div className="profileStatusType d-inline-block align-items-center">
                  online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebarMenu me-3">
        {menuList.map((item) => {
          return (
            <Accordion
              show={show}
              data={item}
              option={option}
              setOption={setOption}
              showSmall={showSmall}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
