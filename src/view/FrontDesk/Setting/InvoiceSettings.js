import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import fileUpload from "../assets/uploadFile.svg";

function InvoiceSettings() {
    return (
        <>
            {/* <Sidebar></Sidebar> */}
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">Invoice Settings</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                    Invoice Settings
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
                                                        <div className=" shadow p-4 rounded-2">
                                                            <div className="row gy-3">

                                                            <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Booking Source</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Nature of Visit</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Service Tax</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Luxury Tax</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Invoice Suffix" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Room No</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Food Plan</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>
                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Extra Charge</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>
                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Printer</option>
                                                                        <option value="1">Dot Matrix Printer</option>
                                                                        <option value="2">Ink-Jet/Laser Printer</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Font Size</option>
                                                                        <option value="1">10PX</option>
                                                                        <option value="2">12PX</option>
                                                                        <option value="3">14PX</option>
                                                                        <option value="3">16PX</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>POS Paid Item Show Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Adjustment Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Invoice No.</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Color you want to apply to your hotel name" />
                                                                    </Form.Group>
                                                                   
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Footer Text" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                               
                                                               
                                                              
                                                                {/* <div className="col-md-12">
                                                                    <Form.Check 
                                                                        type="switch"
                                                                        id="custom-switch"
                                                                        label="Type"
                                                                    />
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="shadow p-4 rounded-2">
                                                        <div className="row gy-3">
                                                        <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Booking Note</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Company Details</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Service Charge</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' text="multiline" type="password" placeholder="Invoice Prefix" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Room Category</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Service</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Laundry</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Total Tax" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Logo</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>POS Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>POS Segregation Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Discount Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Food Name Settings</option>
                                                                        <option value="1">Applicable</option>
                                                                        <option value="2">Not Applicable</option>

                                                                    </Form.Select>
                                                                </div>
                   
                   
                   
                                                               
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Declaration Text" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                               
                                                                </div>
                                                                </div>
                                                                {/* <div className="shadow p-4 rounded-2">

                                                           <div className="addFormHeading pb-3">Upload Amenities Icon</div>
                                                            <Form.Group className="" controlId="formBasicEmail">
                                                                <Form.Label for="file" className="w-100">
                                                                    <div className="fileLabel">
                                                                        <div className="text-center">
                                                                        <div className="filelableText">
                                                                            Drag and drop image(s) here or click
                                                                        </div>
                                                                       
                                                                        </div>
                                                                    </div>
                                                                </Form.Label>
                                                                <Form.Control className='shadow-none d-none' type="file" id="file" placeholder="Enter your email" />
                                                                
                                                            </Form.Group>
                                                        </div> */}
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <div class="text-center pt-3 col-md-12"><button type="submit" class="formButton btn btn-primary">Submit</button>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div class="text-center pt-3 col-md-12"><button type="submit" class="formReset btn btn-primary">Reset</button>
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

export default InvoiceSettings