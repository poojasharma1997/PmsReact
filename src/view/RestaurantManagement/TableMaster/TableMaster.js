import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon f../../../CommonComponents/Header.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function TableMaster() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add Table</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Add New Table</div>
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
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none  
                                    "
                                >
                                  <option>Section</option>
                                  <option value="1">General</option>
                                  <option value="2">Family</option>
                                  <option value="3">Bar</option>
                                  <option value="3">VIP</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className=""
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Table Name"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Group
                                  className=""
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Status"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Select Location</option>
                                  <option value="1">Indoor</option>
                                  <option value="2">Outdoor</option>
                                  <option value="3">Poolside</option>
                                  <option value="4">Lounge</option>
                                  <option value="5">Special </option>
                                </Form.Select>
                              </div>{" "}
                              <div className="col-md-12">
                                <div className="col--md-12 mt-5 text-center">
                                  <button
                                    type="submit"
                                    className="formButton btn btn-warning custom-b-button mx-4 float-left"
                                  >
                                    {" "}
                                    Select Table Layout
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="shadow p-4 rounded-2">
                            <div className="row gy-3">
                              <div className="col-md-12">
                                <Form.Group
                                  className=""
                                  controlId="formBasicPassword"
                                  mb-3
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Table Number"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Select Capacity</option>
                                  <option value="1">01</option>
                                  <option value="2">02</option>
                                  <option value="3">03</option>
                                  <option value="4">04</option>
                                  <option value="5">05</option>
                                  <option value="6">06</option>
                                  <option value="7">07</option>
                                  <option value="8">08</option>
                                  <option value="9">09</option>
                                  <option value="10">10</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Table Shape</option>
                                  <option value="1">Round </option>
                                  <option value="2">Oval </option>
                                  <option value="3">L-Shape</option>
                                  <option value="3">Square </option>
                                  <option value="3">Rectangle </option>
                                  <option value="3">Pie-Shaped</option>
                                </Form.Select>
                              </div>

                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Floor</option>
                                  <option value="1">1st Floor</option>
                                  <option value="2">2nd Floor</option>
                                  <option value="3">3rd Floor</option>
                                  <option value="4">4th Floor</option>
                                  <option value="5">5th Floor</option>
                                  <option value="6">Ground Floor</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
                                <div className="col--md-12 mt-5 text-center">
                                  <button
                                    type="submit"
                                    className="formButton btn btn-warning custom-button mx-4 float-left"
                                  >
                                    Save
                                  </button>
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
  );
}

export default TableMaster;
