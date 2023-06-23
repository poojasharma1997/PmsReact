import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";

function AddProduct() {
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Add Product</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Add Product</div>
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
                                  className="mb-4"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Product Name"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="mb-4"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Product Code"
                                  />
                                </Form.Group>

                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-4"
                                >
                                  <option> Select Category </option>
                                  <option value="1">Food And Grocery</option>
                                  <option value="2">Fruits & Vegetables</option>
                                  <option value="3">Packet Food </option>
                                  <option value="4 ">Drinks</option>
                                  <option value="3">Fixed Assets</option>
                                </Form.Select>

                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-4"
                                >
                                  <option> Select Sub Category </option>
                                  <option value="1">Food And Grocery</option>
                                  <option value="2">Fruits & Vegetables</option>
                                  <option value="3">Packet Food </option>
                                  <option value="4 ">Drinks</option>
                                </Form.Select>

                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-4"
                                >
                                  <option> Select UOM</option>
                                  <option value="1">KG</option>
                                  <option value="2">Piece</option>
                                  <option value="3">Ltr.</option>
                                  tr. <option value="3">Gm.</option>
                                </Form.Select>

                                <Form.Group
                                  className="mb-4"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Purchase Price"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="mb-4"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Control
                                    className="shadow-none"
                                    type="password"
                                    placeholder="Selling Price"
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
                                <Form.Select
                                  aria-label="Default select example"
                                  className="shadow-none mb-4"
                                >
                                  <option> Select WareHouse</option>
                                  <option value="1">Store Room</option>
                                  <option value="2">Kitchen</option>
                                  <option value="3">Others</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <Form>
                                {["checkbox"].map((type) => (
                                  <div key={`default-${type}`} className="mb-4">
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Is product is as raw material in restrurant? ${type}`}
                                    />
                                  </div>
                                ))}

                                {["checkbox"].map((type) => (
                                  <div key={`default-${type}`} className="mb-4">
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Is Stock is maintain for item?
                                      ${type}`}
                                    />
                                  </div>
                                ))}

                                {["checkbox"].map((type) => (
                                  <div key={`default-${type}`} className="mb-4">
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Is it Asset? ${type}`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </div>

                            <div className="col-md-12">
                              <div className="row gy-3">
                                <div className="col-md-12">
                                  <div className="addFormHeading pb-3">
                                    Add Product Image
                                  </div>
                                  <Form.Group
                                    className=""
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label for="file" className="w-100">
                                      <div className="fileLabel">
                                        <div className="text-center">
                                          <div className="filelableText">
                                            Add Attachments
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

export default AddProduct;
