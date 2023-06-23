import React, { useState } from "react";
// import '../../view/Style.css'
import Header from "../../../../CommonComponents/Header";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import fileUpload from "../assets/uploadFile.svg";


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



function AssignedRoomforMaid() {

    const [date, setDate] = useState(new Date());

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

    return (
        <>
           {/* <Sidebar></Sidebar>*/}
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">Assign Room for Maid</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                        Assign Room for Maid
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="addForm assignroomformaid">
                                            <form action="#">
                                                <Form.Select aria-label="Default select example" className="shadow-none textBox float-right mb-4">
                                                    <option>Select Room Type</option>
                                                    <option value="1">Executive Java</option>
                                                    <option value="2">Premium Python</option> 
                                                </Form.Select>
                                                <Form.Select aria-label="Default select example" className="shadow-none textBox float-right mb-4">
                                                    <option>Select Room Status</option>
                                                    <option value="1">Dirty</option>
                                                    <option value="2">Clean</option>
                                                    <option value="3">Under Maintenance</option>
                                                    <option value="4">Under Repair</option>
                                                    <option value="5">Inspect</option>
                                                    <option value="6">TouchUp</option>
                                                    <option value="6">Undefined</option> 
                                                </Form.Select>
                                                <Form.Select aria-label="Default select example" className="shadow-none textBox float-right mb-4">
                                                    <option>Select Room No.</option>
                                                    <option value="1">101</option>
                                                    <option value="2">102</option>
                                                    <option value="3">103</option>
                                                    <option value="4">104</option>
                                                    <option value="5">105</option>
                                                    <option value="6">106</option>
                                                </Form.Select>
                                                <div className="clearfix"></div>  
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                    <Grid container spacing={1} >
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color1">
                                                            <div className="roomCategory">Executive Java</div>
                                                            <div>102</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color2">
                                                            <div className="roomCategory">Premium Python</div>
                                                            <div>103</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color3">
                                                            <div className="roomCategory">Executive Java</div>
                                                            <div>104</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color4">
                                                            <div className="roomCategory">Premium Python</div>
                                                            <div>104</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color5">
                                                            <div className="roomCategory">Premium Python</div>
                                                            <div>105</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Paper className="paperBox color6">
                                                            <div className="roomCategory">Executive Java</div>
                                                            <div>106</div>
                                                            <div className="clearfix"></div>
                                                            <button variant="outlined" className="avilabilityBtn">
                                                                Availability
                                                            </button>
                                                        </Paper>
                                                        </Grid>
                                                    </Grid>
                                                    </div>

                                                    <div className="col-lg-8">
                                                        <AppBar position="static">
                                                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{float:'left'}}>
                                                                <Tab label="Assigned Task" {...a11yProps(0)} />
                                                                <Tab label="Assigned Task List" {...a11yProps(1)} />
                                                                <Tab label="Completed Task" {...a11yProps(2)} />
                                                                <Tab label="Reassigned Task" {...a11yProps(3)} />
                                                                <Tab label="Today's Log" {...a11yProps(4)} />
                                                            </Tabs>
                                                        </AppBar>
                                                        <TabPanel value={value} index={0} className="assignroomformaid-tbpanel mt-3">
                                                            <table className="table table-striped">
                                                                <tr>
                                                                    <th>Room No</th>
                                                                    <th>Task</th>
                                                                    <th>Staff</th>
                                                                    <th>Remark</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>102</td>
                                                                    <td>
                                                                        <Form.Select aria-label="Default select example" className="shadow-none">
                                                                            <option>Select Task</option>
                                                                            <option value="1">Cleaning</option>
                                                                            <option value="2">Dusting</option>
                                                                            <option value="3">Washing Cloths</option>
                                                                        </Form.Select> 
                                                                    </td>
                                                                    <td>
                                                                        <Form.Select aria-label="Default select example" className="shadow-none">
                                                                            <option>Staff Name</option>
                                                                            <option value="1">John Doe</option>
                                                                            <option value="2">Max Dupri</option>
                                                                            <option value="3">Sam Curran</option>
                                                                        </Form.Select> 
                                                                    </td>
                                                                    <td>
                                                                        <Form.Group controlId="remark">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Remark"/>
                                                                        </Form.Group>
                                                                    </td>
                                                                    <td>
                                                                        <button type="submit" className="customButton btn btn-primary">Submit</button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </TabPanel>
                                                        <TabPanel value={value} index={1} className="assignroomformaid-tbpanel mt-3">
                                                            <table className="table table-striped">
                                                                <tr>
                                                                    <th>Room No</th>
                                                                    <th>Task</th>
                                                                    <th>Staff</th>
                                                                    <th>Remark</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>102</td>
                                                                    <td>Cleaning</td>
                                                                    <td>John Doe</td>
                                                                    <td>Lorem ipsum</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>106</td>
                                                                    <td>Washing CLothes</td>
                                                                    <td>Sam Curran</td>
                                                                    <td>Lorem ipsum</td>
                                                                </tr>
                                                            </table>
                                                        </TabPanel>
                                                        <TabPanel value={value} index={2} className="assignroomformaid-tbpanel mt-3">
                                                            <table className="table table-striped">
                                                                <tr>
                                                                    <th>Room No</th>
                                                                    <th>Task</th>
                                                                    <th>Staff</th>
                                                                    <th>Remark</th>
                                                                    <th>Staff Status</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>102</td>
                                                                    <td>Cleaning</td>
                                                                    <td>John Doe</td>
                                                                    <td>Lorem ipsum</td>
                                                                    <td>Completed</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>106</td>
                                                                    <td>Washing CLothes</td>
                                                                    <td>Sam Curran</td>
                                                                    <td>Lorem ipsum</td>
                                                                    <td>Reassigned</td>
                                                                </tr>
                                                            </table>
                                                        </TabPanel>
                                                        <TabPanel value={value} index={3} className="assignroomformaid-tbpanel mt-3">
                                                            <table className="table table-striped">
                                                                <tr>
                                                                    <th>Room No</th>
                                                                    <th>Task</th>
                                                                    <th>Staff</th>
                                                                    <th>Reassign</th>
                                                                    <th>Remark</th>
                                                                    <th>Urgency</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>106</td>
                                                                    <td>Washing Clothes</td>
                                                                    <td>Sam Curran</td>
                                                                    <td>1</td>
                                                                    <td>Lorem ipsum</td>
                                                                    <td>
                                                                        <Form.Select aria-label="Default select example" className="shadow-none">
                                                                            <option>Urgency</option>
                                                                            <option value="1">High</option>
                                                                            <option value="2">Medium</option>
                                                                            <option value="3">Low</option>
                                                                        </Form.Select> 
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </TabPanel>
                                                        <TabPanel value={value} index={4} className="assignroomformaid-tbpanel mt-3">
                                                            <table className="table table-striped">
                                                                <tr>
                                                                    <th>Room No</th>
                                                                    <th>Assigned to</th>
                                                                    <th>Rask</th>
                                                                    <th>Current Status</th>
                                                                    <th>Reassign</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>105</td>
                                                                    <td>John DOe</td>
                                                                    <td>Dusting</td>
                                                                    <td>Dirty</td>
                                                                    <td>1</td>
                                                                    <td>Started</td>
                                                                </tr>
                                                            </table>
                                                        </TabPanel>
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
            </div>
        </>
    )
}

export default AssignedRoomforMaid