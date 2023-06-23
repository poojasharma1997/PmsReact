import React from "react";
import Header from "../../../CommonComponents/Header";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import {
    alpha,
    withStyles,
    makeStyles,
    createTheme
  } from '@material-ui/core/styles';
// import fileUpload from "../assets/uploadFile.svg";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
     // color: theme.palette.secondary.dark,
      color: '#4d4d4d',
      backgroundColor: theme.palette.secondary.light
    },
  });

function PosSettings() {
    return (
        <>
           
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">POS Settings</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                        POS Settings
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="addForm">
                                            <form action="#">
                                                <div className="row gy-3">
                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                <h5 className="mb-5">POS Configuration</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Display Products*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Default Biller*</option>
                                                                            <option value="1">Hotel Stayview</option>
                                                                            <option value="2">Hotel International</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>On-screen Keyboard*</option>
                                                                            <option value="1">Yes</option>
                                                                            <option value="2">No</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Rounding*</option>
                                                                            <option value="1">To nearest number (Integer)</option>
                                                                            <option value="2">Disable</option> 
                                                                            <option value="3">To nearest 0.05</option> 
                                                                            <option value="3">To nearest 0.50</option>
                                                                            <option value="3">To next number (Integer)</option>
                                                                        </Form.Select>

                                                                        <Form.Group className="mb-4" controlId="pospincode">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="POS Pin Code*" required/>
                                                                        </Form.Group>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Default Customer*</option>
                                                                            <option value="1">Walk-in Customer</option>
                                                                            <option value="2">In-house Customer</option> 
                                                                            <option value="3">Tourists</option> 
                                                                        </Form.Select>     
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-6">
                                                    <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                        <div className="shadow p-4 rounded-2">
                                                        <div className="gy-3">

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4 m-70" required>
                                                            <option>Product Button Color*</option>
                                                            <option value="1">Default</option>
                                                            <option value="2">Primary</option> 
                                                            <option value="3">Info</option> 
                                                            <option value="4">Warning</option>
                                                            <option value="5">Danger</option>
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Enable Java applet*</option>
                                                            <option value="1">No</option>
                                                            <option value="2">Yes</option> 
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Default Category*</option>
                                                            <option value="1">Bengali</option>
                                                            <option value="2">A-la-carte Menu</option>
                                                            <option value="3">Chinese</option>
                                                            <option value="4">Chicken Preparation</option>
                                                            <option value="5">Egg Preparation</option> 
                                                            <option value="6">Fish Preparation</option>
                                                            <option value="7">Paneer</option>
                                                            <option value="8">Pakora</option>
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Display Time*</option>
                                                            <option value="1">No</option>
                                                            <option value="2">Yes</option> 
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Tooltip*</option>
                                                            <option value="1">No</option>
                                                            <option value="2">Yes</option> 
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Discount Applicable On*</option>
                                                            <option value="1">Total + Tax</option>
                                                            <option value="2">Total</option> 
                                                        </Form.Select>
                                                        </div>
                                                        </div>
                                                        </Paper>
                                                        </Grid>
                                                        </Grid>
                                                    </div>


                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                <h5 className="mb-5">Custom fields for receipts</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="customfieldtitle">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Custom Field 1 Title*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="customfieldtitle2">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Custom Field 2 Title*" required/>
                                                                        </Form.Group>      
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                    <div className="gy-3 m-70">
                                                                        <Form.Group className="mb-4" controlId="customfieldvalue">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Custom Field 1 Value*" required/>
                                                                        </Form.Group>  

                                                                        <Form.Group className="mb-4" controlId="customfieldvalue2">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Custom Field 2 Value*" required/>
                                                                        </Form.Group>           
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                <h5 className="mb-5">Shortcuts</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="focusadditeminput">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Focus Add Item Input*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="addcustomer">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Add Customer*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="cancelsale">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Cancel Sale*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="customfieldvalue2">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Finalize Sale*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="closeregister">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Close Register*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="addmanualitemtosale">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Add Manual Item to Sale*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="togglecategoriesslider">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Toggle Categories Slider*" required/>
                                                                        </Form.Group>      
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                    <div className="gy-3 m-70">
                                                                        <Form.Group className="mb-4" controlId="suspendsale">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Suspend Sale*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="todayssale">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Today's Sale*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="customerinput">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Customer Input*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="toggleslider">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Toggle Subcategories Slider*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="printitemlist">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Print Item List*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="opensuspendedsale">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Open Suspended Sale*" required/>
                                                                        </Form.Group>          
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                   
                                                    <div className="col-md-6">
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                <h5 className="mb-5">Payment Gateways</h5>
                                                                    <div className="gy-3">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                        <option>Paypal Pro*</option>
                                                                        <option value="1">No</option>
                                                                        <option value="2">Yes</option> 
                                                                    </Form.Select>
                                                                        
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                        <option>Stripe*</option>
                                                                        <option value="1">No</option>
                                                                        <option value="2">Yes</option> 
                                                                    </Form.Select>   
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <div class="text-center pt-3 col-md-12"><button type="submit" className="customButton btn btn-primary">Update Settings</button>
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
            </div>
        </>
    )
}

export default PosSettings