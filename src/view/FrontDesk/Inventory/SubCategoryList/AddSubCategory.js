import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function AddSubCategory() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add Sub_Category</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Add Sub_Category
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
                                  <option>Sub-Category ID</option>
                                  <option value="1">Deluxe</option>
                                  <option value="2">Semi-Deluxe</option>
                                  <option value="3">Standard</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-12">
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
                              </div>
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
                                <option>Amenities ID</option>
                                <option value="1">Air Conditioner</option>
                                <option value="2">Room Heater</option>
                                <option value="3">Premium View</option>
                                <option value="4">Balcony</option>
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

export default AddSubCategory;
