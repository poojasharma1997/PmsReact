import React from "react";
import { Col, Row, Tabs } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import "./modal.css";
function RoomMove({ roommove, setRoomMove }) {
//   const [roommove, setRoomMove] = useState(false);
  const [age, setAge] = useState("");
//   const handleClose = () => {
//     setRoomMove(false);
//   };
  const handleroommove = () => {
    // setRoomMove(true);
  };
  return (
    <Modal
      scrollable
      size="md"
      centered
      show={roommove}
      onHide={() => setRoomMove(false)}
      data-bs-backdrop="static"
    >
      <Modal.Header>
        <Modal.Title className="modalTitle">Room Move</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modayBodyDetail">
        <Form>
          <Row className="gy-3">
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Reservation ID:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    SRV368700
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Guest Name:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    Mrs. Rebeca Gomes
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>From Room:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        disabled
                        label="From Room"
                        id="standard-size-small"
                        size="small"
                        variant="standard"
                      />
                    </Box>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>To Room:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        disabled
                        size="small"
                        label="To room"
                        variant="standard"
                      />
                    </Box>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Arrival:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Date" defaultValue={""} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Departure:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Date" defaultValue={""} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Nights:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        size="small"
                        disabled
                        label="Nights"
                        variant="standard"
                      />
                    </Box>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="roomMove">
                <Row>
                  <Col md={6} className="roomMoveItems">
                    <strong>Room Type:</strong>
                  </Col>
                  <Col md={6} className="roomMoveItems">
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        //   onChange={handleChange}
                        label="Age"
                        disabled
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Override Rate"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          type="submit"
          className="closeButton"
          onClick={() => setRoomMove(false)}
        >
          save
        </Button>
        <Button
          type="button"
          className="closeButton"
          onClick={() => setRoomMove(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default RoomMove;
