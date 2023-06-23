import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function AddNewCategory() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add New Category</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Add CategoryType
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
                                    placeholder="Category Name"
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
                            <div className="col-md-12">
                              <Form.Select
                                aria-label="Default select example"
                                className="shadow-none"
                              >
                                <option>Category Type</option>
                                <option value="1">Deluxe</option>
                                <option value="2">Semi-Deluxe</option>
                                <option value="3">Standard</option>
                              </Form.Select>
                            </div>
                          </div>
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

export default AddNewCategory;
