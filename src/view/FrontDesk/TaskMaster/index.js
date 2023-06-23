import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from '../../src/assets/edit.svg';
// import deletIcon from '../../src/assets/delete.svg';
// import addCatIcon from '../../src/assets/plus.svg';
import Table from "react-bootstrap/Table";

//import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { MDBSwitch } from "mdb-react-ui-kit";
import Badge from "react-bootstrap/Badge";
import { MDBCheckbox } from "mdb-react-ui-kit";
//import Form from "react-bootstrap/Form";
//import DataTable from "react-data-table-component";
{
  /**/
}

function AllTasks() {
  {
    /*const columns = [
    {
      name: "Cloth Type",
      selector: (row) => row.clothtype,
    },
    {
      name: "FabricType",
      selector: (row) => row.fabricType,
    },
    {
      name: "LaundryRate	.",
      selector: (row) => row.laundryRate	.,
    },
    {
      name: "DryCleaningRate		",
      selector: (row) => row.dryCleaningRate,
    },
    {
      name: "IroningRate		",
      selector: (row) => row.ironingRate	,
    },
    {
      name: "DefaultType		",
      selector: (row) => row.defaultType	,
    },
    {
      name: "Action",
      selector: (row) => row.action	,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="row mx-0 gy-1 flex-nowrap">
          <div className="col-auto pe-0">
            <Link to="" className="tableEditButton">
              <img src={editIcon} alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-auto">
            <Link to="" className="tableEditButton">
              <img src={deletIcon} alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      clothtype: "Trousers",
      fabricType: "Cotton",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
      action: "Do not use soda",
     
    },
 {
      id: 1,
      clothtype: "Saree",
      fabricType: "Linen",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
      action: "Do not use soda",
     
    },
{
      id: 1,
      clothtype: "Shirt",
      fabricType: "Cotton",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
      action: "Do not use soda",
     
    },
{
      id: 1,
      clothtype: "Trousers",
      fabricType: "Linen",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
      action: "Do not use soda",
     
    },


],
    */
  }
  return (
    <div className="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Task List</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">All Tasks</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addtask"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Tasks</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <Table responsive className="sectiontable categoryList">
                      <thead>
                        <tr>
                          <th>
                            <MDBCheckbox />
                          </th>

                          <th>Tasks</th>
                          <th>Given On</th>
                          <th>Due Date </th>
                          <th>Assigned To </th>
                          <th>Priority </th>
                          <th>Status </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <MDBCheckbox />
                          <td>Room Cleaning</td>
                          <td>07-11-2022</td>
                          <td>08-11-2022</td>
                          <td> John Doe</td>
                          <td>
                            {" "}
                            <Badge bg="success">High </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
                          </td>
                        </tr>

                        <tr>
                          <MDBCheckbox />

                          <td>Dusting</td>
                          <td>07-11-2022</td>
                          <td>08-11-2022</td>
                          <td>John Doe</td>
                          <td>
                            {" "}
                            <Badge bg="danger">Low </Badge>{" "}
                          </td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
                          </td>

                          {/* <td><BootstrapSwitchButton checked={true} onstyle="outline-success" offstyle="outline-danger"/></td> */}
                        </tr>
                      </tbody>
                    </Table>
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

export default AllTasks;
