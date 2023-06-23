import React from "react";
import "../FormStyle.css";
import "./setuphotel.css";
import Header from "../../CommonComponents/Header";

import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, FormGroup, Row } from "react-bootstrap";
// import fileUpload from "..//assets/uploadFile.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import FormControl from '@mui/joy/FormControl';
import Radio from "@mui/joy/Radio";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { FormControlLabel, Checkbox } from "@mui/material";
import Calendar from "react-calendar";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import MUIDataTable from 'mui-datatables'


import Preference from "./NightlyCharge";
import Confirm from "./Confirm";
import ReservationList from "./ReservationList";
import RoomStatus from "./RoomStatus";
import NightlyCharge from "./NightlyCharge";
function NightAudit() {
  const [age, setAge] = React.useState("");

  const [calender, setCalender] = useState(false);
  const [next2, setNext2] = useState(false);
  const [next3, setNext3] = useState(false);
  const[next4,setNext4]=useState(false)
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(next2, "next2");
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [next, setNext] = useState(false);
  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const columns = [
    {
      name: 'Res.',
      options: {
        filter: true,
      }
    },
    {
      name: 'Guest',
      options: {
        filter: false,
      }
    },
   
    {
      name: 'Room',
      options: {
        filter: true,
      }
    },
   
    
    {
      name: 'Rate Type',
      options: {
        filter: false,
      }
    },
   
    {
      name: 'Res.Type',
      options: {
        filter: false,
      }
    },
   
    {
      name: 'Source',
      options: {
        filter: false,
      }
    },
    {
      name: 'Checkin Date',
      options: {
        filter: false,
      }
    },
    {
      name: 'No. of Nights',
      options: {
        filter: false,
      }
    },
    {
      name: 'Food Plan',
      options: {
        filter: false,
      }
    },
    {
      name: 'Total($)',
      options: {
        filter: false,
      }
    },
    {
      name: 'Deposit($)',
      options: {
        filter: false,
      }
    },
    {
      name: 'Action',
      options: {
        filter: true,
      }
    },
   
  
  ];

  const data = [
    ['94', 'Dr. R.k Sen','107-DDR',   'Room Only(Non-Smoking)','Confirm Booking','Walking Customer	',	'25-08-2022','1','AP','214.70','0.00',
    ],
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
    rowsPerPage: 10,
    page: 0
  };
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Night Audit</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Night Audit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-light p-3 rounded">
                  <div className="BookingRoom">
                    <Form>
                      <Row className="gy-3">
                        <Col md={12}>
                          <div className="HotelStep bg-white">
                            <ul className="HotelStepItem p-0 m-0 d-flex justify-content-center">
                              <li className="HotelStepList">
                                <div className="hotelStepNumber active">1</div>
                                <div className="hotelStepTitle active">
                                 Pending Reservation
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div
                                  className={`hotelStepNumber ${
                                    next || next2||next3||next4 ? "active" : ""
                                  }`}
                                >
                                  2
                                </div>
                                <div
                                  className={`hotelStepTitle ${
                                    next || next2||next3 ||next4? "active" : ""
                                  }`}
                                >
                                  Reservation List <br></br>
                                 
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div
                                  className={`hotelStepNumber ${
                                    next2||next3|| next4 ? "active" : ""
                                  }`}
                                >
                                  3
                                </div>
                                <div
                                  className={`hotelStepTitle ${
                                    next2|| next3||next4 ? "active" : ""
                                  }`}
                                >
                                 Room Status
                                <span>Optional</span>
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div className={`hotelStepNumber ${
                                    next3|| next4 ? "active" : ""
                                  }`}>4</div>
                                <div className={`hotelStepTitle ${
                                    next3|| next4 ? "active" : ""
                                  }`}>
                                 Nightly Charge
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div className={`hotelStepNumber ${
                                    next4 ? "active" : ""
                                  }`}>5</div>
                                <div className={`hotelStepTitle ${
                                    next4 ? "active" : ""
                                  }`}>Create New Day</div>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        {next ? (
                          <ReservationList
                            next2={next2}
                            setNext2={setNext2}
                            next={next}
                            setNext={setNext}
                          />
                        ): next2?(
                          <RoomStatus
                          setNext2={setNext2}
                           setNext={setNext}
                            setNext3={setNext3}
                          />
                        ):next3?(
                          <NightlyCharge
                          setNext3={setNext3} setNext2={setNext2} setNext4={setNext4}
                          />
                        ):(
                          <Col md={12}>
                              <div className="HotelStep bg-white">
                              <div className="setupFormHeading">
                           <h2 className='pending'>Pending Reservation 
                            </h2> 
                            </div>
                          </div>
                          <section>
                          <MUIDataTable
      title=""
      data={data}
      columns={columns}
      options={options}
    />
                          </section>
                          <Col md={12} >
                                <div className="setupHotelButton" style={{paddingTop:'30px'}}>
                                  <Button
                                    type="button"
                                    className="inactive me-2"
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    type="button"
                                    className="active"
                                    onClick={() => setNext(true)}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Col>
                          
                          </Col>
                        )}
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NightAudit;
