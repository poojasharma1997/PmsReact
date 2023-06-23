import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
// import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
function AllBookings() {
  const columns = [
    {
      name: "Booking ID",
      selector: (row) => row.bookingid,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Guest Name",
      selector: (row) => row.guestname,
    },

    {
      name: "Unit ID",
      selector: (row) => row.unitid,
    },

    {
      name: "Source",
      selector: (row) => row.source,
    },
    {
      name: "Nature",
      selector: (row) => row.nature,
    },
    {
      name: "PAX",
      selector: (row) => row.pax,
    },

    {
      name: "Booking Dates",
      selector: (row) => row.bookingdates,
    },
    {
      name: "Guest Address",
      selector: (row) => row.guestaddress,
    },
    {
      name: "Guest Contact",
      selector: (row) => row.guestcontact,
    },
    {
      name: "Food Plan",
      selector: (row) => row.foodplan,
    },
    {
      name: "Room Rent",
      selector: (row) => row.roomrent,
    },
    {
      name: "RR Tax",
      selector: (row) => row.rrtax,
    },
    {
      name: "POS Amt",
      selector: (row) => row.posamt,
    },
    {
      name: "Ex Charge",
      selector: (row) => row.excharge,
    },
    {
      name: "Ex Service",
      selector: (row) => row.exservice,
    },
    {
      name: "Disc",
      selector: (row) => row.disc,
    },
    {
      name: "Amt Due",
      selector: (row) => row.amtdue,
    },
    {
      name: "Paid",
      selector: (row) => row.paid,
    },
    {
      name: "Options",
      selector: (row) => row.options,
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
      bookingid: "01",
      status: "Confirm",
      guestname: "Shayan Roy",
      unitid: "404",
      source: "Internet",
      nature: "Travel",
      pax: "2",
      bookingdates: "08/08/22",
      guestaddress: "Bongaon",
      guestcontact: "9330678960",
      foodplan: "Dinner",

      roomrent: "1000.00",
      rrtax: "10%",
      posamt: "0",
      excharge: "Nothing",
      exservice: "Nothing",
      disc: "10%",
      amtdue: "0",
      paid: "1000.00",
      options: "No",
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
            <div className="mainHeading  px-3">All Bookings</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          All Single Bookings
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to=""
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Booking Calender</div>
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
export default AllBookings;
