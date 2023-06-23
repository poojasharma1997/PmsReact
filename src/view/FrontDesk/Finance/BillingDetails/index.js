import React, { useState } from "react";
import './billingdetails.css'
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Sidebar from "../Components/Sidebar";
import Header from "../../../../CommonComponents/Header";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import SearchIcon from '@material-ui/icons/Search';
//import fileUpload from "../assets/uploadFile.svg";
import Card from "react-bootstrap/Card";
//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";

import ListGroup from "react-bootstrap/ListGroup";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import { Rating } from "react-simple-star-rating";
// import StarRating from "react-bootstrap-star-rating";
import BootstrapTreeTable from "bootstrap-react-treetable";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PrintIcon from '@material-ui/icons/Print';
import CloseIcon from '@material-ui/icons/Close';
import { TableControl } from 'react-bootstrap-table-control';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineArrowRight } from "react-icons/ai";

import {  AiFillCaretLeft, AiOutlineSearch } from "react-icons/ai";
import {  AiFillEye  } from "react-icons/ai";
import {  AiFillPrinter  } from "react-icons/ai";

import {  FaMobileAlt, FaArrowAltCircleRight  } from "react-icons/fa";

 
import {  RxCross2  } from "react-icons/rx";
import {  FaEnvelope  } from "react-icons/fa";
import Pagination from 'react-bootstrap/Pagination';
import Alert from 'react-bootstrap/Alert';

import DataTable from "react-data-table-component";
import InputGroup from 'react-bootstrap/InputGroup';

//import DateRangePicker from "tw-daterange"
//import Rating from 'react-simple-star-rating'
{
  /* */
}
//import { Rating } from 'material-ui-rating'







function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BilllingDetails() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
{/**/}
  const [date, setDate] = useState(new Date());
{/**/}
const [show9, setShow9] = useState(false);
const handleClose9 = () => setShow9(false);
const handleShow9 = () => setShow9(true);
{/**/}

const [show2, setShow2] = useState(false);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);
{/**/}
const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);
{/**/}
const [show4, setShow4] = useState(false);
const handleClose4 = () => setShow4(false);
const handleShow4 = () => setShow4(true);
{/**/}
{/**/}
{/**/}
const [show11, setShow11] = useState(false);
const handleClose11 = () => setShow11(false);
const handleShow11 = () => setShow11(true);
{/**/}
const [show12, setShow12] = useState(false);
const handleClose12 = () => setShow12(false);
const handleShow12 = () => setShow12(true);
{/**/}
{/**/}
const [show5, setShow5] = useState(false);
const handleClose5 = () => setShow5(false);
const handleShow5 = () => setShow5(true);
{/**/}

const [show7, setShow7] = useState(false);
const handleClose7 = () => setShow7(false);
const handleShow7 = () => setShow7(true);
{/**/}
const [lgShow1, setLgShow1] = useState(false);
const handleClose8 = () => setLgShow1(false);
const handleShow8 = () => setLgShow1(true);


const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };



