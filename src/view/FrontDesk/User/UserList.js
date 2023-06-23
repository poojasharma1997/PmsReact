import React from "react";
// import "../view/View.css";
// import Sidebar from "../CommonComponents/Sidebar";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
// import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
function UserList() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Contact No.",
      selector: (row) => row.contactno,
    },

    {
      name: "Department",
      selector: (row) => row.department,
    },

    {
      name: "Hotel",
      selector: (row) => row.hotel,
    },
    {
      name: "User Role",
      selector: (row) => row.userrole,
    },
    {
      name: "Profit Centre",
      selector: (row) => row.profitcentre,
    },

    {
      name: "Employee ID",
      selector: (row) => row.employeeid,
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

    // {
    //   name: "Status",
    //   cell: (row) => (
    //     <Form>
    //       <Form.Check
    //         type="switch"
    //         id="custom-switch"
    //         className="shadow-none"
    //       />
    //     </Form>
    //   ),
    // },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="row mx-0 gy-1 flex-nowrap">
    //       <div className="col-auto pe-0">
    //         <Link to="" className="tableEditButton">
    //           <img src={editIcon} alt="" className="img-fluid" />
    //         </Link>
    //       </div>
    //       <div className="col-auto">
    //         <Link to="" className="tableEditButton">
    //           <img src={deletIcon} alt="" className="img-fluid" />
    //         </Link>
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  const data = [
    {
      name: "John Doe",
      email: "john007@stayview.in",
      contactno: "9876543210",
      department: "Management",
      hotel: "Stay View",
      userrole: "Cashier",
      profitcentre: "Coachin",
      employeeid: "SVL6540",
      action: "",
    },
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">User List</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">User List</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addUser"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add User</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />
                    {/* <Table responsive className="sectiontable categoryList">
                      <thead>
                        <tr>
                          <th>Season</th>
                          <th>Start Date </th>
                          <th>End Date </th>
                          <th>Room Category </th>
                          <th>Meal Plan </th>
                          <th>Base Price </th>
                          <th>Occupancy Wise Updated Price </th>
                          <th>Status </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Peak</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Standard</td>
                          <td>EP</td>
                          <td>1500.00</td>
                          <td>Single---2000.00</td>
                          <td>
                            <MDBSwitch /> <br />
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
                          <td>Mid</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Deluxe</td>
                          <td>AP</td>
                          <td>1500.00</td>
                          <td>Double---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
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
                          <td>Low</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Semi Deluxe</td>
                          <td>No Meal Plan</td>
                          <td>1500.00</td>
                          <td>Triple---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
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
                          <td>Special</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Deluxe</td>
                          <td>EP</td>
                          <td>1500.00</td>
                          <td>Default---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
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
export default UserList;
