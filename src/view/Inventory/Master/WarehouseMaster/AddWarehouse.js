import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function AddWarehouse() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add Warehouse</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Add Warehouse</div>
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
                                    placeholder="Code"
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
                                    placeholder="Name"
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
                                    placeholder="Phone"
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
                                    placeholder="Email"
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
                                    placeholder="Address"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="shadow p-4 rounded-2">
                            <div className="addFormHeading pb-3">
                              Warehouse Map
                            </div>
                            <Form.Group className="" controlId="formBasicEmail">
                              <Form.Label for="file" className="w-100">
                                <div className="fileLabel">
                                  <div className="text-center">
                                    <div className="filelableText">Browse</div>
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

                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-auto">
                                <div class="text-center pt-3 col-md-12">
                                  <button
                                    type="submit"
                                    class="formButton btn btn-warning"
                                  >
                                    Submit
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

export default AddWarehouse;