{/**/}
{/*const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
*/}
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  
  const cityData3 = [
    {
      data: {
        serialNo: "1",
        date: "07/06/2022",
        room: "203",
        refNo: "32",
        particulars: "Gym Usage",
        description: "",
        user: "Admin",
        amount: "₹1400.00 ",
      },
      children: [
        {
          data: {
            serialNo: "1_1",
            date: "",
            room: "",
            refNo: "",
            particulars: "State@10%   ",
            description: "",
            user: "Admin  ",
            amount: " ₹140.00         ",
          },
          children: [],
        },
        {
          data: {
            serialNo: "1_2",
            date: "",
            room: "",
            refNo: "",
            particulars: "City@3%",
            description: "",
            user: "Admin  ",
            amount: "₹42.00  ",
          },
          children: [],
        },
      ],
    },
    {
      data: {
        serialNo: "2",
        date: "07/06/2022",
        room: "203",
        refNo: "32",
        particulars: "Water Sports",
        description: "",
        user: "Admin  ",
        amount: "₹300.00 ",
      },
      children: [
        {
          data: {
            serialNo: "2_1",
            date: "",
            room: "",
            refNo: "",
            particulars: "State@10%",
            description: "",
            user: "Admin",
            amount: " ₹30.00",
          },
          children: [],
        },
        {
          data: {
            serialNo: "2_2",
            date: "",
            room: "",
            refNo: "",
            particulars: "City@3%",
            description: "",
            user: "Admin",
            amount: "₹9.00",
          },
          children: [],
        },
      ],
    },
    {
      data: {
        serialNo: "3",
        date: "07/06/2022",
        room: "203",
        refNo: "37",
        particulars: "Baby Crib",
        description: "",
        user: "Admin",
        amount: "₹100.00 ",
      },
      children: [
        {
          data: {
            serialNo: "3_1",
            date: "",
            room: "",
            refNo: "",
            particulars: "State@10%",
            description: "",
            user: "Admin",
            amount: " ₹10.00",
          },
          children: [],
        },
        {
          data: {
            serialNo: "3_2",
            date: "",
            room: "",
            refNo: "",
            particulars: "City@3%",
            description: "",
            user: "Admin",
            amount: "₹3.00  ",
          },
          children: [],
        },
      ],
    },


    {
      data: {
        serialNo: "4",
        date: "07/06/2022",
        room: "205",
        refNo: "39",
        particulars: "Room Charges",
        description: "",
        user: "Admin",
        amount: "₹500.00 ",
      },
      children: [
        {
          data: {
            serialNo: "4_1",
            date: "",
            room: "",
            refNo: "",
            particulars: "State@10%",
            description: "",
            user: "Admin",
            amount: " ₹50.00",
          },
          children: [],
        },
        {
          data: {
            serialNo: "4_2",
            date: "",
            room: "",
            refNo: "",
            particulars: "City@3%",
            description: "",
            user: "Admin",
            amount: "₹15.00  ",
          },
          children: [],
        }, 
      ],
    },


  ];
  

