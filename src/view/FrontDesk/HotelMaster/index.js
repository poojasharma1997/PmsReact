import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import DataTable from "react-data-table-component";

import { MDBCheckbox } from "mdb-react-ui-kit";

function ViewHotels() {
  const columns = [
    {
      name: "Sr. No.",
      selector: (row) => row.srNo,
    },
    {
      name: "Hotel Name",
      selector: (row) => row.hName,
    },
    {
      name: "Hotel Address",
      selector: (row) => row.hAddress,
    },
    {
      name: "No. Of Rooms",
      selector: (row) => row.noOfRooms,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },
  ];
  const data = [
    {
      id: 1,
      srNo: "01",
      hName: "Bookeex International Hotel",
      hAddress:
        "Vivekananda sarani, bhagat singh more, apcar garden, asansol Barabani 713304 , WEST BENGAL India",
      noOfRooms: "100",
      phoneNumber: "9002343550",
    },
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">View Hotels</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Hotels List</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/setuphotels"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt="/setuphotels"
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">SetUp Hotels</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} selectableRows />
                
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

export default ViewHotels;
