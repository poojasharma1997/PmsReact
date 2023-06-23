import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Header from "../../../CommonComponents/Header";
import { Col, Row, Tabs } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "react-calendar/dist/Calendar.css";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
// import itemImg1 from "./assets/room.svg";
// import itemImg2 from "./assets/checkout.svg";
// import itemImg3 from "./assets/revenue.svg";
// import itemImg4 from "./assets/booking.svg";
// import itemImg5 from "./assets/vacancy.svg";
// import itemImg6 from "./assets/total.svg";
// import train from "./assets/train.svg";
// import wifi from "./assets/wifi.svg";
// import car from "./assets/car.svg";
// import smoking from "./assets/smoking.svg";
// import glass from "./assets/glass.svg";
// import roomImg from "../../src/assets/roomimg.jpg"
// import Table from 'react-bootstrap/Table';
// import leftArrow from "../../src/assets/arrowLeftyellow.svg";
// import rightArrow from "../../src/assets/arrowLeftyellow.svg"
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import Calendar from "react-calendar";
// import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import moment from "react-moment";
// import python from '../assets/python.svg';
// import hostelWorld from '../assets/hostelWorldLogo.png';
// import pay from '../assets/pay1.png';
// import menu from '../assets/menu.png';
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { AddData, AddEvent, EditEvent } from "../../../Redux/Action";
import Calender from "./Calender";
import RoomMove from "./Modal/RoomMove";
import AmendeyStay from "./Modal/AmendeyStay";
import SetMessage from "./Modal/SetMessage";
import CancelBooking from "./Modal/CancelBooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formControlLabelclassNamees } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function Dashboard(props) {
  // const {schedulerData} = props
  const [dates, setDates] = useState(new Date());

  const [roommove, setRoomMove] = useState("");
  const [amendy, setAmendy] = useState(false);
  const [tabtype, settabtype] = useState("general");
  const [cancelbooking, setCancelBooking] = useState(false);
  const [message, setMessage] = useState(false);
  const[year,setYear]=useState(false)
  const [rooms, setrooms] = useState([101, 102, 103, 104, 105, 106]);
  const [dorms, setdorms] = useState([
    "D1u",
    "D2u",
    "D3u",
    "D4u",
    "D5u",
    "D6u",
  ]);
  const [open, setOpen] = useState(false);
  const [modalopen, setModalOpen] = useState(false);
  const [roomdetail, setRoomDetail] = useState([]);
  // const[hidden,setHidden] = useState("")
  const [event, setEvent] = useState({
    time: { start: "", end: "" },
    room: "",
    name: "",
    width: 130,
    position: { x: 5, y: 5 },
  });
  const [show, setShow] = useState(false);
  const [calender, setCalender] = useState(false);
  const [showCal, setShowCal] = useState(7);
  const [eventName, setEventName] = useState();
  const [modal, setModal] = useState(false);
  const [show1, setShow1] = React.useState(false);
  const { dataItem, eventItems } = useSelector((state) => state);

  let date = new Date();
  date.setDate(date.getDate()); // tomorrow
  const minDateValue = date.toISOString();
  const handleModal = () => {
    setModal(true);
  };
  const handleShow = () => {
    // console.log('handleShow');
    setOpen(true);
  };
  const handleClose = () => {
    // console.log('handleClose');
    setOpen(false);
  };
  const handleClose1 = () => {
    setShow1(false);
  };

  let days = [];
  for (let i = 1; i <= showCal; i++) {
    days.push(i);
  }

  const handleEventAddingOpen = (time, room, e) => {
    e.preventDefault();
    if (new Date(time).getDate() >= new Date().getDate()) {
      setEvent({
        id: Math.floor(Math.random() * 10000),
        time: { start: time, end: time },
        room: room,
        name: eventName,
        position: { x: 5, y: 5 },
        type: tabtype,
        condition: "Arrived",
      });
      setShow(true);
    } else {
      alert("enter valid date");
    }
    e.stopPropagation();
  };
  const handleEventEditingOpen = (events, e) => {
    console.log("edittt");
    setEvent({
      id: events.id,
      time: { start: events.time.start, end: events.time.end },
      room: events.room,
      name: events.name,
      position: events.position,
      type: tabtype,
      condition: events.condition,
    });
    setEventName(events.name);
    setShow(true);
    e.stopPropagation();
  };
  const handleModalOpen = (e, data) => {
    console.log("hii", data);
    setRoomDetail(data);
    setModalOpen(true);
    e.stopPropagation();
  };
  console.log(modalopen, "modalopen");
  const handleMoreOption = (e) => {
    e.stopPropagation();
    setShow1(true);
  };
  // console.log(eventName);

  useEffect(() => {
    const date1 = new Date(event.time.start);
    const date2 = new Date(event.time.end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log('disss', diffDays);
    setEvent((prev) => ({
      ...prev,
      width: (diffDays + 1) * 130 + diffDays * 2 * 5,
    }));
  }, [event.time.start, event.time.end]);

  // const [show2, setShow2] = useState(false);
  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  // const [show3, setShow3] = useState(false);
  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AddData(rooms));
  }, []);

  return (
    <>
      <div className="mainContent" id="mainContent">
        <Header></Header>
        <div
          className="section"
        
        >
          <ToastContainer position="bottom-left" autoClose={1000} />

          <div
            className="row justify-content-center"
          
          >
            <div className="col-12 pt-3 ">
              <div
                className="mainHeading px-3"
                
              >
                Dashboard
              </div>
              <div className="col-12 ">
                <div style={{ paddingBottom: "20px" }}>
                  <Row className="gy-3">
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg1">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/room.svg" alt=""></img>
                              {/* <img src={itemImg1}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg2">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/checkout.svg" alt=""></img>
                              {/* <img src={itemImg2}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg3">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/revenue.svg" alt=""></img>
                              {/* <img src={itemImg3}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg4">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/booking.svg" alt=""></img>
                              {/* <img src={itemImg4}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg5">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/vacancy.svg" alt=""></img>
                              {/* <img src={itemImg5}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} sm={6} lg={4}>
                      <div className="dashboardItemBox itemBg6">
                        <Row className="align-items-end h-100">
                          <Col>
                            <div className="itemCount">207</div>
                            <div className="itemHeading">Guest in Room</div>
                          </Col>
                          <Col md="auto">
                            <div className="itemImg">
                              <img src="./assets/total.svg" alt=""></img>
                              {/* <img src={itemImg6}></img> */}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="col-md-12">
                <div className="calendar">
                  <Row>
                    <Col md={12}>
                      <div className="calendarTab">
                        <Row>
                          <Col md={12}>
                            <Tabs
                              activeKey={tabtype}
                              onSelect={(k) => settabtype(k)}
                              defaultActiveKey="general"
                              id="uncontrolled-tab-example"
                              className="mb-3"
                            >
                              <Tab eventKey="general" title="general">
                                <div
                                  className="homeTab"
                                  style={{ padding: "0px 30px" }}
                                >
                                  <Row className="gy-4 ">
                                    <Col md={12}>
                                      <div className="stayView">
                                        <Row className="gy-2 align-items-center">
                                          <Col md={2}>
                                            <div className="calendarLabel">
                                              Stay View
                                            </div>
                                          </Col>
                                          <Col md={10}>
                                            <Form.Select
                                              aria-label="Default select example"
                                              className="shadow-none"
                                            >
                                              <option>Room View</option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                            </Form.Select>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Col>
                                    <Col md={12}>
                                      <div className="calendarDays">
                                        <Row className="gy-3">
                                          <Col md={3}>
                                            <div className="DaysFilter h-100">
                                              <ul className="daysFilterIttem d-flex h-100 align-items-center">
                                                <li className="daysFilterIttems">
                                                  <button
                                                    onClick={() => {
                                                      {
                                                        setShowCal(7);
                                                      }
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 7
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    7 Days
                                                  </button>
                                                </li>
                                                <li
                                                  className="daysFilterIttems"
                                                  role="presentation"
                                                >
                                                  <button
                                                    onClick={() => {
                                                      {
                                                        setShowCal(15);
                                                      }
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 15
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    15 Days
                                                  </button>
                                                </li>
                                                <li
                                                  className="daysFilterIttems"
                                                  role="presentation"
                                                >
                                                  <button
                                                    onClick={() => {
                                                      setShowCal(30);
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 30
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    30 Days
                                                  </button>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>
                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                All Room Type
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem value={10}>
                                                  Unassigned Room
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  List of Guest
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Cancellation
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Booking
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                Room Number
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem value={10}>
                                                  101
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  102
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  103
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <Col md={2} className="">
                                            <div className="pickModal">
                                              pick Date
                                              <div
                                                className="pickModalDate position-relative"
                                                onClick={() =>
                                                  setCalender(true)
                                                }
                                              > {`${dates.toDateString()}`}
                                              </div>
                                            </div>

                                            <Modal
                                              show={calender}
                                              onHide={() => setCalender(false)} 
                                            >
                                              <Modal.Header
                                                closeButton
                                                style={{
                                                  height: "126px",
                                                  display: "flex",
                                                  boxShadow:
                                                    "inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)",
                                                  alignItems: "center",
                                                  borderRadius: "0",
                                                  flexDirection: "row",
                                                  justifyContent: "center",
                                                  backgroundColor: "#fcb532",
                                                }}
                                              >
                                                <Modal.Title style={{marginLeft:'7px'}}>
                                                  <h6 onClick={()=>setYear(true)} style={{marginBottom:'7px',fontSize:'21px',color:'rgba(255, 255, 255, 0.54)',cursor:'pointer'}}>{`${dates.getFullYear()}`}</h6>

                                                <h4 style={{color:'white',fontSize:'40px',color: '#fff'}}> {`${dates.toLocaleDateString()}`}
                                                  </h4> 
                                                  </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                  <div className="calendar-container">
                                                  {year?  <Calendar
                                                    defaultView='year' 
                                                    selectRange={true}
                                                    onChange={setDates}
                                                    value={dates}
                                                    />: <Calendar
                                                      onChange={setDates}
                                                      value={dates}
                                                    />}
                                                  
                                                </div>
                                              </Modal.Body>
                                            </Modal>
                                          </Col>
                                          <Col
                                            md={1}
                                            className="align-items-center d-flex px-0"
                                          >
                                            <div className="dayMove d-flex">
                                              <button
                                                type="btn"
                                                className="datMoveBtn"
                                              >
                                                <img
                                                  src="./assets/arrowLeftyellow.svg"
                                                  alt=""
                                                ></img>
                                              </button>
                                              <span className="px-2">
                                                Today
                                              </span>
                                              <button
                                                type="btn"
                                                className="datMoveBtn"
                                              >
                                                <img
                                                  src="./assets/arrowLeftyellow.svg"
                                                  alt=""
                                                ></img>
                                              </button>
                                            </div>
                                          </Col>

                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                More
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem></MenuItem>
                                                <MenuItem value={10}>
                                                  Unassigned Room
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  List of Guest
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Cancellation
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Booking
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <div
                                            style={{
                                              overflow: "auto",
                                              position: "relative",
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                width: "100%",
                                              }}
                                            >
                                              {/* Python */}
                                              <div
                                                className="RoomList"
                                                style={{
                                                  width: "20%",
                                                  backgroundColor:
                                                    " rgb(221, 221, 221) ",
                                                }}
                                              >
                                                <div className="heading">
                                                  Room
                                                </div>
                                                <ul className="listItem">
                                                  <li
                                                    className="listTitle"
                                                    style={{
                                                      height: "45px",
                                                      padding: "7px 10px",
                                                    }}
                                                  >
                                                    premium python
                                                  </li>
                                                  {rooms.map((item) => {
                                                    return (
                                                      <li className="roomListAll">
                                                        <ul
                                                          className="roomList"
                                                          variant="primary"
                                                          style={{
                                                            justifyContent:
                                                              "center",
                                                            alignItems:
                                                              "center",
                                                          }}
                                                          onClick={() =>
                                                            handleShow()
                                                          }
                                                        >
                                                          <li
                                                            className="roomListNumber"
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            {item}
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/train.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/wifi.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/car.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/smoking.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/glass.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                        </ul>
                                                        {/* 
                                                                                                            <Modal show={show} onHide={handleClose}>
                                                                                                                <Modal.Header closeButton>
                                                                                                                    <Modal.Title>Modal heading</Modal.Title>
                                                                                                                </Modal.Header>
                                                                                                                <Modal.Body>
                                                                                                                </Modal.Body>
                                                                                                            </Modal> */}
                                                      </li>
                                                    );
                                                  })}
                                                </ul>
                                              </div>
                                              {/*  */}
                                              <div
                                                style={{
                                                  width: "80%",
                                                }}
                                              >
                                                <Calender
                                                  tabtype={tabtype}
                                                  handleEventAddingOpen={
                                                    handleEventAddingOpen
                                                  }
                                                  handleEventEditingOpen={
                                                    handleEventEditingOpen
                                                  }
                                                  handleModalOpen={
                                                    handleModalOpen
                                                  }
                                                  setModalOpen={setModalOpen}
                                                  handleMoreOption={
                                                    handleMoreOption
                                                  }
                                                  showCal={showCal}
                                                />
                                              </div>
                                              {/* footer */}
                                            </div>

                                            <div
                                              // size="sm"
                                              style={{
                                                display: "flex",
                                                height: "45px",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="heading"
                                                style={{
                                                  borderBottom:
                                                    "2px solid white",
                                                  width: "20%",
                                                }}
                                              >
                                                <h6
                                                  style={{
                                                    textAlign: "center",
                                                    marginTop: "9px",
                                                  }}
                                                >
                                                  Room Availibility
                                                </h6>
                                              </div>

                                              <div
                                                style={{
                                                  display: "flex",
                                                  width: "80%",
                                                }}
                                              >
                                                {days.map((item) => {
                                                  return (
                                                    <div
                                                      style={{
                                                        justifyContent:
                                                          "center",
                                                        minWidth: "143px",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        borderBottom:
                                                          "2px solid lightgray",
                                                      }}
                                                    >
                                                      {item}
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            </div>
                                            <div
                                              // size="sm"
                                              style={{
                                                width: "100%",
                                                display: "flex",
                                                height: "45px",
                                              }}
                                            >
                                              <div
                                                className="heading"
                                                style={{
                                                  borderBottom:
                                                    "2px solid white",
                                                  width: "20%",
                                                }}
                                              >
                                                <h6
                                                  style={{
                                                    textAlign: "center",
                                                    marginTop: "9px",
                                                  }}
                                                >
                                                  Occupancy
                                                </h6>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  width: "80%",
                                                }}
                                              >
                                                {days.map((item) => {
                                                  return (
                                                    <div
                                                      style={{
                                                        justifyContent:
                                                          "center",
                                                        minWidth: "143px",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        borderBottom:
                                                          "2px solid lightgray",
                                                      }}
                                                    >
                                                      {item}
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            </div>

                                            <div
                                              className="position-sticky"
                                              style={{ left: "-21%" }}
                                            >
                                              <div
                                                style={{
                                                  width: "100%",
                                                  display: "flex",
                                                  height: "45px",
                                                }}
                                              >
                                                <div
                                                  className="heading"
                                                  style={{
                                                    width: "20%",
                                                    borderBottom:
                                                      "2px solid white",
                                                  }}
                                                >
                                                  <h6
                                                    style={{
                                                      textAlign: "center",
                                                      marginTop: "9px",
                                                    }}
                                                  >
                                                    Room status
                                                  </h6>
                                                </div>

                                                <div
                                                  style={{
                                                    display: "flex",
                                                    justifyContent:
                                                      "space-around",
                                                    width: "80%",
                                                    borderBottom:
                                                      "2px solid lightgray",
                                                  }}
                                                >
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            "rgba(251, 140, 0, 0.38)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* </div> */}
                                                      {/* <div style={{background:"red"}}> */}
                                                      Arrived
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(3, 169, 244)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Checkout
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            "rgb(236, 64, 122)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Day Out
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div colSpan={2}>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(0, 150, 136)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Confrmed Reservation
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div colSpan={2}>
                                                    {" "}
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(4, 33, 65)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Maintanance Block
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Row>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </Tab>
                              <Tab eventKey="dormitory" title="dormitory">
                                <div className="homeTab">
                                  <Row className="gy-4">
                                    <Col md={12}>
                                      <div className="stayView">
                                        <Row className="gy-2 align-items-center">
                                          <Col md={2}>
                                            <div className="calendarLabel">
                                              Stay View
                                            </div>
                                          </Col>
                                          <Col md={10}>
                                            <Form.Select
                                              aria-label="Default select example"
                                              className="shadow-none"
                                            >
                                              <option>Room View</option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                            </Form.Select>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Col>
                                    <Col md={12}>
                                      <div className="calendarDays">
                                        <Row className="gy-3">
                                          <Col md={3}>
                                            <div className="DaysFilter h-100">
                                              <ul className="daysFilterIttem d-flex h-100 align-items-center">
                                                <li className="daysFilterIttems">
                                                  <button
                                                    onClick={() => {
                                                      {
                                                        setShowCal(7);
                                                      }
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 7
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    7 Days
                                                  </button>
                                                </li>
                                                <li
                                                  className="daysFilterIttems"
                                                  role="presentation"
                                                >
                                                  <button
                                                    onClick={() => {
                                                      {
                                                        setShowCal(15);
                                                      }
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 15
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    15 Days
                                                  </button>
                                                </li>
                                                <li
                                                  className="daysFilterIttems"
                                                  role="presentation"
                                                >
                                                  <button
                                                    onClick={() => {
                                                      {
                                                        setShowCal(30);
                                                      }
                                                    }}
                                                    className={`daysFilterIttemlink ${
                                                      showCal == 30
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    type="button"
                                                  >
                                                    30 Days
                                                  </button>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>
                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                All Room Type
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem value={10}>
                                                  Unassigned Room
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  List of Guest
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Cancellation
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Booking
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                Pick Date
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem value={10}>
                                                  Unassigned Room
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  List of Guest
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Cancellation
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Booking
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <Col md={2} className="">
                                         
                                            <div className="pickModal">
                                              pick Date
                                              <div
                                                className="pickModalDate position-relative"
                                                onClick={() =>
                                                  setCalender(true)
                                                }
                                              > {`${dates.toDateString()}`}
                                              </div>
                                            </div>

                                            <Modal
                                              show={calender}
                                              onHide={() => setCalender(false)} 
                                            >
                                              <Modal.Header
                                                closeButton
                                                style={{
                                                  height: "126px",
                                                  display: "flex",
                                                  boxShadow:
                                                    "inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)",
                                                  alignItems: "center",
                                                  borderRadius: "0",
                                                  flexDirection: "row",
                                                  justifyContent: "center",
                                                  backgroundColor: "#fcb532",
                                                }}
                                              >
                                                <Modal.Title style={{marginLeft:'7px'}}>
                                                 <h6 onClick={()=>setYear(true)} style={{marginBottom:'7px',fontSize:'21px',color:'rgba(255, 255, 255, 0.54)',cursor:'pointer'}}>{`${dates.getFullYear()}`}</h6>

                                               <h4 style={{color:'white',fontSize:'40px',color: '#fff'}}> {`${dates.toLocaleDateString()}`}
                                                </h4> 
                                                </Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                                <div className="calendar-container">
                                                 {year?  <Calendar
                                                   defaultView='year' 
                                                   selectRange={true}
                                                   onChange={setDates}
                                                   value={dates}
                                                  />: <Calendar
                                                    onChange={setDates}
                                                    value={dates}
                                                  />}
                                                 
                                                </div>
                                              </Modal.Body>
                                            </Modal>
                                          </Col>

                                        
                                        
                                          <Col
                                            md={1}
                                            className="align-items-center d-flex px-0"
                                          >
                                            <div className="dayMove d-flex">
                                              <button
                                                type="btn"
                                                className="datMoveBtn"
                                              >
                                                <img
                                                  src="./assets/arrowLeftyellow.svg"
                                                  alt=""
                                                ></img>
                                              </button>
                                              <span className="px-2">
                                                Today
                                              </span>
                                              <button
                                                type="btn"
                                                className="datMoveBtn"
                                              >
                                                <img
                                                  src="./assets/arrowLeftyellow.svg"
                                                  alt=""
                                                ></img>
                                              </button>
                                            </div>
                                          </Col>

                                          <Col md={2}>
                                            <FormControl
                                              variant="filled"
                                              sx={{ m: 1, minWidth: 120 }}
                                            >
                                              <InputLabel id="demo-simple-select-filled-label">
                                                More
                                              </InputLabel>
                                              <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={age}
                                                onChange={handleChange}
                                              >
                                                <MenuItem></MenuItem>
                                                <MenuItem value={10}>
                                                  Unassigned Room
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  List of Guest
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Cancellation
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                  View Booking
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Col>
                                          <div
                                            style={{
                                              overflow: "auto",
                                              position: "relative",
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                width: "100%",
                                              }}
                                            >
                                              {/* Python */}
                                              <div
                                                className="RoomList"
                                                style={{
                                                  width: "20%",
                                                  backgroundColor:
                                                    " rgb(221, 221, 221) ",
                                                }}
                                              >
                                                <div className="heading">
                                                  Dorm
                                                </div>
                                                <ul className="listItem">
                                                  <li
                                                    className="listTitle"
                                                    style={{
                                                      height: "45px",
                                                      padding: "7px 10px",
                                                    }}
                                                  >
                                                    6 Dorms
                                                  </li>
                                                  {dorms.map((item) => {
                                                    return (
                                                      <li className="roomListAll">
                                                        <ul
                                                          className="roomList"
                                                          variant="primary"
                                                          style={{
                                                            justifyContent:
                                                              "center",
                                                            alignItems:
                                                              "center",
                                                          }}
                                                          onClick={() =>
                                                            handleShow()
                                                          }
                                                        >
                                                          <li
                                                            className="roomListNumber"
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            {item}
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/train.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/wifi.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/car.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/smoking.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                          <li
                                                            style={{
                                                              marginRight:
                                                                "4px",
                                                            }}
                                                          >
                                                            <div className="roomListImg">
                                                              <img
                                                                src="./assets/glass.svg"
                                                                alt=""
                                                              ></img>
                                                            </div>
                                                          </li>
                                                        </ul>
                                                        {/* 
                                                                                                            <Modal show={show} onHide={handleClose}>
                                                                                                                <Modal.Header closeButton>
                                                                                                                    <Modal.Title>Modal heading</Modal.Title>
                                                                                                                </Modal.Header>
                                                                                                                <Modal.Body>
                                                                                                                </Modal.Body>
                                                                                                            </Modal> */}
                                                      </li>
                                                    );
                                                  })}
                                                </ul>
                                              </div>
                                              {/*  */}
                                              <div style={{ width: "80%" }}>
                                                <Calender
                                                  tabtype={tabtype}
                                                  handleEventAddingOpen={
                                                    handleEventAddingOpen
                                                  }
                                                  handleEventEditingOpen={
                                                    handleEventEditingOpen
                                                  }
                                                  handleModalOpen={
                                                    handleModalOpen
                                                  }
                                                  setModalOpen={setModalOpen}
                                                  handleMoreOption={
                                                    handleMoreOption
                                                  }
                                                  showCal={showCal}
                                                />
                                              </div>
                                              {/* footer */}
                                            </div>

                                            <div
                                              // size="sm"
                                              style={{
                                                width: "100%",
                                                display: "flex",
                                                height: "45px",
                                              }}
                                            >
                                              <div
                                                className="heading"
                                                style={{
                                                  borderBottom:
                                                    "2px solid white",
                                                  width: "20%",
                                                }}
                                              >
                                                <h6
                                                  style={{
                                                    textAlign: "center",
                                                    marginTop: "9px",
                                                  }}
                                                >
                                                  Dorm Availibility
                                                </h6>
                                              </div>

                                              <div
                                                style={{
                                                  display: "flex",
                                                  borderBottom:
                                                    "2px solid lightgray",
                                                  width: "80%",
                                                }}
                                              >
                                                {days.map((item) => {
                                                  return (
                                                    <div
                                                      style={{
                                                        minWidth: "143px",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        borderBottom:
                                                          "2px solid lightgray",
                                                      }}
                                                    >
                                                      {item}
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            </div>
                                            <div
                                              // size="sm"
                                              style={{
                                                width: "100%",
                                                display: "flex",
                                                height: "45px",
                                              }}
                                            >
                                              <div
                                                className="heading"
                                                style={{
                                                  borderBottom:
                                                    "2px solid white",
                                                  width: "20%",
                                                }}
                                              >
                                                <h6
                                                  style={{
                                                    textAlign: "center",
                                                    marginTop: "9px",
                                                  }}
                                                >
                                                  Occupancy
                                                </h6>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  width: "80%",
                                                }}
                                              >
                                                {days.map((item) => {
                                                  return (
                                                    <div
                                                      style={{
                                                        minWidth: "143px",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        borderBottom:
                                                          "2px solid lightgray",
                                                      }}
                                                    >
                                                      {item}
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            </div>
                                            <div
                                              className="position-sticky"
                                              style={{ left: "-21%" }}
                                            >
                                              <div
                                                style={{
                                                  width: "100%",
                                                  display: "flex",
                                                  height: "45px",
                                                }}
                                              >
                                                <div
                                                  className="heading"
                                                  style={{
                                                    width: "20%",
                                                    borderBottom:
                                                      "2px solid white",
                                                  }}
                                                >
                                                  <h6
                                                    style={{
                                                      textAlign: "center",
                                                      marginTop: "9px",
                                                    }}
                                                  >
                                                    Dorm status
                                                  </h6>
                                                </div>

                                                <div
                                                  style={{
                                                    display: "flex",
                                                    justifyContent:
                                                      "space-around",
                                                    width: "80%",
                                                    borderBottom:
                                                      "2px solid lightgray",
                                                  }}
                                                >
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            "rgba(251, 140, 0, 0.38)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* </div> */}
                                                      {/* <div style={{background:"red"}}> */}
                                                      Arrived
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(3, 169, 244)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Checkout
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            "rgb(236, 64, 122)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Day Out
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div colSpan={2}>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(0, 150, 136)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Confrmed Reservation
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div colSpan={2}>
                                                    {" "}
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: "10px",
                                                          height: "10px",
                                                          backgroundColor:
                                                            " rgb(4, 33, 65)",
                                                          margin: "5px",
                                                        }}
                                                      ></div>
                                                      {/* <div style={{background:"red"}}> */}
                                                      Maintanance Block
                                                      {/* </div> */}
                                                    </div>
                                                  </div>
                                                  <div />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Row>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </Tab>
                            </Tabs>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal centered show={modalopen} onHide={() => setModalOpen(false)}>
          <Modal.Header>
            <Modal.Title className="modalTitle">Dorm Details</Modal.Title>
          </Modal.Header>
          {roomdetail.map((roomdetail) => {
            return (
              <Modal.Body className="modayBodyDetail">
                <Row className="gy-3">
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                        <div
                          onClick={() => handleClose()}
                          className="modalDetailsRight"
                        >
                          Room No:
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="modalDetailLeft">{roomdetail.room}</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                        <div className="modalDetailsRight">Room Type:</div>
                      </Col>
                      <Col md={6}>
                        <div className="modalDetailLeft">Premium Python</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                        <div className="modalDetailsRight">Guest Name :</div>
                      </Col>
                      <Col md={6}>
                        <div className="modalDetailLeft">{roomdetail.name}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Modal.Body>
            );
          })}
        </Modal>

        <Modal
          size="lg"
          centered
          show={open}
          onHide={() => handleClose()}
          data-bs-backdrop="static"
        >
          <Modal.Header>
            <Modal.Title className="modalTitle">
              {" "}
              {tabtype == "general" ? "Room Details" : "Dorm Details"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modayBodyDetail">
            <Row className="gy-3">
              <Col md={5}>
                <div className="roomDetailsImg">
                  <img src="./assets/roomimg.jpg"></img>
                </div>
                <div className="premiumPython">
                  <div className="premiumHedaing">Premium Python</div>
                  <ul className="premiumPythonItem">
                    <li>
                      <div className="premiumPythonItemImg">
                        <img src="./assets/train.svg"></img>
                      </div>
                    </li>
                    <li>
                      <div className="premiumPythonItemImg">
                        <img src="./assets/wifi.svg"></img>
                      </div>
                    </li>
                    <li>
                      <div className="premiumPythonItemImg">
                        <img src="./assets/car.svg"></img>
                      </div>
                    </li>
                    <li>
                      <div className="premiumPythonItemImg">
                        <img src="./assets/smoking.svg"></img>
                      </div>
                    </li>
                    <li>
                      <div className="premiumPythonItemImg">
                        <img src="./assets/glass.svg"></img>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={7}>
                <div className="roomdeatils">
                  <ul className="roomdeatilsItem">
                    <li className="roomdeatilsItems">
                      <ul className="roomdeatilsItemslist">
                        <li>No Plan</li>
                        <li>Peak Season</li>
                        <li>Frontdesk</li>
                        <li>Single(Occupancy)</li>
                      </ul>
                    </li>
                    <li className="roomdeatilsItems">
                      <span>Room ID:</span> #STV36987
                    </li>
                    <li className="roomdeatilsItems">
                      <span>Base Room Rent: </span>₹ 2000.00
                    </li>
                    <li className="roomdeatilsItems">
                      <span>Weekend Room Rent:</span> ₹ 2000.00
                    </li>
                    <li className="roomdeatilsItems">
                      <span>Seasonal Room Rent: </span> ₹ 2000.00
                    </li>
                    <li className="roomdeatilsItems">
                      <span>Added to OTA(s): </span> No
                    </li>
                    <li>
                      <span>Housekeeping Status:</span> Clean
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button className="closeButton" onClick={() => handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          size="lg"
          centered
          show={show}
          onHide={() => setShow(false)}
          data-bs-backdrop="static"
        >
          <Modal.Header>
            <Modal.Title className="modalTitle">Add Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modayBodyDetail">
            <Formik
              onSubmit={console.log}
              initialValues={{
                eventName: "",
              }}
            >
              <Form>
                <Row>
                  <Col md={!2}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        value={eventName}
                        onChange={(e) => {
                          setEventName(e.target.value);
                          setEvent((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }));
                        }}
                        className="shadow-none"
                        placeholder="Enter Title"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Control
                            type="date"
                            className="shadow-none"
                            value={`${new Date(
                              event.time.start
                            ).getFullYear()}-${
                              (new Date(event.time.start).getMonth() < 9
                                ? "0"
                                : "") +
                              (new Date(event.time.start).getMonth() + 1)
                            }-${
                              (new Date(event.time.start).getDate() < 9
                                ? "0"
                                : "") + new Date(event.time.start).getDate()
                            }`}
                            onChange={(e) => {
                              if (
                                new Date(e.target.value).getDate() >=
                                  new Date().getDate() &&
                                new Date(event.time.end).getDate() >=
                                  new Date(e.target.value).getDate()
                              ) {
                                setEvent((prev) => ({
                                  ...prev,
                                  time: {
                                    ...prev.time,
                                    start: e.target.value,
                                  },
                                }));
                              } else {
                                alert("please select valid date");
                              }
                            }}
                            placeholder=""
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Control
                            type="date"
                            value={`${new Date(event.time.end).getFullYear()}-${
                              (new Date(event.time.end).getMonth() < 9
                                ? "0"
                                : "") +
                              (new Date(event.time.end).getMonth() + 1)
                            }-${
                              (new Date(event.time.end).getDate() < 9
                                ? "0"
                                : "") + new Date(event.time.end).getDate()
                            }`}
                            onChange={(e) => {
                              if (
                                new Date(event.time.start).getDate() <=
                                new Date(e.target.value).getDate()
                              ) {
                                setEvent((prev) => ({
                                  ...prev,
                                  time: {
                                    ...prev.time,
                                    end: e.target.value,
                                  },
                                }));
                              } else {
                                alert("enter valid date");
                              }
                            }}
                            className="shadow-none"
                            placeholder=""
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                        <Button
                          onClick={() => setShow(false)}
                          variant="primary"
                          type="submit"
                          className="cancelButton"
                        >
                          Cancel
                        </Button>
                      </Col>
                      <Col md={6}>
                        <Button
                          onClick={() => {
                            if (!!event.id) {
                              dispatch(EditEvent(event));
                            } else {
                              let old = eventItems;
                              old.push(event);
                              dispatch(AddEvent(old));
                            }

                            setShow(false);
                          }}
                          variant="primary"
                          type="submit"
                          className="confirmButton"
                        >
                          confirm
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Modal.Body>
        </Modal>

        <Modal
          centered
          show={show1}
          onHide={handleClose1}
          data-bs-backdrop="static"
        >
          <Modal.Body className="modayBodyDetail ">
            <Row className="width-50">
              <Col md={12}>
                <ul className="menuList">
                  <li className="menuListItem">
                    <div
                      className="menuListLink pointer"
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div className="menuListLink" style={{ cursor: "pointer" }}>
                      Edit Transaction
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div
                      className="menuListLink"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setRoomMove(true);
                        handleClose1();
                      }}
                    >
                      Room Move
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div
                      style={{ cursor: "pointer" }}
                      className="menuListLink"
                      onClick={() => {
                        setAmendy(true);
                        handleClose1();
                      }}
                    >
                      Amend Stay
                    </div>
                  </li>

                  <li className="menuListItem">
                    <div
                      style={{ cursor: "pointer" }}
                      className="menuListLink"
                      onClick={() => toast.success("Check in complete")}
                    >
                      Check-in
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div
                      style={{ cursor: "pointer" }}
                      className="menuListLink"
                      onClick={() => toast.success("Check out complete")}
                    >
                      Check-out
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div
                      style={{ cursor: "pointer" }}
                      className="menuListLink"
                      onClick={() => {
                        setCancelBooking(true);
                        handleClose1();
                      }}
                    >
                      Cancel Booking
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div
                      style={{ cursor: "pointer" }}
                      className="menuListLink"
                      onClick={() => {
                        setMessage(true);
                        handleClose1();
                      }}
                    >
                      Set Masseages
                    </div>
                  </li>
                  <li className="menuListItem">
                    <div style={{ cursor: "pointer" }} className="menuListLink">
                      Set Task
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <RoomMove roommove={roommove} setRoomMove={setRoomMove} />
        <AmendeyStay amendy={amendy} setAmendy={setAmendy} />
        <CancelBooking
          cancelbooking={cancelbooking}
          setCancelBooking={setCancelBooking}
        />
        {message?   <Modal scrollable
                                                      size="md"
                                                      centered
                                                      show={message}
                                                      onHide={() =>
                                                      setMessage(false)
                                                      }
                                                      data-bs-backdrop="static"
                                                    >
                                                      <Modal.Header>
                                                        <Modal.Title className="modalTitle">
                                                          Set Message
                                                        </Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body className="modayBodyDetail">
                                                          <Form>
                                                            <Row className="gy-5">
                                                              <Col md={12}>
                                                                  <Box
                                                                      component="form"
                                                                      sx={{
                                                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                      }}
                                                                      noValidate
                                                                      autoComplete="off"
                                                                    >
                                                                      <TextField
                                                                        label="From"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                              </Col>
                                                              <Col md={12}>
                                                                  <Box
                                                                      component="form"
                                                                      sx={{
                                                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                      }}
                                                                      noValidate
                                                                      autoComplete="off"
                                                                    >
                                                                      <TextField
                                                                        label="To"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                              </Col>
                                                              <Col md={12}>
                                                                  <Box
                                                                      component="form"
                                                                      sx={{
                                                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                      }}
                                                                      noValidate
                                                                      autoComplete="off"
                                                                    >
                                                                      <TextField
                                                                        label="Message"
                                                                        multiline
                                                                        rows={2}
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                              </Col>
                                                            </Row>
                                                          </Form>
                                                      </Modal.Body>
                                                      <Modal.Footer className="border-0">
                                                      <Button type="submit"
                                                          className="closeButton"
                                                        >
                                                          send
                                                        </Button>
                                                      </Modal.Footer>
                                                    </Modal>:''}
     
        {/* <SetMessage message={message} setMessage={setMessage} /> */}

        {/* <li className="roomListAll">
                                                    <ul
                                                      className="roomList"
                                                      variant="primary"
                                                      onClick={() =>
                                                        handleShow()
                                                      }
                                                    >
                                                      <li className="roomListNumber">
                                                        102
                                                      </li>
                                                      <li>
                                                        <div className="roomListImg">
                                                          <img
                                                            src="./assets/train.svg"
                                                            alt=""
                                                          ></img>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="roomListImg">
                                                          <img
                                                            src="./assets/wifi.svg"
                                                            alt=""
                                                          ></img>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="roomListImg">
                                                          <img
                                                            src="./assets/car.svg"
                                                            alt=""
                                                          ></img>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="roomListImg">
                                                          <img
                                                            src="./assets/smoking.svg"
                                                            alt=""
                                                          ></img>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="roomListImg">
                                                          <img
                                                            src="./assets/glass.svg"
                                                            alt=""
                                                          ></img>
                                                        </div>
                                                      </li>
                                                    </ul>
                                                    </li> */}
        {/* 
                                                                                                            <Modal show={show} onHide={handleClose}>
                                                                                                                <Modal.Header closeButton>
                                                                                                                    <Modal.Title>Modal heading</Modal.Title>
                                                                                                                </Modal.Header>
                                                                                                                <Modal.Body>
                                                                                                                </Modal.Body>
                                                                                                            </Modal> */}
      </div>
    </>
  );
}

export default Dashboard;