const cityData7 = [
  {
    data: {
      serialNo: " 1",
      date: "04/06/2022",
      room: "203	",
      refNo: "32	",
      particulars: "Room Charges	",
      description: "	",
      user: "Admin	",
      amount: "₹1400.00 ",
    },
    children: [
      {
        data: {
          serialNo: "4",
          date: "04/06/2022",
          room: "203	",
          refNo: "35",
          particulars: "State@10%	",
          description: "	[Qty 10.00]	",
          user: "Admin	",
          amount: " ₹200.00 		",
        },
        children: [],
      },
      {
        data: {
          serialNo: "5",
          date: "04/06/2022",
          room: "203		",
          refNo: "36",
          particulars:    "City@3%",
          description: "	[Qty 10.00]	",
          user: "Admin	",
          amount : "₹1400.00  "
        },
        children: [],
      },  
    ],
  },
];

  const treeColumns = [
    {
      dataField: "serialNo",
      heading: "Sr. No",
    },
    {
      dataField: "date",
      heading: "Date",
    },
    {
      dataField: "room",
      heading: "Room",
    },
    {
      dataField: "refNo",
      heading: "Ref. No.",
    },
    {
      dataField: "particulars",
      heading: "Particulars",
    },
    {
      dataField: "description",
      heading: "Desc",
    },
    {
      dataField: "user",
      heading: "User",
    },
    {
      dataField: "amount",
      heading: "Amount(s)",
    },
  ];


















  const treeControls = {};

  return (
    <>
      {/* <Sidebar></Sidebar>*/}
      <div className="mainContent" id="mainContent">
        <Header></Header>

        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Billing Details</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Billing &amp; Transaction Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="addForm">
                      <form action="#">
                        <p style={{fontWeight:'normal',float:'left',paddingRight:'15px',fontSize:'14px'}}><strong>Room:</strong> 108-DDR</p>
                        <p style={{fontWeight:'normal',float:'left',paddingRight:'15px',fontSize:'14px'}}><strong>Folio No:</strong> 57</p>
                        <p style={{fontWeight:'normal',float:'left',paddingRight:'15px',fontSize:'14px'}}><strong>Res No.:</strong> 38</p>
                        <a href="#"><EditIcon style={{float:'right',color:'#FF9100'}}/></a>
                        <div className="clearfix"></div>
                        <div className="gy-3">
                          <div className="col-md-12">
                            <div className="row">
                            <Grid container spacing={3}>
                              <Grid item xs={12} sm={4}>
                                  <Paper className="boxx">
                                  <div style={{color:'#FF9100'}}>Guest Information</div>
                                    <hr style={{margin:'5px 0'}}/>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}>Ms Leslice Fienderbur<br/>
                                    628, Bassel Street, Metaire 70001, LA<br/>
                                    United States</p>
                                    <hr style={{margin:'5px 0 12px',clear:'both'}}/>
                                    <PhoneAndroidIcon style={{float:'left', marginRight:'10px'}}/><p style={{fontWeight:'normal',float:'left',fontSize:'14px'}}>985-285-7162 / 985-285-7162</p>
                                    <hr style={{margin:'5px 0 12px',clear:'both'}}/>
                                    <EmailIcon style={{float:'left', marginRight:'10px'}}/><p style={{fontWeight:'normal',float:'left',fontSize:'14px'}}> Fienderbur@gmail.com</p>
                                    <div style={{clear:'both'}}></div>
                                  </Paper>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <Paper className="boxx">
                                    <div style={{color:'#FF9100'}}>Stay Information</div>
                                    <hr style={{margin:'5px 0'}}/>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Room Category:</strong>&nbsp;Standard</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Arrival:</strong>&nbsp; 04.11.2022 12PM</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Departure:</strong>&nbsp; 05.11.2022 11PM</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Nights:</strong>&nbsp; 1</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Rate Type:</strong>&nbsp; Room Only / NonSmoking</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Fax:</strong>&nbsp; 2 Adult / 1 Child</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Reservation Type:</strong>&nbsp; Confirm Booking</p>
                                  </Paper>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <Paper className="boxx">
                                  <div style={{color:'#FF9100'}}>Other Information</div>
                                  <hr style={{margin:'5px 0'}}/>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Identity:</strong>&nbsp;Lorem</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>ID No:</strong>&nbsp; 0011256</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Registration No.:</strong>&nbsp; 0256901256</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Gender:</strong>&nbsp; Male</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>VIP Status:</strong>&nbsp; No</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Booking Through:</strong>&nbsp; MMT</p>
                                    <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Market:</strong>&nbsp; Lorem</p>
                                  </Paper>
                              </Grid>
                            </Grid>
                              <div className="col-md-12 tab-bg">
                                <div class="text-center pt-3 col-md-12">
                                <AppBar position="static">
                                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{float:'left'}}>
                                    <Tab label="General Information" {...a11yProps(0)} />
                                    <Tab label="Room Charges" {...a11yProps(1)} />
                                    <Tab label="Folio Details" {...a11yProps(2)} />
                                  </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0} className="billingdetails-tbpanel">
                                <a href="#" className="billingdetails-edit"><EditIcon/></a>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4}>
                                        <Paper className="boxx">
                                        <div className="billingdetails-title">
                                          Billing Information
                                          <div className="clearfix"></div>
                                          <FormControlLabel
                                            control={(
                                              <Checkbox />
                                            )}
                                            label="Sale as Complimentary"
                                          />
                                        </div>
                                        <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Rate:</strong>&nbsp;Normal</p>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Bill to:</strong>&nbsp; Company/Customer Name</p>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Tax Exemption ID:</strong>&nbsp; 220156</p>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Payment Mode:</strong>&nbsp; Cash</p>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Release Date:</strong>&nbsp; 02.05.2022</p>
                                          <p style={{fontWeight:'normal',fontSize:'14px'}}><strong>Term:</strong>&nbsp; 10%</p>
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Room Rent:</strong>₹2200</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Exbed(RR):</strong>₹2200</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px'}}><strong>RR Tax:</strong>5%</p>
                                          <div className="clearfix"></div>
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Room Rent:</strong>₹2200</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Exbed(MP):</strong>₹2200</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px'}}><strong>MP Tax:</strong>5%</p>
                                          <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Total RR:</strong>₹4400</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px',paddingRight:'5px'}}><strong>Total MP:</strong>₹4400</p>&nbsp;
                                          <p style={{float:'left',fontWeight:'normal',fontSize:'13px'}}><strong>Reservation:</strong>10%</p>
                                          <div className="clearfix"></div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper className="boxx">
                                          <div className="billingdetails-title float-left">Sharer Information</div>
                                          <Button variant="outlined" className="addButton float-right" onClick={handleShow}>+Add</Button>
                                          <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <table className="table table-striped">
                                            <thead>
                                              <tr>
                                                <th style={{textAlign:'left'}}>Room No</th>
                                                <th style={{textAlign:'right'}}>Name</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td style={{textAlign:'left'}}>203</td>
                                                <td style={{textAlign:'right'}}>John Doe</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </Paper>
                                        <br/>
                                        <Paper className="boxx">
                                          <div className="billingdetails-title float-left">Inclusion</div>
                                          <Button variant="outlined" className="addButton float-right">+Add</Button>
                                          <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <p style={{fontSize:'14px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc magna, tincidunt at iaculis id, gravida non justo. Nam interdum posuere enim vel aliquam. Vivamus eu lorem sodales, gravida non justo. </p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper className="boxx">
                                          <div className="billingdetails-title float-left">Remarks</div>
                                          <Button variant="outlined" className="addButton float-right" onClick={handleShow7}>+Add</Button>
                                          <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <table className="table table-striped">
                                            <thead>
                                              <tr>
                                                <th>Type</th>
                                                <th>Remarks</th>
                                                <th>Rating</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>Housekeeping</td>
                                                <td>Good</td>
                                                <td>
                                                  <Rating
                                                    onClick={handleRating}
                                                    initialValue={rating}
                                                    size={15}
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </Paper><br/>
                                        <Paper className="boxx">
                                          <div className="billingdetails-title float-left">Hoteliar Remarks</div>
                                          <Button variant="outlined" className="addButton float-right" onClick={handleShow8}>+Add</Button>
                                          <div className="clearfix"></div>
                                          <hr style={{margin:'5px 0'}}/>
                                          <table className="table table-striped">
                                            <thead>
                                              <tr>
                                                <th>Guest</th>
                                                <th>Remarks</th>
                                                <th>Rating</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>John Doe</td>
                                                <td>Good</td>
                                                <td>
                                                  <Rating
                                                    onClick={handleRating}
                                                    initialValue={rating}
                                                    size={15}
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </Paper>
                                    </Grid>
                                  </Grid>
                                  <div style={{marginTop:"25px",textAlign:"right"}}>
                                      <Button variant="contained" className="customButton btn btn-primary mr-4">
                                        Print Invoice
                                      </Button>
                                      <Button variant="contained" className="customButton btn btn-primary">
                                        Audit Trail
                                      </Button>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                  Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                  <div className="top-spacing">
                                  <Form.Group className="mb-4">
                                    <Form.Control
                                      type="date"
                                      name="datepic"
                                      className="textBox"
                                      value={date}
                                      onChange={(e) => setDate(e.target.value)}
                                    />
                                  </Form.Group>
                                  <Form.Select aria-label="Default select example" className="shadow-none mb-4 textBox">
                                    <option>Type</option>
                                    <option value="1">Adjustments</option>
                                    <option value="2">Bank</option>
                                    <option value="3">Cash</option>
                                    <option value="4">City Ledger</option>
                                    <option value="5">Discount</option>
                                    <option value="6">Extra Charges</option>
                                    <option value="7">Room Charges</option>
                                    <option value="8">Transfer</option> 
                                  </Form.Select>
                                  <Form.Select aria-label="Default select example" className="shadow-none mb-4 textBox">
                                    <option>Type</option>
                                  </Form.Select>
                                  <Form.Select aria-label="Default select example" className="shadow-none mb-4 textBox">
                                    <option>Folio</option>
                                    <option>57-Ms Leslice Fienderbur</option>
                                  </Form.Select>
                                  <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control className='shadow-none textBox' type="text" placeholder="Rec/Vou"/>
                                  </Form.Group>
                                  <Form.Select aria-label="Default select example" className="shadow-none mb-4 currencyBox">
                                    <option>Currency</option>
                                    <option>$</option>
                                    <option>₹</option>
                                    <option>￡</option>
                                  </Form.Select>
                                  <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control className='shadow-none amountBox' type="text" placeholder="Amount"/>
                                  </Form.Group>   
                                  <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control className='shadow-none textBox' type="text" placeholder="Comments"/>
                                  </Form.Group>   
                                  <div className="clearfix"></div>
                                  <div style={{marginTop:"25px",textAlign:"right"}}>
                                    <Button variant="contained" className="customButton btn btn-primary">Add</Button>
                                  </div>
                                  <div className="clearfix"></div>
                                  <div style={{fontSize:'14px',marginTop:'25px', float:'left'}}>
                                    <a href="#" className="folio-anchor"><ArrowForwardIcon/> Void</a>
                                    <a href="#" className="folio-anchor"> Move</a>
                                        <FormControlLabel
                                          control={(
                                            <Checkbox />
                                          )}
                                          label="Itemize List"
                                          className="custom-check"
                                        />
                                        <FormControlLabel
                                          control={(
                                            <Checkbox />
                                          )}
                                          label="Hide Unposted"
                                          className="custom-check2"
                                        />
                                        <FormControlLabel control={(<ArrowLeftRoundedIcon />)} label="Unposted Inclusion" />
                                        <FormControlLabel control={(<ArrowLeftRoundedIcon />)} label="Posted Inclusion" />
                                      </div>
                                      <div className="clearfix"></div>
                                        <br/><br/>
                                        <BootstrapTreeTable
                                          columns={treeColumns}
                                          tableData={cityData3.map((c) => ({
                                            ...c,
                                            data: { ...c.data },
                                          }))}
                                          control={treeControls}
                                        />
                                        <hr/>
                                        <div className="row">
                                          <div className="col-lg-9">
                                            <a href="#" className="folio-link" onClick={() => setShow9(true)}>Split Folio</a>
                                            <a href="#" className="folio-link" onClick={handleShow5}>New Folio</a>
                                            <a href="#" className="folio-link" onClick={handleShow2}>Cut Folio</a>
                                            <a href="#" className="folio-link" onClick={handleShow3}>Bill To</a>
                                            <a href="#" className="folio-link" onClick={handleShow4}>Folio Operation</a>
                                          </div>
                                          <div className="col-lg-3">
                                            <strong><p> Balance: ₹2300.00</p></strong>
                                          </div>
                                        </div> 
                                        <hr/> 
                                        <div className="clearfix"></div>
                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4 textBox2 float-right">
                                          <option>Select Guest Name</option>
                                          <option value="1">John Doe</option>
                                        </Form.Select> 
                                      <FormControlLabel
                                          control={(
                                            <Checkbox />
                                          )}
                                          label="Checkout Mail"
                                          className="float-right"
                                        />
                                        <div className="clearfix"></div>
                                        <hr/>
                                        <div className="col-lg-2 float-left">
                                            <a href="#" style={{textDecoration:'none'}}>Checked by Admin</a>
                                        </div>
                                        <div className="col-lg-8 float-right">
                                          <Button variant="contained" className="customButton btn btn-primary mr-4">
                                            Upload Files
                                          </Button>
                                          <Button variant="contained" className="customButton btn btn-primary mr-4">
                                            Print Invoice
                                          </Button>
                                          <Button variant="contained" className="customButton btn btn-primary mr-4">
                                            Audit Trail
                                          </Button>
                                          <Button variant="contained" className="customButton btn btn-primary mr-4">
                                            Cancel
                                          </Button>
                                          <Button variant="contained" className="customButton btn btn-primary">
                                            Save
                                          </Button>
                                        </div>
                                        <div className="clearfix"></div>
                                        </div>
                                      </TabPanel>
                                </div>
                              </div>
                            </div>
                          </div>

                         
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sharer Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>                                                  
        <div className="p-2">
        <table className="table table-striped">
          <tr>
            <th>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>Room No.
            </th>
            <th style={{textAlign:'right'}}>Customer Name</th>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>203
            </td>
            <td style={{textAlign:'right'}}>John Doe</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>204
            </td>
            <td style={{textAlign:'right'}}>Max Bryan</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck"style= {{marginRight:'9px'}} />205
            </td>
            <td style={{textAlign:'right'}}>James Marlow</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck"style= {{marginRight:'9px'}} />206
            </td>
            <td style={{textAlign:'right'}}>Sean Conner</td>
          </tr>
        </table>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>


     
  
      <Modal show={show9} onHide={handleClose9} className="customModal">
        <Modal.Header closeButton>
         <Modal.Title>Split Folio</Modal.Title>
        </Modal.Header>
          <Modal.Body>      
            <Grid container spacing={3} className="mt-3">
              <Grid item xs={12} sm={6} >
                <h5 className="mb-4">Source Folio</h5>
                <div className='col-lg-4 float-left'>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="folio"
                      aria-label="folio"
                      aria-describedby=""   
                    />
                    <InputGroup.Text id=""><AiOutlineSearch/></InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="col-lg-5 mx-3 float-left">
                  <Form.Select aria-label="Default select example" className="shadow-none">
                    <option>All folio of this group</option>
                    <option value="1">All folio of this group</option>
                    <option value="2">Selected folio</option>
                  </Form.Select>
                </div>
                <div className="clearfix"></div>
                <div className="table-responsive">
                  <BootstrapTreeTable
                      columns={treeColumns}
                      tableData={cityData3.map((c) => ({
                      ...c,
                      data: { ...c.data },
                      }))}
                      control={treeControls}
                  />
                </div>
              </Grid>
              <FaArrowAltCircleRight className="splitFolioIcon"/>
              <Grid item xs={12} sm={6} >
                <h5 className="mb-4">Destination Folio</h5>
                <div className='col-lg-4'>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="folio"
                      aria-label="folio"
                      aria-describedby=""
                    />
                    <InputGroup.Text id=""><AiOutlineSearch/></InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="clearfix"></div>
                <div className="table-responsive">
                   <BootstrapTreeTable
                      columns={treeColumns}
                      tableData={cityData3.map((c) => ({
                      ...c,
                      data: { ...c.data },
                    }))}
                    control={treeControls}
                  />
                </div>
              </Grid>
            </Grid>          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show2} onHide={handleClose2} className="customModal2">
        <Modal.Header closeButton>
          <Modal.Title>Cut Folio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="All Charges"
            /> 
            <div className="clearfix"></div>
            <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Room Charges"
            />
            <div className="clearfix"></div>
            <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Extra Charges"
            />                         
        </Modal.Body>
        <Modal.Footer>
          <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Generate invoice number on / post checkout"
              className="float-left"
            />
          <Button variant="primary" onClick={handleClose2} className="modalBtn">
            Cut
          </Button>
          <Button variant="secondary" onClick={handleClose2} className="modalBtn">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>New Folio</Modal.Title>
        </Modal.Header>
        <Modal.Body>                                    
            <div className="col-lg-12" >
              <div className="mb-4">
                <Form.Select aria-label="Default select example" className="shadow-none select-sharername">
                    <option>Sharer</option>
                    <option value="1">Mr. David C Leo</option>
                    <option value="2">Mr. John Doe</option>
                </Form.Select>
                <SearchIcon className="modal-searchicon"/>
                <div className="clearfix"></div>    
              </div>
              <FormControlLabel
                control={(
                  <Checkbox />
                )}
                label="Show tariff on print folio"
              />
              <div className="clearfix"></div>
              <FormControlLabel
                control={(
                  <Checkbox />
                )}
                label="Generate invoice number on / post checkout"
              /> 
            </div>
            <div className="clearfix"></div>                                            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5} className="modalBtn">
            Save
          </Button>
          <Button variant="primary" onClick={handleClose5} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Bill To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select aria-label="Default select example" className="shadow-none select-sharername">
            <option>Sharer</option>
            <option value="1">Mr. David C Leo</option>
            <option value="2">Mr. John Doe</option>
          </Form.Select>
          <SearchIcon className="modal-searchicon" onClick={handleShow12}/>
          <div className="clearfix"></div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3} className="modalBtn">
            Save
          </Button>
          <Button variant="primary" onClick={handleClose3} className="modalBtn">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={show4} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Folio Operation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table table-striped">
              <tr>
                <th>Folio</th>
                <th>Bill To</th>
                <th>Balance</th>
                <th>Operations</th>
             </tr>
             <tr>
              <td>27</td>
              <td>GoIbibo</td>
              <td>₹791.00</td>
              <td><VisibilityIcon/><PrintIcon/><CloseIcon /><EmailIcon/></td>
            </tr>
            <tr>
              <td>102</td>
              <td>GoIbibo</td>
              <td>₹791.00</td>
              <td><VisibilityIcon/><PrintIcon/><CloseIcon /><EmailIcon/></td>
            </tr>
            <tr>
              <td>103</td>
              <td>GoIbibo</td>
              <td>₹791.00</td>
              <td><VisibilityIcon/><PrintIcon/><CloseIcon /><EmailIcon/></td>
            </tr>
          </table>
          <div>
              <a href="#" className="folio-link"onClick={handleShow5}>New Folio</a>
              <a href="#" className="folio-link">Send Invoice </a>
              <a href="#" className="folio-link">Master Folio</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
          <Modal.Title>Add Remarks</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div className="p-2">
        <table className="table table-striped">
          <tr>
            <th>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>Email
            </th>
            <th>Rating</th>
            <th>Date And Time</th>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>john007@gmail.com
            </td>
            <td>
              <Rating
                onClick={handleRating}
                initialValue={rating}
                size={15}
              />
            </td>
            <td>06/04/2022 12:05PM</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>john007@gmail.com
            </td>
            <td>
              <Rating
                onClick={handleRating}
                initialValue={rating}
                size={15}
              />
            </td>
            <td> 06/04/2022 12:05PM</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" id="autoSizingCheck"style= {{marginRight:'9px'}} />john007@gmail.com
            </td>
            <td>
              <Rating
                onClick={handleRating}
                initialValue={rating}
                size={15}
              />
            </td>
            <td>06/04/2022 12:05PM</td>
          </tr>
        </table>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      


      <Modal show={lgShow1} onHide={() => setLgShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hoteliar Remarks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="p-2">
           <table className="table table-striped"> 
              <tr>
                <th>
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>Name
                </th>
                <th>Behaviour</th>
                <th>Payment</th>
                <th>Activity</th>
              </tr>
              <tr>
                <td>
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>Sam Biden
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>John Doe
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck" style= {{marginRight:'9px'}}/>Jim Ross
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
                <td>
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={15}
                  />
                </td>
              </tr>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

     


      <Modal show={show12} onHide={handleClose12} className="customModal" >
        <Modal.Header closeButton>
        <Modal.Title>Contact Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">     
            <div className="col-lg-3">
              <div className="p-2 rounded-2">
                <Form.Select
                  aria-label="Default select example"
                  className="shadow-none"
                >
                  <option>Contact Type</option>
                  <option value="1">Guest</option>
                  <option value="2">Owner</option>
                  <option value="3">Travel Agent</option>
                  <option value="4">Vendor</option>
                </Form.Select>
                </div>
            </div>
            <div className="col-lg-3">
              <div className="p-2 rounded-2">
                <Form.Group className="" controlId="formBasicPassword  mb-3">
                  <Form.Control
                    className="shadow-none"
                    type="password"
                    placeholder="Business Name"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-2 rounded-2">
                <Form.Group className="" controlId="formBasicPassword  mb-3">
                  <Form.Control
                    className="shadow-none"
                    type="password"
                    placeholder="Phone No"
                  />
               </Form.Group>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-2 rounded-2">
                <Form.Group className="" controlId="formBasicPassword  mb-3">
                  <Form.Control
                  className="shadow-none"
                  type="password"
                  placeholder="Identity No"
                />
              </Form.Group>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-2 rounded-2">
                <Form.Group className="" controlId="formBasicPassword mb-3">
                <Form.Control
                  className="shadow-none"
                  type="password"
                  placeholder="Mobile No"
                />
                </Form.Group>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <button type="submit" className="customButton btn btn-primary">Search</button>  
            </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-12 p-2 mt-5">
              <table className="table table-striped"> 
                <tr>
                  <th style={{width:'16%'}}>Name</th>
                  <th style={{width:'16%'}}>City/State</th>
                  <th style={{width:'14%'}}>Country</th>
                  <th style={{width:'14%'}}>Vip Status</th>
                  <th style={{width:'14%'}}>Phone</th>
                  <th style={{width:'14%'}}>Mobile</th>
                  <th style={{width:'14%'}}>Identity</th>
                </tr>
                <tr>
                  <td>GoIbibo</td>
                  <td>-</td>
                  <td>India</td>
                  <td>-</td>
                  <td>26573111</td>
                  <td>9876543210</td>
                  <td>GK321Z89</td>
                </tr>
                <tr>
                  <td>Make My Trip</td>
                  <td>-</td>
                  <td>India</td>
                  <td>-</td>
                  <td>26573111</td>
                  <td>9876543210</td>
                  <td>GK321Z89</td>
                </tr>
                <tr>
                  <td>GoIbibo</td>
                  <td>-</td>
                  <td>India</td>
                  <td>-</td>
                  <td>26573111</td>
                  <td>9876543210</td>
                  <td>GK321Z89</td>
                </tr>
              </table>
            </div>                                           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} className="modalBtn">
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose} className="modalBtn">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    </>
  );
}
export default BilllingDetails;
