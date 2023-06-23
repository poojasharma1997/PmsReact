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

function OtherServices() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Members Allowed",
      selector: (row) => row.membersAllowed,
    },
    {
      name: "Periodicity",
      selector: (row) => row.periodicity,
    },
    {
      name: "Rules",
      selector: (row) => row.rules,
    },
    {
      name: "Price Assigned",
      selector: (row) => row.priceAssigned,
    },

    {
      name: "Weekend Price",
      selector: (row) => row.weekendPrice,
    },
    {
      name: "Holiday Price",
      selector: (row) => row.holidayPrice,
    },
    {
      name: "Special Price",
      selector: (row) => row.specialPrice,
    },
    {
      name: "Service Tax Applied",
      selector: (row) => row.serviceTaxApplied,
    },
    {
      name: "Service Tax Amount",
      selector: (row) => row.serviceTaxAmount,
    },
    {
      name: "Service Discount Applied",
      selector: (row) => row.serviceDiscountApplied,
    },
    {
      name: "Service Discount Amount",
      selector: (row) => row.serviceDiscountAmount,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Extra Bed",
      category: " Room Service",
      description: "Room Service",
      membersAllowed: "2",
      periodicity: "2",
      rules: "Lorem ipsum",
      priceAssigned: "₹500.00",
      weekendPrice: " ₹500.00",
      holidayPrice: "₹650.00",
      specialPrice: "₹600.00",
      serviceTaxApplied: "No",
      serviceTaxAmount: "N/A",
      serviceDiscountApplied: "Yes",
      serviceDiscountAmount: "₹50.00",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Other Services</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Other Services
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
                          <div className="categoryText">Add Services</div>
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
                        <MDBCheckbox />
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Members Allowed</th>
                      <th>Periodicity </th>
                        <th>Rules</th>
                        <th>Price Assigned</th>
                        <th>Weekend Price</th>
                        <th>Holiday Price</th>
                        <th>Special Price</th>
                        <th>Service Tax Applied</th>
                        <th>Service Tax Amount</th>
                        <th>Service Discount Applied</th>
                        <th>Service Discount Amount</th>

                      </tr>
                  
              

                      <tr>
                        <MDBCheckbox />
                        <td>01</td>
                        <td>Extra Bed</td>
                        <td> Room Service </td>
                        <td>Room Service</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Lorem ipsum
                        </td>
                        <td>₹500.00</td>
                        <td>₹500.00</td>
                        <td>₹650.00</td>
                        <td>₹600.00</td>
                        <td>No</td>
                        <td>N/A</td>
                        <td>Yes</td>
                        <td>₹50.00 </td>
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

export default OtherServices;
