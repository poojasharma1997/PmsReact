import React from "react";
import "../../FormStyle.css";
import Header from "../../../CommonComponents/Header";
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
function BokkingDorm() {
    const [age, setAge] = React.useState("");
    const [dates, setDates] = useState(new Date());
    const [year, setYear] = useState();
    const [option, setOption] = useState("other");
    const [clock, setClock] = useState(false);
    const [calender, setCalender] = useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [selectedValue, setSelectedValue] = React.useState("a");
    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
    };
    console.log(clock, "clock");
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
                        <div className="mainHeading px-3">Booking Dorm</div>
                    </div>
                    <div className="col-12">
                        <div className="sectionContent shadow">
                            <div className="row">
                                <div className="col-12">
                                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                        <div className="row d-flex align-items-center">
                                            <div className="col">
                                                <div className="sectionHeaderHeaing">Booking Dorm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-light p-3 rounded">
                                    <div className="BookingRoom">
                                        <Form>
                                            <Row className="gy-4">
                                                <Col md={6}>
                                                    <div className="FormInner bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12} className="">
                                                                <div className="pb-2 InnerHeading text-center">
                                                                    Guest Information
                                                                </div>
                                                                <hr></hr>
                                                            </Col>
                                                            <Col md={12} className="">
                                                                <FormControl
                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                    size="small"
                                                                >
                                                                    <InputLabel id="demo-select-small">
                                                                        Select Booking Type
                                                                    </InputLabel>
                                                                    <Select
                                                                        labelId="demo-select-small"
                                                                        id="demo-select-small"
                                                                        value={age}
                                                                        label="Age"
                                                                        onChange={handleChange}
                                                                    >
                                                                        <MenuItem value="">
                                                                            <em>Select Booking Type</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>
                                                                            Spot Booking{" "}
                                                                        </MenuItem>
                                                                        <MenuItem value={20}>
                                                                            Pencil Booking
                                                                        </MenuItem>
                                                                        <MenuItem value={30}>
                                                                            Advance Booking
                                                                        </MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row>
                                                                    <Col md={3}>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Mr.
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value={10}>Mr.</MenuItem>
                                                                                <MenuItem value={20}>Mrs.</MenuItem>
                                                                                <MenuItem value={30}>Ms</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                    <Col md={9}>
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
                                                                                    label="Name"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                </Row>
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
                                                                            label="Address"
                                                                            id="outlined-size-small"
                                                                            size="small"
                                                                        />
                                                                    </div>
                                                                </Box>
                                                            </Col>

                                                            <Col md={12}>
                                                                <Row>
                                                                    <Col md={4}>
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
                                                                                    label="State"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                    <Col md={4}>
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
                                                                                    label="City"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                    <Col md={4}>
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
                                                                                    label="Zip"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col md={12}>
                                                                <FormControl
                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                    size="small"
                                                                >
                                                                    <InputLabel id="demo-select-small">
                                                                        Country
                                                                    </InputLabel>
                                                                    <Select
                                                                        labelId="demo-select-small"
                                                                        id="demo-select-small"
                                                                        value={age}
                                                                        label="Country"
                                                                        onChange={handleChange}
                                                                    >
                                                                        <MenuItem value={20}>Country</MenuItem>
                                                                        <MenuItem value={30}>India</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="FormInner h-100 bg-white">
                                                        <Row className="gy-3 h-100 align-items-center">
                                                            <Col md={12} className="">
                                                                <div className="pb-2 InnerHeading text-center">
                                                                    Contact Information
                                                                </div>
                                                                <hr></hr>
                                                            </Col>
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
                                                                            label="Email"
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
                                                                            label="Phone"
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
                                                                            label="Mobile"
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
                                                                            label="Fax"
                                                                            id=""
                                                                            size="small"
                                                                        />
                                                                    </div>
                                                                </Box>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="FormInner bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12} className="">
                                                                <div className="pb-2 InnerHeading text-center">
                                                                    Stay Information
                                                                </div>
                                                                <hr></hr>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <Col md={4}>
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
                                                                                    label="Number"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Bed Type
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em> Bed Type</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>
                                                                                    Single
                                                                                </MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Double
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Bed Number
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em> Bed Number</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={20}>C1</MenuItem>
                                                                                <MenuItem value={30}>C2</MenuItem>
                                                                                <MenuItem value={40}>C3</MenuItem>
                                                                                <MenuItem value={40}>C4</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                    <Col md={4}>


                                                                        <LocalizationProvider
                                                                            dateAdapter={AdapterDayjs}
                                                                        >
                                                                            <DemoContainer
                                                                                components={["MobileDatePicker"]}
                                                                            >
                                                                                <MobileDatePicker label={"Arrival Date"}
                                                                                    views={['year', 'month', 'day']} />
                                                                            </DemoContainer>
                                                                        </LocalizationProvider>


                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <LocalizationProvider
                                                                            dateAdapter={AdapterDayjs}
                                                                        >
                                                                            <DemoContainer

                                                                                components={["MobileTimePicker"]}
                                                                                sx={{ minWidth: 180, marginTop: '1px' }}
                                                                            >
                                                                                <MobileTimePicker
                                                                                    label={'Time in 12 hours'}
                                                                                    views={["hours", "minutes"]}
                                                                                    format="hh:mm"
                                                                                />
                                                                            </DemoContainer>
                                                                        </LocalizationProvider>
                                                                    </Col>
                                                                    <Col md={4}>
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
                                                                                    label="Night"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>

                                                                    <Col md={4}>

                                                                        <LocalizationProvider
                                                                            dateAdapter={AdapterDayjs}
                                                                        >
                                                                            <DemoContainer
                                                                                components={["MobileDatePicker"]}
                                                                            >
                                                                                <MobileDatePicker label={"Departure Date"}
                                                                                    views={['year', 'month', 'day']} />
                                                                            </DemoContainer>
                                                                        </LocalizationProvider>


                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <LocalizationProvider
                                                                            dateAdapter={AdapterDayjs}
                                                                        >
                                                                            <DemoContainer
                                                                                components={["MobileTimePicker"]}
                                                                                sx={{ minWidth: 180, marginTop: '1px' }}
                                                                            >
                                                                                <MobileTimePicker
                                                                                    label={'Time 12 hours'}
                                                                                    views={["hours", "minutes"]}
                                                                                    format='hh:mm'
                                                                                />
                                                                            </DemoContainer>
                                                                        </LocalizationProvider>
                                                                    </Col>
                                                                    <Col md={4}>
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
                                                                                    label="Adult"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>

                                                                    <Col md={6}>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Select Reservation Type
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Select Reservation Type"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value={10}>
                                                                                    Select Reservation Type
                                                                                </MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Single Booking{" "}
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>
                                                                                    Group Booking
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                    <Col md={6}>
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
                                                                                    label="Child"
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="FormInner bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12} className="">
                                                                <div className="pb-2 InnerHeading text-center">
                                                                    Other Information
                                                                </div>
                                                                <hr></hr>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <Col md={12}>
                                                                        <Row className="gy-3 align-items-center">
                                                                            <Col md={4}>
                                                                                <div className="form-label">
                                                                                    Nationality
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={4}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Select
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="select"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value={10}>
                                                                                            Select
                                                                                        </MenuItem>
                                                                                        <MenuItem value={20}>
                                                                                            India
                                                                                        </MenuItem>
                                                                                        <MenuItem value={30}>UK</MenuItem>
                                                                                        <MenuItem value={30}>US</MenuItem>
                                                                                        <MenuItem value={30}>
                                                                                            Frence
                                                                                        </MenuItem>
                                                                                        <MenuItem value={30}>
                                                                                            Italy
                                                                                        </MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                            <Col md={4}>
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
                                                                                            label="Id No."
                                                                                            id="outlined-size-small"
                                                                                            size="small"
                                                                                        />
                                                                                    </div>
                                                                                </Box>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Form.Group
                                                                            className=""
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label for="file" className="w-100">
                                                                                <div className="fileLabel">
                                                                                    <div className="text-center">
                                                                                        <div className="fileLableImg">
                                                                                            <img
                                                                                                src={".//assets/uploadFile.svg"}
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
                                                                        <Form.Group
                                                                            className=""
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label
                                                                                for="upload"
                                                                                className="w-100"
                                                                            >
                                                                                <div className="fileLabelUpload">
                                                                                    <div className="text-center">
                                                                                        <div className="uploadFiles d-flex align-items-center">
                                                                                            Click to upload file(s)
                                                                                            <img
                                                                                                src="../assets/uploadSmall.svg"
                                                                                                className="ms-2"
                                                                                                alt="img"
                                                                                            ></img>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Form.Label>
                                                                            <Form.Control
                                                                                className="shadow-none d-none"
                                                                                type="file"
                                                                                id="upload"
                                                                                placeholder=""
                                                                            />
                                                                        </Form.Group>
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
                                                                                    label="Registation No."
                                                                                    id="outlined-size-small"
                                                                                    size="small"
                                                                                />
                                                                            </div>
                                                                        </Box>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Row className="gy-2">
                                                                            <Col md={12}>
                                                                                <Form.Group
                                                                                    className=""
                                                                                    controlId="formBasicEmail"
                                                                                >
                                                                                    <Form.Label for="" className="w-100"
                                                                                    
                                                                                    >
                                                                                        Gender* :
                                                                                    </Form.Label>
                                                                                    <Box sx={{ display: "flex", gap: 2 }}>
                                                                                    <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                
                                                                                            }}
                                                                                        >
                                                                                        <Radio
                                                                                            checked={
                                                                                                selectedValue === "Female"
                                                                                            }
                                                                                            onChange={handleChangeRadio}
                                                                                            value="Female"
                                                                                           
                                                                                            variant="outlined"
                                                                                            name="radio-buttons"
                                                                                            slotProps={{
                                                                                                input: { "aria-label": "A" },
                                                                                            }}
                                                                                        />
                                                                                        <span className="ms-2">Female</span>
                                                                                        </Form.Label>
                                                                                         <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                
                                                                                            }}
                                                                                        >
                                                                                        <Radio
                                                                                            checked={selectedValue === "Male"}
                                                                                            onChange={handleChangeRadio}
                                                                                            value="Male"
                                                                                           
                                                                                            variant="outlined"
                                                                                            name="radio-buttons"
                                                                                            slotProps={{
                                                                                                input: { "aria-label": "B" },
                                                                                            }}
                                                                                        />
                                                                                        <span className="ms-2">male</span>
                                                                                        </Form.Label>
                                                                                         <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                
                                                                                            }}
                                                                                        >
                                                                                        <Radio
                                                                                            checked={
                                                                                                selectedValue === "Other"
                                                                                            }
                                                                                            onChange={handleChangeRadio}
                                                                                            value="Other"
                                                                                           
                                                                                            variant="outlined"
                                                                                            name="radio-buttons"
                                                                                            slotProps={{
                                                                                                input: { "aria-label": "C" },
                                                                                            }}
                                                                                        />
                                                                                        <span className="ms-2">Others</span>
                                                                                        </Form.Label>
                                                                                    </Box>
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                VIP Status
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="VIP Status"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>VIP Status</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={20}>Yes</MenuItem>
                                                                                <MenuItem value={30}>No</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="FormInner bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12}>
                                                                <Tabs
                                                                    aria-label="Basic tabs"
                                                                    defaultValue={0}
                                                                    sx={{ borderRadius: "lg" }}
                                                                >
                                                                    <TabList>
                                                                        <Tab
                                                                            className={
                                                                                option == "other" ? "active" : ""
                                                                            }
                                                                            onClick={() => setOption("other")}
                                                                        >
                                                                            Other
                                                                        </Tab>
                                                                        <Tab
                                                                            className={
                                                                                option == "ota" ? "active" : ""
                                                                            }
                                                                            onClick={() => setOption("ota")}
                                                                        >
                                                                            OTA & Travel Agent Info
                                                                        </Tab>
                                                                    </TabList>
                                                                    <TabPanel value={0} sx={{ p: 2 }}>
                                                                        <Row className="gy-3">
                                                                            <Col md={12}>
                                                                                <Row className="gy-3 align-items-center ">
                                                                                    <Col md={8}>
                                                                                        <FormControl
                                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                                            size="small"
                                                                                        >
                                                                                            <InputLabel id="demo-select-small">
                                                                                                Company
                                                                                            </InputLabel>
                                                                                            <Select
                                                                                                labelId="demo-select-small"
                                                                                                id="demo-select-small"
                                                                                                value={age}
                                                                                                label="Company"
                                                                                                onChange={handleChange}
                                                                                            >
                                                                                                <MenuItem value={10}>
                                                                                                    Company
                                                                                                </MenuItem>
                                                                                                <MenuItem value={20}>
                                                                                                    ABC
                                                                                                </MenuItem>
                                                                                                <MenuItem value={30}>
                                                                                                    PQR
                                                                                                </MenuItem>
                                                                                            </Select>
                                                                                        </FormControl>
                                                                                    </Col>
                                                                                    <Col md={2}>
                                                                                        <Link
                                                                                            href=""
                                                                                            className="bokkingIcon"
                                                                                        >
                                                                                            <img
                                                                                                src="../assets/addYellow.svg"
                                                                                                alt="img"
                                                                                                className="w-100 h-100"
                                                                                            ></img>
                                                                                        </Link>
                                                                                    </Col>
                                                                                    <Col md={2}>
                                                                                        <Link
                                                                                            href=""
                                                                                            className="bokkingIcon"
                                                                                        >
                                                                                            <img
                                                                                                src="../assets/searchYellow.svg"
                                                                                                alt="img"
                                                                                                className="w-100 h-100"
                                                                                            ></img>
                                                                                        </Link>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Col>
                                                                            <Col md={12}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Business Source
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="Business Source"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value={10}>
                                                                                            Business Source
                                                                                        </MenuItem>
                                                                                        <MenuItem value={20}>ABC</MenuItem>
                                                                                        <MenuItem value={30}>PQR</MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                            <Col md={12}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Market
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="Age"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value={10}>
                                                                                            Market
                                                                                        </MenuItem>
                                                                                        <MenuItem value={20}>ABC</MenuItem>
                                                                                        <MenuItem value={30}>PQR</MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                        </Row>
                                                                    </TabPanel>
                                                                    <TabPanel value={1} sx={{ p: 2 }}>
                                                                        <Row>
                                                                            <Col md={12}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Select Booking Through
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="Select Booking Through"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value={10}>
                                                                                            Select Booking Through
                                                                                        </MenuItem>
                                                                                        <MenuItem value={20}>
                                                                                            Front Desk
                                                                                        </MenuItem>
                                                                                        <MenuItem value={30}>
                                                                                            Website
                                                                                        </MenuItem>
                                                                                        <MenuItem value={30}>OTA</MenuItem>
                                                                                        <MenuItem value={30}>
                                                                                            Broker
                                                                                        </MenuItem>
                                                                                        <MenuItem value={30}>
                                                                                            Travel Agent
                                                                                        </MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                        </Row>
                                                                    </TabPanel>
                                                                </Tabs>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="FormInner pt-3 pb-5 bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12} className="">
                                                                <div className="pb-2 InnerHeading text-center">
                                                                    Billing Information
                                                                </div>
                                                                <hr></hr>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <Col md={12}>
                                                                        <Row className="gy-4">
                                                                            <Col md={12}>
                                                                                <Form.Group
                                                                                    className=""
                                                                                    controlId="formBasicEmail"
                                                                                >
                                                                                    <Form.Label for="" className="w-100">
                                                                                        Rates :
                                                                                    </Form.Label>
                                                                                    <Box sx={{ display: "flex", gap: 2 }}>
                                                                                        <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                marginRight: "4px",
                                                                                            }}
                                                                                        >
                                                                                            <Radio
                                                                                                checked={
                                                                                                    selectedValue === "Normal"
                                                                                                }
                                                                                                onChange={handleChangeRadio}
                                                                                                value="Normal"
                                                                                                sx={{ marginRight: "10px" }}
                                                                                                variant="outlined"
                                                                                                name="radio-buttons"
                                                                                                slotProps={{
                                                                                                    input: { "aria-label": "A" },
                                                                                                }}
                                                                                            />
                                                                                            Normal
                                                                                        </Form.Label>
                                                                                        <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                marginRight: "4px",
                                                                                            }}
                                                                                        >
                                                                                            <Radio
                                                                                                checked={
                                                                                                    selectedValue === "Contract"
                                                                                                }
                                                                                                onChange={handleChangeRadio}
                                                                                                value="Contract"
                                                                                                sx={{ marginRight: "10px" }}
                                                                                                variant="outlined"
                                                                                                name="radio-buttons"
                                                                                                slotProps={{
                                                                                                    input: { "aria-label": "B" },
                                                                                                }}
                                                                                            />
                                                                                            Contract
                                                                                        </Form.Label>
                                                                                        <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                marginRight: "4px",
                                                                                            }}
                                                                                        >
                                                                                            <Radio
                                                                                                checked={
                                                                                                    selectedValue === "Manual"
                                                                                                }
                                                                                                onChange={handleChangeRadio}
                                                                                                value="Manual"
                                                                                                sx={{ marginRight: "10px" }}
                                                                                                variant="outlined"
                                                                                                name="radio-buttons"
                                                                                                slotProps={{
                                                                                                    input: { "aria-label": "C" },
                                                                                                }}
                                                                                            />
                                                                                            Manual
                                                                                        </Form.Label>
                                                                                    </Box>
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Row>
                                                                            <Col md={4}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Bill To
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="Bill To"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value="">
                                                                                            <em>Bill To</em>
                                                                                        </MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={
                                                                                            <Checkbox defaultChecked />
                                                                                        }
                                                                                        label="Tax"
                                                                                    />
                                                                                    {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                                                                                </FormGroup>
                                                                            </Col>
                                                                            <Col md={6}>
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
                                                                                            label="Exempition ID"
                                                                                            id="outlined-size-small"
                                                                                            size="small"
                                                                                        />
                                                                                    </div>
                                                                                </Box>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Row className="gy-3">
                                                                            <Col md={5}>
                                                                                <Form.Group
                                                                                    className=""
                                                                                    controlId="formBasicEmail"
                                                                                >
                                                                                    <Form.Label for="" className="w-100">
                                                                                        Payment Mode* :
                                                                                    </Form.Label>
                                                                                    <Box sx={{ display: "flex", gap: 2 }}>
                                                                                        <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                marginRight: "4px",
                                                                                            }}
                                                                                        >
                                                                                            <Radio
                                                                                                checked={
                                                                                                    selectedValue === "Cash"
                                                                                                }
                                                                                                onChange={handleChangeRadio}
                                                                                                value="Cash"
                                                                                                sx={{ marginRight: "10px" }}
                                                                                                variant="outlined"
                                                                                                name="radio-buttons"
                                                                                                slotProps={{
                                                                                                    input: { "aria-label": "A" },
                                                                                                }}
                                                                                            />
                                                                                            Cash
                                                                                        </Form.Label>
                                                                                        <Form.Label
                                                                                            style={{
                                                                                                color: "rgb(255, 161, 39)",
                                                                                                marginRight: "4px",
                                                                                            }}
                                                                                        >
                                                                                            <Radio
                                                                                                checked={
                                                                                                    selectedValue === "Credit"
                                                                                                }
                                                                                                onChange={handleChangeRadio}
                                                                                                value="Credit"
                                                                                                sx={{ marginRight: "10px" }}
                                                                                                variant="outlined"
                                                                                                name="radio-buttons"
                                                                                                slotProps={{
                                                                                                    input: { "aria-label": "B" },
                                                                                                }}
                                                                                            />
                                                                                            Credit
                                                                                        </Form.Label>
                                                                                    </Box>
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col md={7}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Select
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="Select"
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        <MenuItem value="">
                                                                                            <em>Select</em>
                                                                                        </MenuItem>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Row className="gy-3">
                                                                            <Col md={2}>
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={
                                                                                            <Checkbox defaultChecked />
                                                                                        }
                                                                                    />
                                                                                </FormGroup>
                                                                            </Col>

                                                                            <Col md={5} sx={{ marginTop: '-6px', height: '25px' }}>

                                                                                <LocalizationProvider
                                                                                    dateAdapter={AdapterDayjs}
                                                                                >
                                                                                    <DemoContainer
                                                                                        components={["DatePicker"]}
                                                                                        sx={{ marginTop: '-6px' }}
                                                                                    >
                                                                                        <MobileDatePicker label={"Release Date"}
                                                                                            views={['year', 'month', 'day']} />
                                                                                    </DemoContainer>
                                                                                </LocalizationProvider>

                                                                            </Col>
                                                                            <Col md={5} >
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
                                                                                    <div style={{ marginTop: '1px' }}>
                                                                                        <CssTextField
                                                                                            label="Term %"
                                                                                            id="outlined-size-small"
                                                                                            size="small"
                                                                                        />
                                                                                    </div>
                                                                                </Box>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>

                                                                    <Col md={12}>
                                                                        <Row>
                                                                            <Col md={4}>
                                                                                <div className="Label">
                                                                                    Modifer Bed
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={8}>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className=" d-flex">
                                                                                        <img
                                                                                            src="../assets/per.svg"
                                                                                            alt=""
                                                                                        ></img>
                                                                                        <img
                                                                                            src="../assets/smallAddYellow.svg"
                                                                                            className="mx-2"
                                                                                            alt=""
                                                                                        ></img>
                                                                                        <img
                                                                                            src="../assets/minusYellow.svg"
                                                                                            alt=""
                                                                                        ></img>
                                                                                    </div>
                                                                                    <div className="Label mx-3 mb-0">
                                                                                        Meal
                                                                                    </div>
                                                                                    <div className="d-flex">
                                                                                        <img
                                                                                            src="../assets/per.svg"
                                                                                            alt=""
                                                                                        ></img>
                                                                                        <img
                                                                                            src="../assets/smallAddYellow.svg"
                                                                                            className="mx-2"
                                                                                            alt=""
                                                                                        ></img>
                                                                                        <img
                                                                                            src="../assets/minusYellow.svg"
                                                                                            alt=""
                                                                                        ></img>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <Row className="gy-4">
                                                                            <Col md={2}>
                                                                                <div className="Label">Bed Rent :</div>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <div className="Label">
                                                                                    Exbed (RR) :
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <div className="Label">RR Tax :</div>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <div className="Label">Meal Plan :</div>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <div className="Label">
                                                                                    Exbed (MR) :
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={2}>
                                                                                <div className="Label">MP Tax :</div>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <hr></hr>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <Col md={4}>
                                                                        <div className="Label">Total RR :</div>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <div className="Label">Total MR :</div>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <div className="Label">Reservation :</div>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="FormInner bg-white">
                                                        <Row className="gy-3">
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <div className="col-auto pe-0">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Print Guest Registration Card"
                                                                            />
                                                                        </FormGroup>
                                                                    </div>
                                                                    <div className="col-auto px-0">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Supress Rate on Registration Card"
                                                                            />
                                                                        </FormGroup>
                                                                    </div>
                                                                    <div className="col-auto pe-0">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Print Folio"
                                                                            />
                                                                        </FormGroup>
                                                                    </div>
                                                                    <div className="col-auto pe-0">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Print Receit"
                                                                            />
                                                                        </FormGroup>
                                                                    </div>
                                                                    <div className="col-auto pe-0 d-flex align-items-center">
                                                                        <div className="addRoom d-flex align-items-center">
                                                                            <img
                                                                                src="../assets/addYellow.svg"
                                                                                classname="w-100 h-100"
                                                                                alt="img"
                                                                            ></img>
                                                                            <span classname="mx-3">Add Room</span>{" "}
                                                                            <a href="#" classname="">
                                                                                Global Options
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <hr></hr>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Row classname="gy-4">
                                                                    <Col>
                                                                        <div className="Label">TOTAL : 1256 RS</div>
                                                                    </Col>
                                                                    <Col md="auto">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Display Inclusion Separately on Flo"
                                                                            />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md="auto">
                                                                        <FormGroup>
                                                                            <FormControlLabel
                                                                                control={<Checkbox defaultChecked />}
                                                                                label="Email Thanks at Check Out"
                                                                            />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col>
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Select
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>Select</em>
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <Row className="gy-2 justify-content-center">
                                                        <Col md="auto">
                                                            <Button
                                                                type="button"
                                                                className="btn submitButton d-flex align-items-center rounded-5"
                                                            >
                                                                REVERSE
                                                            </Button>
                                                        </Col>
                                                        <Col md="auto">
                                                            <Button
                                                                type="button"
                                                                className="btn submitButton d-flex align-items-center rounded-5"
                                                            >
                                                                CHECK IN
                                                            </Button>
                                                        </Col>
                                                        <Col md="auto">
                                                            <Button
                                                                type="button"
                                                                className="btn submitButton d-flex align-items-center rounded-5"
                                                            >
                                                                CANCEL
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
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

export default BokkingDorm;
