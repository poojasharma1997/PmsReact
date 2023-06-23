import React from "react";
// import "../../view/View.css";
import "../../formPage.css"
// import Sidebar from "../CommonComponents/Sidebar";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import fileUpload from "../assets/uploadFile.svg";

function AddUser() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add User</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Add Admin User
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
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Name"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Contact No."
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-3"
                                >
                                  <option>Select Hotel</option>
                                  <option value="1">StayView</option>
                                  <option value="2">ABC International</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-3"
                                >
                                  <option>Profit Centre</option>
                                  <option value="1">Kolkata</option>
                                  <option value="2">Bengaluru</option>
                                  <option value="3">Coachin</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Password"
                                  />
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
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Email"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-3"
                                >
                                  <option>Department</option>
                                  <option value="1">Front Office</option>
                                  <option value="2">Accounts</option>
                                  <option value="3">Bank Office</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-3"
                                >
                                  <option>User Role</option>
                                  <option value="1">Cashier</option>
                                  <option value="2">Front Office Clerk</option>
                                  <option value="3">Housekeeping</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Employee ID"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Confirm Password"
                                  />
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
                              <div class="text-center pt-3 col-md-12">
                                <button
                                  type="submit"
                                  class="formButton btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div class="text-center pt-3 col-md-12">
                                <button
                                  type="submit"
                                  class="formReset btn btn-primary"
                                >
                                  Reset
                                </button>
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
  );
}

export default AddUser;
