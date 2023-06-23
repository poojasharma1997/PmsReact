import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";
function AddNewAsset() {
  return (
    <>
      {/* <Sidebar></Sidebar>*/}
      <div className="mainContent" id="mainContent">
        <Header></Header>
        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add New Asset</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Add New Asset
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
                                    className=""
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset Name"
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
                                      placeholder="Asset Id"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none"
                                  >
                                    <option>Select Category</option>
                                    <option value="1">Inventory/Stock</option>
                                    <option value="2">Housekeeping</option>
                                    <option value="3">Machinery</option>
                                    <option value="4">Liquid Asset</option>
                                    <option value="5">Fixed Asset</option>
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none"
                                  >
                                    <option>Select Sub Category</option>
                                    <option value="1">Furniture</option>
                                    <option value="2">Electronics</option>
                                    <option value="3">Bathroom Need</option>
                                    <option value="4">Others</option>
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none"
                                  >
                                    <option>Select Vendor</option>
                                    <option value="1">ABC Enterprise</option>
                                    <option value="2">AXC Enterprise</option>
                                    <option value="3">PQX Enterprise</option>
                                    <option value="4">Others</option>
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className=""
                                    controlId="formBasicPassword  mb-3"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset UOM"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className=""
                                    controlId="formBasicPassword  mb-3"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset QTY"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className=""
                                    controlId="formBasicPassword  mb-3"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset Owner"
                                    />
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
                                  <Form.Group
                                    className=""
                                    controlId="formBasicPassword  mb-3"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset Purchase Price"
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
                                      placeholder="Asset Purchase Date"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className=""
                                    controlId="formBasicPassword  mb-3"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="password"
                                      placeholder="Asset Depreciation Percentage"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none"
                                  >
                                    <option>Add ownership</option>
                                    <option value="1">First Hand</option>
                                    <option value="2">Second Hand</option>
                                    <option value="3">Third Hand</option>
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <div className="addFormHeading pb-3">
                                    Add Asset Image
                                  </div>
                                  <Form.Group
                                    className=""
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label for="file" className="w-100">
                                      <div className="fileLabel">
                                        <div className="text-center">
                                          <div className="filelableText">
                                            Add Attachments{" "}
                                          </div>
                                          {/* <div className="fileLableImg">
                                                                            <img src={fileUpload} />
                                                                        </div> */}
                                        </div>
                                      </div>
                                    </Form.Label>
                                    <Form.Control
                                      className="shadow-none d-none"
                                      type="file"
                                      id="file"
                                      placeholder="Enter your email"
                                    />
                                  </Form.Group>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="col--md-12 mt-5 text-center">
                                <button
                                  type="submit"
                                  className="formButton btn btn-warning custom-button mx-4 float-left"
                                >
                                  Add
                                </button>
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
  );
}
export default AddNewAsset;