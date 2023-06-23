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

function SystemSettings() {
    return (
       <>
        <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">System Settings</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                        System Settings
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
                                                                <h5 className="mb-5">Restaurant Configuration</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Site Name*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Language*</option>
                                                                            <option value="1">English</option>
                                                                            <option value="2">Spanish</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Default Currecncy*</option>
                                                                            <option value="1">Rupees</option>
                                                                            <option value="2">USD</option> 
                                                                            <option value="2">Euro</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Accounting Method*</option>
                                                                            <option value="1">AVCO (Average Cost Method)</option>
                                                                            <option value="2">FIFO (First In First Out)</option> 
                                                                            <option value="2">LIFO (Last In Last Out)</option> 
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
                                                                
                                                        <Form.Group className="mb-4 m-70" controlId="defaultemail">
                                                            <Form.Control className='shadow-none' type="text" placeholder="Default Email*" required/>
                                                        </Form.Group>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Default Customer Group*</option>
                                                            <option value="1">General</option>
                                                            <option value="2">Reseller</option> 
                                                            <option value="2">Distributor</option> 
                                                            <option value="2">New Customer (+10)</option>
                                                        </Form.Select>

                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                            <option>Maintenance Mode*</option>
                                                            <option value="1">No</option>
                                                            <option value="2">Yes</option> 
                                                        </Form.Select>

                                                        <Form.Group className="mb-4" controlId="themeview">
                                                            <Form.Control className='shadow-none' type="text" placeholder="Theme View*" required/>
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
                                                                    <div className="gy-3">
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>RTL Support*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Login Captcha*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Rows Per Page*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Date Format*</option>
                                                                            <option value="1">dd/mm/yyyy</option>
                                                                            <option value="2">dd-mm-yyyy</option> 
                                                                            <option value="1">mm/dd/yyyy</option>
                                                                            <option value="2">mm-dd-yyyy</option> 
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
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Time Zone*</option>
                                                                            <option value="1">Asia/Kolkata</option>
                                                                            <option value="2">USA</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Registration Verification*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Allow Registration*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
                                                                        </Form.Select> 

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Registration Notification*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
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
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Calender*</option>
                                                                            <option value="1">Shared</option>
                                                                            <option value="2">Private</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Default Warehouse*</option>
                                                                            <option value="1">Kitchen (KN)</option>
                                                                            <option value="2">Store Room (SR)</option> 
                                                                            <option value="2">Warehouse (W01)</option> 
                                                                            <option value="2">Bar (BA)</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Default Biller*</option>
                                                                            <option value="1">Hotel Stayview</option>
                                                                        </Form.Select> 

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Hotel Integrated*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
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
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Segregate Restaurant & Bar*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Only liquoe in Bar/Pos*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Show logon in POS bill*</option>
                                                                            <option value="1">No</option>
                                                                            <option value="2">Yes</option> 
                                                                        </Form.Select> 

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Service tax applies on*</option>
                                                                            <option value="1">All Items</option>
                                                                            <option value="2">Food Items</option> 
                                                                            <option value="3">Liquor Items</option> 
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
                                                                <h5 className="mb-5">Products</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product Tax*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Racks*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product Variants*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option>
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product Expiry*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option>
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
                                                                    <div className="gy-3 m-70">
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Watermark*</option>
                                                                            <option value="1">Yes</option>
                                                                            <option value="2">No</option> 
                                                                        </Form.Select>

                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                                    <Form.Control className='shadow-none' type="text" placeholder="Image Size(Width)*" required/>
                                                                                </Form.Group>
                                                                            </div>

                                                                            <div className="col-6">
                                                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                                    <Form.Control className='shadow-none' type="text" placeholder="Image Size(Height)*" required/>
                                                                                </Form.Group>
                                                                            </div>

                                                                            <div className="col-6">
                                                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                                    <Form.Control className='shadow-none' type="text" placeholder="Thumbnail Size(Width)*" required/>
                                                                                </Form.Group>
                                                                            </div>

                                                                            <div className="col-6">
                                                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                                    <Form.Control className='shadow-none' type="text" placeholder="Thumbnail Size(Height)*" required/>
                                                                                </Form.Group>
                                                                            </div>
                                                                        </div>          
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
                                                                <h5 className="mb-5">Sales</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Over selling*</option>
                                                                            <option value="1">Yes</option>
                                                                            <option value="2">No</option> 
                                                                        </Form.Select>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product level Discount*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product count to fix barcode input*</option>
                                                                            <option value="1">4</option>
                                                                            <option value="2">5</option>
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Reference Format*</option>
                                                                            <option value="1">Year/Sequence Number (SL/2014/001)</option>
                                                                            <option value="2">Year/Month/Sequence Number (SL/2014/08/001)</option>
                                                                            <option>Sequence Number</option>
                                                                            <option>Random Number</option>
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Product Serial*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
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
                                                                    <div className="gy-3 m-70">
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Cart item addition method*</option>
                                                                            <option value="1">Add new item to cart</option>
                                                                            <option value="2">Increase item quantity, if it already exist in cart</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Order Tax*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Auto Detect Barcode*</option>
                                                                            <option value="1">Disable</option>
                                                                            <option value="2">Enable</option> 
                                                                        </Form.Select>

                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                            <option>Invoice View*</option>
                                                                            <option value="1">Standard</option>
                                                                            <option value="2">Tax Invoice</option> 
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
                                                                <h5 className="mb-5">Prefix</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Sales Reference Prefix*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Delivery Reference Prefix*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Transfer Reference Prefix*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="REturn Sale Prefix*" required/>
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
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Quotation Reference Prefix*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Expense Prefix*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Payment Reference Prefix*" required/>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Purchase Reference Prefix*" required/>
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
                                                                <h5 className="mb-5">Award Points</h5>
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="customerawardpoints">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Customer Award Points*" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="staffawardpoints">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Staff Award Points*" required/>
                                                                        </Form.Group>    
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

export default SystemSettings