import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function AddNewVendor() {
  return (
    <div className="mainContent" id="mainContent">
    <Header></Header>
    <div className="section">
      <div className="row gy-4">
        <div className="col-12 pt-3">
          <div className="mainHeading px-3">Add New Vendor</div>
        </div>
        <div className="col-12">
          <div className="sectionContent shadow">
            <div className="row">
              <div className="col-12">
                <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                  <div className="row d-flex align-items-center">
                    <div className="col">
                      <div className="sectionHeaderHeaing">
                        Add New Vendor
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
                                                                    <Form.Control className='shadow-none' type="password" placeholder="Organization Name" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Control className='shadow-none' type="password" placeholder="Organization Address" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Control className='shadow-none' type="password" placeholder="CIN No" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Control className='shadow-none' type="password" placeholder="Register Email" />
                                                                </Form.Group>
                                                            </div>




                                                          {/*  <div className="col-md-12">
                                                                <Form.Select aria-label="Default select example" className="shadow-none">
                                                                    <option>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <Form.Check 
                                                                    type="switch"
                                                                    id="custom-switch"
                                                                    label="Type"
                                                                />
                                                            </div>*/}
                                                        </div>
                                                    </div>
                                                </div>
{/**/}
                                          <div className="col-md-6">
                                                <div className="shadow p-4 rounded-2">
                                                <div className="row gy-3">
                                                <div className="col-md-12">
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Control className='shadow-none' type="password" placeholder="Register Ph. No." />
                                                                </Form.Group>
                                                            </div>
                                                        <div>
                                                            <div className="col-md-12">

                                        
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Control className='shadow-none' type="password" placeholder="GST No." />
                                                                </Form.Group>
                                                                </div>
                                                            </div>  
                                                            <div className="col-md-12">
                                                           
                                                        <div className="col-auto">
                                                                <Form.Select aria-label="Default select example" className="shadow-none"  mb-3>
                                                                    <option>select type of vendor</option>
                                                                    <option value="1">Manufacturer</option>
                                                                    <option value="2">Supplier</option>
                                                                    <option value="3">Retailer</option>
                                                                </Form.Select>
                                                           
                                                            </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                            <div className="col-auto">
                                                                <Form.Check 
                                                                    type="switch"
                                                                    id="custom-switch"
                                                                    label="Type"
                                                                />
                                                            </div>
                                                            </div>
                                                            </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div class="text-center pt-3 col-md-12"><button type="submit" class="formButton btn btn-warning">Submit</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div class="text-center pt-3 col-md-12"><button type="submit" class="formButton btn btn-danger">Reset</button>
                                                            </div>
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
    )
}

export default AddNewVendor