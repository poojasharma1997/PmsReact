import React from "react";


import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function Amenities() {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Amenities Name",
      selector: (row) => row.title,
    },
    {
      name: "Symbol",
      selector: (row) => row.symbol,
    },
    {
      name: "Status",
      cell: (row) => (
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            className="shadow-none"
          />
        </Form>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="row mx-0 gy-1 flex-nowrap">
          <div className="col-auto pe-0">
            <Link to="" className="tableEditButton">
              <img src="./assets/edit.svg" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-auto">
            <Link to="" className="tableEditButton">
              <img src="./assets/delete.svg" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      title: "Air Conditioner",
      symbol: "airconditioner.png",
    },
    {
      id: 2,
      title: "Televisionr",
      symbol: "tv.png",
    },
    {
      id: 3,
      title: "Room Heater",
      symbol: "heater.jpg",
    },
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Amenities List</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Amenities List
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addAmenities"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Amenities</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />
                    {/* <Table responsive className="sectiontable amenities">
                      <thead>
                        <tr>
                          <th>Amenities Name</th>
                          <th>Symbol</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Air Conditioner</td>
                          <td>airconditioner.png</td>
                          <td>
                            <Form>
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="shadow-none"
                              />
                            </Form>
                          </td>
                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Televisionr</td>
                          <td>tv.png</td>
                          <td>
                            <Form>
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="shadow-none"
                              />
                            </Form>
                          </td>
                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Room Heater</td>
                          <td>heater.jpg</td>
                          <td>
                            <Form>
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="shadow-none"
                              />
                            </Form>
                          </td>
                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table> */}
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

export default Amenities;
