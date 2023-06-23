import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import fileUpload from "../assets/uploadFile.svg";

function AddCompany() {
    return (
        <>
            {/* <Sidebar></Sidebar> */}
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">Add Company</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                    Add Company
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
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Company Name" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Incorporation Type</option>
                                                                        <option value="1">Limited</option>
                                                                        <option value="2">Private Limited</option>
                                                                        <option value="3">Sole Proprietorship</option>
                                                                        <option value="3">Partnership</option>

                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Industry Type</option>
                                                                        <option value="1">IT</option>
                                                                        <option value="2">Manufacturing</option>
                                                                        <option value="3">Hospitality</option>
                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Select aria-label="Default select example" className="shadow-none mb-3">
                                                                        <option>Field of Work</option>
                                                                        <option value="1">Software</option>
                                                                        <option value="2">IOT</option>
                                                                        <option value="3">Hardware</option>
                                                                    </Form.Select>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="No. of Employee" />
                                                                    </Form.Group>
                                                                   
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="No. of Branch" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                               
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="GST No." />
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
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' text="multiline" type="password" placeholder="Address" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Pin Code" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="City" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="State" />
                                                                    </Form.Group>
                                                                   
                                                                </div>
                                                               
                                                                <div className="col-md-12">
                                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                        <Form.Control className='shadow-none' type="password" placeholder="Country" />
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

export default AddCompany