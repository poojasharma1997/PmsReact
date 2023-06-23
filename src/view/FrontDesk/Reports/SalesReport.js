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
function SalesReport() {
  const columns = [
    {
      name: "Reservation Id",
      selector: (row) => row.reservationid,
    },
    {
      name: "Booking Taken By",
      selector: (row) => row.bookingtakenby,
    },

    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Invoice No",
      selector: (row) => row.invoiceno,
    },
    {
      name: "Arrival Date",
      selector: (row) => row.arrivaldate,
    },
    {
      name: "Departure Date",
      selector: (row) => row.departuredate,
    },
    {
      name: "Booking Source",
      selector: (row) => row.bookingsource,
    },
    {
      name: "Room No",
      selector: (row) => row.roomno,
    },
    {
      name: "Guest Name",
      selector: (row) => row.guestname,
    },
    {
      name: "Bill to Company",
      selector: (row) => row.billtocompany,
    },
    {
      name: "Company Name",
      selector: (row) => row.companyname,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Day(s)",
      selector: (row) => row.day,
    },
    {
      name: "Actual Room Rent",
      selector: (row) => row.actualroomrent,
    },
    {
      name: "Room Rent",
      selector: (row) => row.roomrent,
    },
    {
      name: "SGST",
      selector: (row) => row.sgst,
    },
    {
      name: "CGST",
      selector: (row) => row.cgst,
    },
    {
      name: "Service Charges",
      selector: (row) => row.servicecharges,
    },
    {
      name: "Meal Plan Rent",
      selector: (row) => row.mealplanrent,
    },
    {
      name: "MP SGST",
      selector: (row) => row.mpsgst,
    },
    {
      name: "MP CGST",
      selector: (row) => row.mpcgst,
    },
    {
      name: "Ex Meal",
      selector: (row) => row.exmeal,
    },
    {
      name: "Ex Tax",
      selector: (row) => row.extax,
    },
    {
      name: "Extra Charge Amount",
      selector: (row) => row.extrachargeamount,
    },
    {
      name: "Extra Charge Details",
      selector: (row) => row.extrachargedetails,
    },
    {
      name: "Extra Service(Incl. Tax)",
      selector: (row) => row.extraservice,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    {
      name: "Adjustment Cr. Amount",
      selector: (row) => row.adjustmentcramount,
    },
    {
      name: "Adjustment Dr. Amount",
      selector: (row) => row.adjustmentdramount,
    },
    {
      name: "Total Amount",
      selector: (row) => row.totalamount,
    },
    {
      name: "Paid Amount",
      selector: (row) => row.paidamount,
    },
    {
      name: "Cash",
      selector: (row) => row.cash,
    },
    {
      name: "Draft",
      selector: (row) => row.draft,
    },
    {
      name: "Card",
      selector: (row) => row.card,
    },
    {
      name: "Fund Transfer",
      selector: (row) => row.fundtransfer,
    },
    {
      name: "Cheque",
      selector: (row) => row.cheque,
    },
    {
      name: "E-Wallet",
      selector: (row) => row.ewallet,
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
      reservationid: "#003215	",
      bookingtakenby: "Jhon Doe",

      status: ".....",
      invoiceno: "BN654L9",
      arrivaldate: "01/08/2022",
      departuredate: " 03/08/2022",
      bookingsource: "MMT",
      roomno: "09",
      guestname: "Max Dupri",
      billtocompany: "...",
      companyname: "ABC International",
      amount: "₹3000.00",
      day: "2",
      actualroomrent: "₹3500.00",
      roomrent: " ₹2500.00",
      sgst: "₹250.00",
      cgst: "₹125.00",
      servicecharges: "₹50.00",
      mealplanrent: "0",
      mpsgst: "0",
      mpcgst: "0",
      exmeal: "0",
      extax: "0",
      extrachargeamount: "0",
      extrachargedetails: "lorem ipsum dolor",
      extraservice: "0",
      discount: "0",
      adjustmentcramount: "₹500.00",
      adjustmentdramount: "0",
      totalamount: "0",
      paidamount: "₹2425.00",
      cash: "0",
      draft: "0",
      card: "0",
      fundtransfer: "0",
      cheque: "0",
      ewallet: "0",
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
            <div className="mainHeading  px-3">Sales Report</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Sales Report</div>
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
export default SalesReport;
