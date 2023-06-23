import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";

import { MDBCheckbox } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";

function AdHocBills() {
  const columns = [
    {
      name: "BillDate			",
      selector: (row) => row.billDate,
    },
    {
      name: "Type			",
      selector: (row) => row.type,
    },
    {
      name: "Status	",
      selector: (row) => row.status,
    },
    {
      name: "GuestType			",
      selector: (row) => row.guestType,
    },
    {
      name: "GuestName		",
      selector: (row) => row.guestName,
    },
    {
      name: "ItemCount	",
      selector: (row) => row.itemCount,
    },
    {
      name: "Total	",
      selector: (row) => row.total,
    },
    {
      name: "Discount				",
      selector: (row) => row.discount,
    },
    {
      name: "GrandTotal",
      selector: (row) => row.grandTotal,
    },
    {
      name: "PaymentStatus		",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "TotalAmountPaid			",
      selector: (row) => row.totalAmountPaid,
    },
    {
      name: "BillNote",
      selector: (row) => row.billNote,
    },
  ];
  const data = [
    {
      id: 1,
      billDate: "24/05/2022		",
      type: "---			",
      status: "---		",
      guestType: "Corporate		",
      guestName: "John Doe		",
      itemCount: "		5		",
      total: "₹300.00	",
      discount: "	₹50.00		",
      grandTotal: "₹250.00			",

      paymentStatus: "	Pending	",
      totalAmountPaid: "₹0.00",
      billNote: "lorem ipsum	      ",
    },
    {
      id: 2,
      billDate: "25/05/2022		",
      type: "---			",
      status: "---		",
      guestType: "Bachelor			",
      guestName: "Max Dupri			",
      itemCount: "	6	",
      total: "₹300.00	",
      discount: "	₹50.00		",
      grandTotal: "₹250.00			",

      paymentStatus: "	Pending	",
      totalAmountPaid: "₹0.00",
      billNote: "lorem ipsum	 ",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">AdHoc Bills</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">AdHoc Bills</div>
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
                          <div className="categoryText">Add AdHoc Bills</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} selectableRows />

                    {/*    <Table responsive className="sectiontable categoryList">
                    <thead>
                      <tr>
                        <MDBCheckbox />
                        <th>Sr. No</th>
                        <th>Bill Date</th>
                        <th>Type</th>
                        <th>  Status</th>
                        <th>Guest Type</th>
                        <th>Guest Name</th>
                        <th>Item Count</th>
                        <th>Total</th>
                        <th>Discount</th>
                        <th>  Grand Total</th>
                        <th>payment Status</th>
                        <th>Total Amount Paid</th>
                        <th>  Bill Note</th>
                    
                      </tr>
                  
              

                      <tr>
                        <MDBCheckbox />
                        <td>01</td>
                        <td>24/05/2022</td>
                        <td> --- </td>
                        <td>---</td>
                        <td>Corporate</td>
                        <td>John Doe</td>
                        <td>5</td>
                        <td>₹300.00 </td>
                      
                        <td>₹50.00 </td>
                        <td>₹250.00</td>
                        <td>Pending </td>
                        <td>₹0.00</td>
                        <td>lorem ipsum </td>
                       
                      </tr>
          
                      <tr>
                        <MDBCheckbox />
                        <td>02</td>
                        <td>25/05/2022</td>
                        <td> --- </td>
                        <td>---</td>
                        <td>Bachelor</td>
                        <td>Max Dupri</td>
                        <td>6</td>
                        <td>₹350.00 </td>
                      
                        <td>₹50.00 </td>
                        <td>₹250.00</td>
                        <td>Pending </td>
                        <td>₹0.00</td>
                        <td>lorem ipsum </td>
            
                       
                      </tr>
                     
                    </thead>
                    <tbody></tbody>
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

export default AdHocBills;
