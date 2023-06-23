import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function RestLaundryRates() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add Rest Laundry Rates</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Add Rest Laundry Rates
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
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Cloth Type</option>
                                  <option value="1">Shirt</option>
                                  <option value="2">Trousers</option>
                                  <option value="3">Saree</option>
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
                                    placeholder="Laundry Rate"
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
                                    placeholder="Fabric Type"
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
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                >
                                  <option>Fabric</option>
                                  <option value="1">Linen</option>
                                  <option value="2">Cotton</option>
                                  <option value="3">Denim</option>
                                  <option value="4">Leather</option>
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
                                    placeholder="Dry Cleaning Rate"
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
                                    placeholder="Default Type"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col--md-12">
                                <div class="text-center mt-3 col-md-12">
                                  <button
                                    type="submit"
                                    class="formButton btn btn-warning"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                              <div className="col--md-12">
                                <div class="text-center mt-3 col-md-12">
                                  <button
                                    type="submit"
                                    class="formButton btn btn-danger"
                                  >
                                    Reset
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

export default RestLaundryRates;
