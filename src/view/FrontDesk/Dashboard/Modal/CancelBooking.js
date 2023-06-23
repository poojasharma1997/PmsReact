import React, { useState } from "react"
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
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./modal.css";
function CancelBooking({cancelbooking,setCancelBooking}){
    const[open,setOpen]=useState(false)
    return(
        <>
        
        <Modal scrollable
                                                      size="md"
                                                      centered
                                                      show={cancelbooking}
                                                      onHide={() =>
                                                       setCancelBooking(false)
                                                      }
                                                      data-bs-backdrop="static"
                                                    >
                                                      <Modal.Header>
                                                        <Modal.Title className="modalTitle">
                                                          Alert
                                                        </Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body className="modayBodyDetail">
                                                          <Form>
                                                            <Row className="gy-4">
                                                                <Col md={12}>
                                                                  <div className="cancelBookingHeading">
                                                                    If you cancel booking before:
                                                                  </div>
                                                                </Col>
                                                                <Col md={12}>
                                                                  <ul className="cancelBookingList">
                                                                      <li className="cancelBookingListItem">
                                                                      i) 1 week of check-in, 10% of booking amount will be deducted, 
                                                                      </li>
                                                                      <li className="cancelBookingListItem">
                                                                      ii)5 days prior to check-in, 30% of booking amount will be deducted, 
                                                                      </li>
                                                                      <li className="cancelBookingListItem">
                                                                      iii)1 day of check-in 80% booking amount will be deducted. 
                                                                      </li>
                                                                  </ul>
                                                                </Col>

                                                            </Row>
                                                          </Form>
                                                      </Modal.Body>
                                                      <Modal.Footer className="border-0">
                                                      <Button type="button"
                                                          className="closeButton"
                                                          onClick={() =>
                                                          setCancelBooking(false)
                                                          }
                                                        >
                                                          Disagree
                                                        </Button>
                                                        <Button type="submit"
                                                          className="closeButton"
                                                          onClick={() =>
                                                            setOpen(true)
                                                          }

                                                        >
                                                          Agree
                                                        </Button>
                                                      </Modal.Footer>
                                                    </Modal>

                                                    <Modal scrollable
                                                      size="lg"
                                                      centered
                                                      show={open}
                                                      onHide={() =>
                                                        setOpen(false)
                                                      }
                                                      data-bs-backdrop="static"
                                                    >
                                                      <Modal.Header>
                                                        <Modal.Title className="modalTitle">
                                                          Cancel Booking
                                                        </Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body className="modayBodyDetail">
                                                          <Form>
                                                            <Row className="gy-4">
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                        disabled
                                                                        label="Reservation ID"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Booking Taken By"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Status"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Invoice No."
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Stay"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Guest Name"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Room No."
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                                                    <Select
                                                                      labelId="demo-simple-select-standard-label"
                                                                      id="demo-simple-select-standard"
                                                                    //   value={age}
                                                                    //   onChange={handleChange}
                                                                      label="Age"
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
                                                                <Col md={6}>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DemoContainer components={['DatePicker']}>
                                                                      <DatePicker label="Due Date" defaultValue={('')} />
                                                                      
                                                                    </DemoContainer>
                                                                  </LocalizationProvider>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Total Amount"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Paid Amount"
                                                                        id="standard-size-small"
                                                                        size="small"
                                                                        variant="standard"
                                                                      />
                                                                    </Box>
                                                                </Col>
                                                                <Col md={6}>
                                                                  <Box
                                                                        component="form"
                                                                        sx={{
                                                                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                      >
                                                                      <TextField
                                                                      disabled
                                                                        label="Refund (if any)"
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
                                                      <Button type="button"
                                                          className="closeButton"
                                                        >
                                                          Cancel
                                                        </Button>
                                                        <Button type="submit"
                                                          className="closeButton"
                                                          onClick={() =>
                                                           setOpen(false)
                                                          }

                                                        >
                                                          close
                                                        </Button>
                                                      </Modal.Footer>
                                                    </Modal> 

        </>
    )
}
export default CancelBooking;