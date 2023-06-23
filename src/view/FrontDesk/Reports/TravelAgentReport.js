import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
// import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
function TravelAgentReport() {
  const columns = [
    {
      name: "Sr. No",
      selector: (row) => row.srno,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },

    {
      name: "Type Name",
      selector: (row) => row.typename,
    },
    {
      name: "Reservation Id",
      selector: (row) => row.reservationid,
    },
    {
      name: "Invoice",
      selector: (row) => row.invoice,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Room Number",
      selector: (row) => row.roomnumber,
    },
    {
      name: "Booking Status",
      selector: (row) => row.bookingstatus,
    },
    {
      name: "Applicable On",
      selector: (row) => row.applicableon,
    },
    {
      name: "Applied Amount",
      selector: (row) => row.appliedamount,
    },
    {
      name: "Commision Amount",
      selector: (row) => row.commisionamount,
    },
    {
      name: "GST Amount",
      selector: (row) => row.gstamount,
    },
    {
      name: "Commision Paid",
      selector: (row) => row.commisionpaid,
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
      id: 1,
      srno: "1",
      type: "OTA",
      typename: "MMT",

      reservationid: "BK060358	",
      invoice: "Sorry! Invoice not generated",
      date: "11/07/2017	",
      roomnumber: "706	",
      bookingstatus: "Advance	",
      applicableon: "Total Bill",
      appliedamount: "7772.00",
      commisionamount: "772.00",
      gstamount: "0.00",
      commisionpaid: "Paid",
    },
    {
      id: 2,
      season: "Mid",
      startDate: "06/01/2022",
      endDate: "06/03/2022",
      roomCategory: "Deluxe",
      mealPlan: "AP",
      basePrice: "1500.00",
      owuPrice: "Double---2000.00",
    },
    {
      id: 3,
      season: "Low",
      startDate: "06/01/2022",
      endDate: "06/03/2022",
      roomCategory: "Semi Deluxe",
      mealPlan: "No Meal Plan",
      basePrice: "1500.00",
      owuPrice: "Triple---2000.00",
    },
    {
      id: 4,
      season: "Special",
      startDate: "06/01/2022",
      endDate: "06/03/2022",
      roomCategory: "Deluxe",
      mealPlan: "EP",
      basePrice: "1500.00",
      owuPrice: "Default---2000.00",
    },
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Travel Agent Report</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Travel Agent Report
                        </div>
                      </div>
                      {/* <div className="col-auto">
                        <Link
                          to=""
                          className="addCategory d-flex align-items-center rounded-5"
                        > */}
                      {/* <span className="catIcon d-flex me-3">
                            <img
                              src={addCatIcon}
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span> */}
                      {/* <div className="categoryText">Add Season</div> */}
                      {/* </Link>
                      </div> */}
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
export default TravelAgentReport;
