import React from "react";
import "../../../FormStyle.css";
import "./setuphotel.css";
import Header from "../../../../CommonComponents/Header";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
// import editIcon from "../../src//assets/edit.svg";
// import deletIcon from "../../src//assets/delete.svg";
// import addCatIcon from "../../src//assets/plus.svg";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
import ProfileSetup from "./ProfileSetup";
import BillingSetup from "./BillingSetup";
import Preference from "./Preference";
import Confirm from "./Confirm";
function AddSetupHotel() {
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

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#FCB532",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(255, 161, 39)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.32)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0.32)",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: "#FCB532 !important",
        borderColor: "rgba(0,0,0,0.32)",
        borderWidth: "1px",
      },
    },
  });
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Edit Hotels</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Edit Hotels</div>
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
                                  Account Setup
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
                                  Profile Setup <br></br>
                                  <span>Optionl</span>
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
                                  Billing Setup
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div className={`hotelStepNumber ${
                                    next3|| next4 ? "active" : ""
                                  }`}>4</div>
                                <div className={`hotelStepTitle ${
                                    next3|| next4 ? "active" : ""
                                  }`}>
                                  Preferences
                                </div>
                              </li>
                              <li className="HotelStepList">
                                <div className={`hotelStepNumber ${
                                    next4 ? "active" : ""
                                  }`}>5</div>
                                <div className={`hotelStepTitle ${
                                    next4 ? "active" : ""
                                  }`}>Confirm</div>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        {next ? (
                          <ProfileSetup
                            next2={next2}
                            setNext2={setNext2}
                            next={next}
                            setNext={setNext}
                          />
                        ) : next2 ? (
                          <BillingSetup
                          
                            setNext2={setNext2}
                           setNext={setNext}
                            setNext3={setNext3}
                          />
                        ): next3?(
                            <Preference   setNext3={setNext3} setNext2={setNext2} setNext4={setNext4} />
                        ): next4?(
                            <Confirm setNext4={setNext4}  next3={next3}  setNext3={setNext3}/>):(
                          <Col md={12}>
                            <div className="setupFormHeading">
                              General Details:
                            </div>

                            <Row gy="4">
                              <Col md={6}>
                                <div className="FormInner bg-white">
                                  <Row className="gy-3">
                                    <Col md={12} className="">
                                      <Box
                                        component="form"
                                        sx={{
                                          "& .MuiTextField-root": {
                                            m: 1,
                                            width: "25ch",
                                          },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                      >
                                        <div>
                                          <CssTextField
                                            label="Hotel Name"
                                            id="outlined-size-small"
                                            size="small"
                                          />
                                        </div>
                                      </Box>
                                    </Col>
                                    <Col md={12}>
                                      <Box
                                        component="form"
                                        sx={{
                                          "& .MuiTextField-root": {
                                            m: 1,
                                            width: "25ch",
                                          },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                      >
                                        <div>
                                          <CssTextField
                                            label="Hotel Group Name"
                                            id=""
                                            size="small"
                                          />
                                        </div>
                                      </Box>
                                    </Col>
                                    <Col md={12}>
                                      <Box
                                        component="form"
                                        sx={{
                                          "& .MuiTextField-root": {
                                            m: 1,
                                            width: "25ch",
                                          },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                      >
                                        <div>
                                          <CssTextField
                                            label="Year Established"
                                            id=""
                                            size="small"
                                          />
                                        </div>
                                      </Box>
                                    </Col>
                                    <Col md={12}>
                                      <Box
                                        component="form"
                                        sx={{
                                          "& .MuiTextField-root": {
                                            m: 1,
                                            width: "25ch",
                                          },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                      >
                                        <div>
                                          <CssTextField
                                            label="No. Of Floor"
                                            id=""
                                            size="small"
                                          />
                                        </div>
                                      </Box>
                                    </Col>
                                    <Col md={12}>
                                      <FormControl
                                        sx={{ m: 1, minWidth: 120 }}
                                        size="small"
                                      >
                                        <InputLabel id="demo-select-small">
                                          Hotel Ownership Type
                                        </InputLabel>
                                        <Select
                                          labelId="demo-select-small"
                                          id="demo-select-small"
                                          value={age}
                                          label="select"
                                          onChange={handleChange}
                                        >
                                          <MenuItem value={20}>
                                            {" "}
                                            Sole Proprietorship
                                          </MenuItem>
                                          <MenuItem value={30}>
                                            Partnership
                                          </MenuItem>
                                          <MenuItem value={30}>
                                            Cooperative Business
                                          </MenuItem>
                                        </Select>
                                      </FormControl>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="FormInner bg-white">
                                  <Row className="gy-3">
                                    <Col md={12}>
                                      <Row className="gy-4">
                                        <Col md={12}>
                                          <Row className="gy-2">
                                            <Col md={12}>
                                              <div className="formHeading">
                                                Hotel Type
                                              </div>
                                            </Col>
                                            <div className="col-auto pe-0">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox defaultChecked />
                                                  }
                                                  label="Business Hotel"
                                                />
                                              </FormGroup>
                                            </div>
                                            <div className="col-auto pe-0">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox defaultChecked />
                                                  }
                                                  label="Airport Hotel"
                                                />
                                              </FormGroup>
                                            </div>
                                            <div className="col-auto pe-0">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox defaultChecked />
                                                  }
                                                  label="Suite Hotel"
                                                />
                                              </FormGroup>
                                            </div>
                                            <div className="col-auto pe-0">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox defaultChecked />
                                                  }
                                                  label="Extended Stay Hotel"
                                                />
                                              </FormGroup>
                                            </div>
                                            <div className="col-auto pe-0">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox defaultChecked />
                                                  }
                                                  label="Resort Hotel"
                                                />
                                              </FormGroup>
                                            </div>
                                          </Row>
                                        </Col>
                                        <Col md={12}>
                                          <Row className="gy-3">
                                            <Col md={12}>
                                              <div className="fileUploadHeading">
                                                Upload Logo
                                              </div>
                                            </Col>
                                            <Col md={12}>
                                              <Form.Group
                                                className=""
                                                controlId="formBasicEmail"
                                              >
                                                <Form.Label
                                                  for="file"
                                                  className="w-100"
                                                >
                                                  <div className="fileLabel">
                                                    <div className="text-center">
                                                      <div className="">
                                                        Drag and drop image(s)
                                                        here or click
                                                      </div>
                                                      <div className="fileLableImg">
                                                        <img
                                                          src={
                                                            ".//assets/uploadFile.svg"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Form.Label>
                                                <Form.Control
                                                  className="shadow-none d-none"
                                                  type="file"
                                                  id="file"
                                                  placeholder=""
                                                />
                                              </Form.Group>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="setupHotelButton">
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
                            </Row>
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

export default AddSetupHotel;
