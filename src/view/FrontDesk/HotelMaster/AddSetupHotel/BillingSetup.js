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
function BillingSetup(props) {
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
    const {setNext2,setNext3,setNext} = props
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
        <>
            <Col md={12}>
                                                    <div className="setupFormHeading">
                                                    Tax Details :
                                                    </div>

                                                    <Row className="gy-4">
                                                        <Col md={12}>
                                                            <Row className="gy-4">
                                                                <Col md={6}>
                                                                <div className="FormInner bg-white pt-5">
                                                                    <Row className="gy-5">
                                                                        <Col md={12} className="">
                                                                        <FormControl
                                                                            sx={{ m: 1, minWidth: 120 }}
                                                                            size="small"
                                                                        >
                                                                            <InputLabel id="demo-select-small">
                                                                                Tax Applied?
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-select-small"
                                                                                id="demo-select-small"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value={10}>
                                                                                    yes
                                                                                </MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    No
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
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
                                                                                        label="Service Tax"
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
                                                                                        label="Service Charge%"
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
                                                                                        label="Standard tax%"
                                                                                        id=""
                                                                                        size="small"
                                                                                    />
                                                                                </div>
                                                                            </Box>
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
                                                                                        label="Vat Tax%"
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
                                                                                        label="Food Vat%"
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
                                                                                        label="Liquor Vat%"
                                                                                        id=""
                                                                                        size="small"
                                                                                    />
                                                                                </div>
                                                                            </Box>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                </Col>
                                                                <Col md={6}>
                                                                <div className="FormInner bg-white pt-5">
                                                                    <Row className="gy-5">
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
                                                                                        label="Luxury Tax Slab 1 Range(Take to)"
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
                                                                                        label="Luxury Tax Slab 1 Range(From Value)"
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
                                                                                        label="Luxury Tax Slab 1%"
                                                                                        id=""
                                                                                        size="small"
                                                                                    />
                                                                                </div>
                                                                            </Box>
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
                                                                                        label="Luxury Tax Slab 2 Range(take to)"
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
                                                                                        label="Luxury Tax Slab 1 Range(From Value)"
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
                                                                                        label="Luxury Tax Slab 2%"
                                                                                        id=""
                                                                                        size="small"
                                                                                    />
                                                                                </div>
                                                                            </Box>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="setupHotelButton">
                                                                <Button type="button" className="backButton me-2" onClick={()=>{setNext(true)
                                                                setNext2(false)}}>Back</Button>
                                                                <Button type="button" className="active" onClick={()=>{setNext2(false)
                                                                setNext3(true)}}>Next</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col></>
                                            
                                          
    );
}

export default BillingSetup;
