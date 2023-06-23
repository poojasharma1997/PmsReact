import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src//assets/edit.svg";
// import deletIcon from "../../src//assets/delete.svg";
// import addCatIcon from "../../src//assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "..//assets/uploadFile.svg";

function AddassetCategory() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add asset Category</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Add asset Category
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
                                    placeholder="asset Category Name"
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
                                    placeholder="asset Category ID"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="shadow p-4 rounded-2">
                            <div className="row gy-3">
                              <div className="col-md-12">
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Description"
                                  />
                                </Form.Group>
                              </div>
                              <div className="col-md-12">
                                <Form>
                                  {["checkbox"].map((type) => (
                                    <div
                                      key={`default-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`Add as Sub Category ${type}`}
                                      />
                                    </div>
                                  ))}
                                </Form>
                              </div>

                              <div className="col-md-12">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none"
                                  mb-3
                                >
                                  <option> Sub Category </option>
                                  <option value="1">Furniture</option>
                                  <option value="2">Electronics</option>
                                  <option value="3">Fixed /asset </option>
                                  <option value="4 ">Liquid /asset</option>
                                </Form.Select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div class="text-center mt-3 col-md-12">
                              <button
                                type="submit"
                                class="formButton btn btn-lg btn-warning"
                              >
                                ADD
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
  );
}

export default AddassetCategory;
