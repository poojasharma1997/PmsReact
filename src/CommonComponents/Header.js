import React, { useState } from "react";
import "./header.css";
// import Sidebar from '../CommonComponents/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Col, Row } from "react-bootstrap";
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import {Badge as badge} from '@mui/material/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuList from "./menuOption";
import Accordion from "./Accordion";


  

function Header() {
  const[option,setOption] = useState({
    menu:'',
    submenu:'',
    supersubmenu:''
  })
  const [sidebarShow, setSidebarShow] = useState(false);

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const[anchorE2,setAnchorE2] = useState('')
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickprofile = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = ()=>{
    setAnchorE2(null)
  }

  /*--------------offcanvas----------- */
  const [show, setShow] = useState(false);

  const canvasClose = () => setShow(false);
  const canvasShow = () => setShow(true);
  return (
    <div className="header py-2 px-3">
      <div className="row align-items-center d-flex">
        <div className="col">
          <div className="headerMenu" onClick={canvasShow}>
              <div className="siidebarMenu position-relative">
                  <img
                      src={"./assets/menuYellow.svg"}
                      alt=""
                      className="siidebarMenuImg"
                    />
              </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="row d-flex align-items-center  gy-2">
            <div className="col-auto">
              <Link to="" className="posButton d-flex align-items-center ">
                <span className="pe-2 p d-flex align-items-center justify-content-center">
                  <img
                    src={"./assets/menu.svg"}
                    alt=""
                    className="img-fluid postButtonImg"
                  />
                </span>
                <div className="posButtonText">Pos</div>
              </Link>
            </div>
            <div className="col-auto searchBar">
              <Form>
                <Form.Group
                  className=" position-relative"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="shadow-none rounded-5 border-0"
                    type="email"
                    placeholder="search"
                  />
                  <span className="searchbarIcon">
                    <img
                      src={"./assets/search.svg"}
                      alt=""
                      className="img-fluid postButtonImg"
                    />
                  </span>
                </Form.Group>
              </Form>
            </div>
            <div className="col-auto separate position-relative"></div>
            <div className="col-auto ps-0">
              <Link to="" className="notification position-relative" aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                <img
                  src={"./assets/not.svg"}
                  alt=""
                  className="img-fluid notificationImg"
                ></img>
                <Badge bg="secondary" className="rounded-circle">
                  2
                </Badge>
              </Link>
              <Menu 
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}

                className="notificationMenu"
              >
                <MenuItem className="notificationMenuItem">
                  <Row>
                    <Col auto>
                      <div className="AvatarImg">
                        <img src={"./assets/Profile.svg"} alt="img" className="w-100 h-100 rounded-circle"></img>
                      </div>
                    </Col>
                    <Col className="px-0 xs-auto">
                      <div className="AvatarText">
                        <div className="AvatarPara pe-2">
                          Ut a lorem eu odio cursus laoreet.
                        </div>
                        <div className="AvatarDate">
                          Apr 22, 2022
                        </div>
                      </div>
                    </Col>
                  </Row>
                </MenuItem>
                <MenuItem className="notificationMenuItem">
                  <Row>
                    <Col xs={"auto"}>
                      <div className="AvatarImg">
                        <img src={"./assets/about.svg"} alt="img" className="w-100 h-100 rounded-circle"></img>
                      </div>
                    </Col>
                    <Col className="px-0 xs-auto">
                      <div className="AvatarText">
                        <div className="AvatarPara pe-2">
                          Ut a lorem eu odio cursus laoreet.
                        </div>
                        <div className="AvatarDate">
                          Apr 22, 2022
                        </div>
                      </div>
                    </Col>
                  </Row>
                </MenuItem>
                <MenuItem className="notificationMenuItem">
                  <Row>
                    <Col xs={"auto"}>
                      <div className="AvatarImg">
                        <img src={"./assets/correct.svg"} alt="img" className="w-100 h-100 rounded-circle"></img>
                      </div>
                    </Col>
                    <Col className="px-0 xs-auto">
                      <div className="AvatarText">
                        <div className="AvatarPara pe-2">
                          Ut a lorem eu odio cursus laoreet.
                        </div>
                        <div className="AvatarDate">
                          Apr 22, 2022
                        </div>
                      </div>
                    </Col>
                  </Row>
                </MenuItem>
                <MenuItem className="notificationMenuItem">
                  <Row>
                    <Col xs={"auto"}>
                      <div className="AvatarImg">
                        <img src={"./assets/warning.svg"} alt="img" className="w-100 h-100 rounded-circle"></img>
                      </div>
                    </Col>
                    <Col className="px-0 xs-auto">
                      <div className="AvatarText">
                        <div className="AvatarPara pe-2">
                          Ut a lorem eu odio cursus laoreet.
                        </div>
                        <div className="AvatarDate">
                          Apr 22, 2022
                        </div>
                      </div>
                    </Col>
                  </Row>
                </MenuItem>
                <MenuItem className="notificationMenuItem">
                  <Row>
                    <Col xs={"auto"}>
                      <div className="AvatarImg">
                        <img src={"./assets/minus.svg"} alt="img" className="w-100 h-100 rounded-circle"></img>
                      </div>
                    </Col>
                    <Col className="px-0 xs-auto">
                      <div className="AvatarText border-0">
                        <div className="AvatarPara pe-2">
                          Ut a lorem eu odio cursus laoreet.
                        </div>
                        <div className="AvatarDate">
                          Apr 22, 2022
                        </div>
                      </div>
                    </Col>
                  </Row>
                </MenuItem>
              </Menu>
            </div>
            <div className="col-auto ps-0">
              <div className="user position-relative"  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                 >
                <img src={"./assets/userprofile.svg"}  onClick={handleClickprofile} alt="" className="img-fluid userImg"></img>
              </div>
               <Menu 
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorE2={anchorE2}
                open={open2}
                onClose={()=>setAnchorE2('')}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem className="userList">
                  My Profile
                </MenuItem>
                <MenuItem className="userList">
                  My Calendar
                </MenuItem>
                <MenuItem className="userList">
                  My Inbox <span className="ms-2 badgeMenu">4</span>
                </MenuItem>
                <Divider></Divider>
                <MenuItem className="userList">
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu> 
            </div>
          </div>
        </div>


      

        <Offcanvas show={show} onHide={canvasClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>
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
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="ps-0">
            <div className="sidebarMenu">
              {menuList.map((item) => {
                return <Accordion data={item}  option={option} setOption={setOption}/>;
              })}
            </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </div>
      );
}

export default Header;
