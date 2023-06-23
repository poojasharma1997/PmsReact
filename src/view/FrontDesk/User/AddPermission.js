import React from 'react';
// import "../view/Style.css";
// import Sidebar from '../CommonComponents/Sidebar';
import Header from '../../../CommonComponents/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import DataTable from "react-data-table-component";

function AddPermission() { 


    return (
            <>
                {/* <Sidebar></Sidebar> */}
                <div className='mainContent'id="mainContent">
                    <Header></Header>
                    <div className='section'>
                        <div className='row gy-4'>
                            <div className='col-12 pt-3'>
                                <div className='mainHeading px-3'>
                                    Add Permission
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='sectionContent shadow'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='sectionContentHeader py-2 px-4 mb-4 rounded-3'>
                                                <div className='row d-flex align-items-center'>
                                                    <div className='col'>
                                                        <div className='sectionHeaderHeaing'>
                                                            Add Admin Roles
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='sectionContentBody'>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={12}>
                                                        <Paper>
                                                            <div className="shadow p-4 rounded-2">
                                                                <div className="gy-3">
                                                                    <div className="row">
                                                                        <div className="col-lg-3">
                                                                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                                <Form.Control className='shadow-none' type="text" placeholder="Admin Role Name" required/>
                                                                            </Form.Group>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                                                                                <option>Admin Type</option>
                                                                                <option value="1">Super Admin</option>
                                                                                <option value="2">Hotel Admin</option>
                                                                                <option value="3">Husekeeper</option>
                                                                                <option value="4">Cashier</option> 
                                                                            </Form.Select>
                                                                        </div>
                                                                        <div className="clearfix"></div>
                                                                        <h5 className="sub-heading">Module Privileges</h5>
                                                                        <h6 className="legend">Travel Agent</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <label style={{float:'left'}}>Travel Agent Commission</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Inventory</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <label style={{float:'left'}}>Inventory Master</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <div style={{clear:'both'}}></div>
                                                                                <label style={{float:'left'}}>Asset Master</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Inventory Report</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">User</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <label style={{float:'left'}}>User Role</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <label style={{float:'left',marginTop:'5px'}}>User List</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                    )}
                                                                                    label="View"
                                                                                    style={{padding:'0px',float:'right'}}
                                                                                />
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Bookings</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Booking List</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}
                                                                                />
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div style={{clear:'both'}}></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Book Dormitory</label>
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="Delete"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="Edit"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="View"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Book Room</label>
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="Delete"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="Edit"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                            <FormControlLabel
                                                                            control={(
                                                                                <Checkbox />
                                                                            )}
                                                                            label="View"
                                                                            style={{padding:'0px',float:'right'}}
                                                                            />
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div style={{clear:'both'}}></div>
                                                                        <h6 className="legend">Coupon</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Coupon Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div style={{clear:'both'}}></div>
                                                                        <h6 className="legend">Room &amp; Dorm Master</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Room Creation</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                 <label style={{float:'left',marginTop:'5px'}}>Room Rate Plan</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Dorm Creation</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Amenities</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Category Type</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                 <label style={{float:'left',marginTop:'5px'}}>Sub-Category List</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Category List</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Finance</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Billing Details</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Folio Details</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>All Transaction</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Misc. Income</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Expense Category Master</label>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Delete"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Edit"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                    control={(
                                                                                        <Checkbox />
                                                                                    )}
                                                                                    label="Add"
                                                                                    style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>General Information</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <div className="clearfix"></div>
                                                                            <label style={{float:'left'}}>Guest Folio</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                            <label style={{float:'left'}}>Expenses</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                            <label style={{float:'left'}}>Vendor List</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Hotel Master</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Hotel Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>        
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Task Master</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>All Tasks</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>        
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Settings</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Nature of Visit</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Area Code</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Behaviour Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Broker/OTA Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div> 
                                                                                <label style={{float:'left',marginTop:'5px'}}>POS Settings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Invoice Settings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Payment Settings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>        
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left',marginTop:'5px'}}>Profit Center</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left',marginTop:'5px'}}>Company Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Facility Master</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>System Settings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Currency Settings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Auto Generate Invoice</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>         
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 class="legend">Guest</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Guests</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>Discount Rules</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>       
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Corporates</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>      
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Housekeeping</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Unit Status</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div> 
                                                                                <label style={{float:'left'}}>Staff Assignment</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>Housekeeping Log</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>Assigned Maids</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Housekeeping Staff</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>Staff Assign Room</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>Detailed Room Status</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Certificates</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Certificates</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Certificates</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>Enquiry</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Extra Services</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left'}}>All Laundry Services</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left'}}>AdHoc Bills</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>All Laundry Rates</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Other Services</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Night Audit</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Night Audit</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Tax Plan Setup</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Tax Type</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Tax Rule</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/>    
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Tax category</label>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                            </Grid>
                                                                        </Grid> 
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Reports</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>All Bookings</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Daily Reservation Summary</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Reservation Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Occupancy Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Asset Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>User Login Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>KOT Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Monthly Reservation Summary</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Reservation Summary</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Cancel Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Travel Agent Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Sales Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                                <label style={{float:'left', marginTop:'5px'}}>Invoice Report</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                                <div className="clearfix"></div>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">KOT</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>KOT Placed</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>KOT Cancel</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Table Master</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Table</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Waiter Master</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Waiter List</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                                <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                            </Grid>
                                                                        </Grid>
                                                                        <div className="clearfix"></div>
                                                                        <h6 className="legend">Sales</h6>
                                                                        <Grid container spacing={3}>
                                                                            <Grid item xs={12} sm={6}>
                                                                            <label style={{float:'left', marginTop:'5px'}}>Sales</label>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Delete"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Edit"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="View"
                                                                                style={{padding:'0px',float:'right'}}/>
                                                                            <FormControlLabel
                                                                                control={(
                                                                                    <Checkbox />
                                                                                )}
                                                                                label="Add"
                                                                                style={{padding:'0px',float:'right'}}/> 
                                                                            </Grid>
                                                                        </Grid> 
                                                                   </div>   
                                                                </div>
                                                            </div>
                                                        </Paper>
                                                    </Grid>
                                                </Grid>
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

export default AddPermission