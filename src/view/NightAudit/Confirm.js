import React from "react";
import "../FormStyle.css";
import "./setuphotel.css";
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
function Confirm(props) {
    const [age, setAge] = React.useState("");
 const{setNext4,setNext3} = props
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [selectedValue, setSelectedValue] = React.useState("a");
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
        <>
                                                <Col md={12}>
                                                    <div className="setupFormHeading">
                                                        General Preferences :
                                                    </div>

                                                    <Row className="gy-4">
                                                        
                                                        <Col md={12}>
                                                            <Row className="gy-4">
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
                                                                                            label="Default Check In Time"
                                                                                            id="outlined-size-small"
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
                                                                                        Select Buffer Hour
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="select"
                                                                                        onChange={handleChange}
                                                                                        >
                                                                                        <MenuItem value={20}> 1</MenuItem>
                                                                                        <MenuItem value={20}> 2</MenuItem>
                                                                                        <MenuItem value={20}> 3</MenuItem>
                                                                                        <MenuItem value={20}> 4</MenuItem>
                                                                                        <MenuItem value={20}> 5</MenuItem>
                                                                                        
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                            
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <label className="pe-2">Guest</label>
                                                                                    <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="Guest must be present in system for booking purpose" 
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Take Duplicate Entry"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Photo Mandatory"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Id Mandatory"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <div className="FormInner bg-white pt-5">
                                                                        <Row className="gy-5">
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <label className="pe-2">Broker</label>
                                                                                    <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="Broker must be present in system for booking purpose" 
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Change Commission%"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Photo Mandatory"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <div className="col-auto pe-0">
                                                                                <FormGroup>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="Id Mandatory"
                                                                                    />
                                                                                </FormGroup>
                                                                            </div>
                                                                            <Col md={12}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                    >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Select Date Format
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="select"
                                                                                        onChange={handleChange}
                                                                                        >
                                                                                        <MenuItem value={20}> DD-MM-YYYY</MenuItem>
                                                                                        <MenuItem value={20}> MM-DD-YYYY</MenuItem>
                                                                                        <MenuItem value={20}> YYYY-MM-DD</MenuItem>
                                                                                        
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                            <Col md={12}>
                                                                                <FormControl
                                                                                    sx={{ m: 1, minWidth: 120 }}
                                                                                    size="small"
                                                                                    >
                                                                                    <InputLabel id="demo-select-small">
                                                                                        Default CheckOut Time
                                                                                    </InputLabel>
                                                                                    <Select
                                                                                        labelId="demo-select-small"
                                                                                        id="demo-select-small"
                                                                                        value={age}
                                                                                        label="select"
                                                                                        onChange={handleChange}
                                                                                        >
                                                                                        <MenuItem value={20}> Select date Format</MenuItem>
                                                                                        <MenuItem value={20}> 12 Hours</MenuItem>
                                                                                        <MenuItem value={20}> 24 Hours</MenuItem>
                                                                                        
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="setupHotelButton">
                                                                <Button type="button" className="backButton me-2 " onClick={()=>{setNext4(false); setNext3(true)}}>Back</Button>
                                                                <Button type="button" className="active">FINISH</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                          
        </>
    );
}

export default Confirm;
