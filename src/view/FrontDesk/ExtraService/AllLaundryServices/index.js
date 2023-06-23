import React from "react";

import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from '../../src/assets/edit.svg';
// import deletIcon from '../../src/assets/delete.svg';
// import addCatIcon from '../../src/assets/plus.svg';
import Table from "react-bootstrap/Table";
import { MDBSwitch } from "mdb-react-ui-kit";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";

function AllLaundryServices() {
  const columns = [
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "BillingPref.",
      selector: (row) => row.billingPref,
    },
    {
      name: "ReceiveDate	",
      selector: (row) => row.receiveDate,
    },
    {
      name: "DeliveryDate	",
      selector: (row) => row.deliveryDate,
    },
    {
      name: "ItemCount	",
      selector: (row) => row.itemCount,
    },
    {
      name: "JobStatus	",
      selector: (row) => row.jobStatus,
    },

    {
      name: "PaymentStatus	",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "TotalAmountPaid",
      selector: (row) => row.totalAmountPaid,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    {
      name: "GrandTotal	",
      selector: (row) => row.grandTotal,
    },
    {
      name: "SpecialReq.",
      selector: (row) => row.specialReq,
    },
  ];
  const data = [
    {
      id: 1,
      type: "Single Booking",
      name: " John Doe	",
      billingPref: "Add to Booking Bill	",
      receiveDate: "31-07-2022	",
      deliveryDate: "02-08-2022	",
      itemCount: "5",
      jobStatus: "Pending",
      paymentStatus: " Pending",
      totalAmountPaid: "₹0.00	",
      discount: "₹50.00	",
      grandTotal: "₹250.00	",
      specialReq: "Do not use soda",
    },
    {
      id: 2,
      type: "Group Booking",
      name: " Max Dupri	",
      billingPref: "Add to Booking Bill	",
      receiveDate: "31-07-2022	",
      deliveryDate: "02-08-2022	",
      itemCount: "4",
      jobStatus: "Pending",
      paymentStatus: " Pending",
      totalAmountPaid: "₹0.00	",
      discount: "₹30.00	",
      grandTotal: "₹230.00	",
      specialReq: "Do not use soda",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Laundry Services</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Al Laundry Services
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
                          <div className="categoryText">
                            Add Laundry Services
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />

                    {/*  <Table responsive className='sectiontable categoryList'>
                                                <thead>
                                                    <tr>
                                                    <MDBCheckbox />
                                                    <th>Sr. No</th>
                                                        <th>Type</th>
                                                        <th>Name	</th>
                                                        <th>Billing Pref.	</th>
                                                         <th>Receive Date	</th>
                                                         <th>Delivery Date	</th>
                                                         <th>Item Count	</th>
                                                         <th>Job Status	</th>
                                                         <th>Payment Status	</th>
                                                         <th>Total Amount Paid</th>
                                                         <th>Discount</th>
                                                         <th>Grand Total</th>
                                                         <th>Special Req.</th>
                                                         
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                <tr>
                                                
                                                <MDBCheckbox />
                                                    <td>Sr. No</td>
                                                        <td>Single Booking</td>
                                                        <td>John Doe</td>
                                                        <td>Add to Booking Bill</td>
                                                        <td>31-07-2022</td>
                                                        <td>02-08-2022</td>
                                                        <td>5</td>
                                                        <td>Pending</td>
                                                        <td>Pending</td>

                                                        <td>₹0.00</td> 
                                                        <td>₹50.00</td>
                                                        <td>₹250.00</td>
                                                        <td>Do not use soda</td>
                                                     </tr>
                                                   <tr>
                                                   <MDBCheckbox />
                                                    <td>Sr. No</td>
                                                 <td>Group Booking</td>
                                                        <td>Max Dupri</td>
                                                        <td>Add to Booking Bill</td>
                                                        <td>31-07-2022</td>
                                                        <td>02-08-2022</td>
                                                        <td>3</td>
                                                        <td>Pending</td>
                                                    <td>Pending</td>
                                                        <td>₹0.00</td> 
                                                        <td>₹30.00</td>
                                                        <td>₹150.00</td>
                                                               
                                                        <td>Do not use soda</td>
                                                        </tr> 
                                                    
                                              
                                                </tbody>
                                                </Table>*/}
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

export default AllLaundryServices;
