import React, {useState} from "react";
// import "../view/Style.css";
//import Sidebar from "../CommonComponents/Sidebar";
import Header from "../../../../CommonComponents/Header";
import MUIDataTable from 'mui-datatables';

import { Link } from "react-router-dom";


import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";


const columns = [
  {
    name: 'Sr. No.',
    options: {
      filter: false,
    }
  },
  {
    name: 'Name',
    options: {
      filter: true,
    }
  },
  {
    name: 'Type',
    options: {
      filter: true,
    }
  },
  {
    name: 'Contact No.',
    options: {
      filter: false,
    }
  },
  {
    name: 'Address',
    options: {
      filter: false,
    }
  },
  
  
];

const data = [
  [1, 'John Doe', 'Technician', '9876543210', 'Karnataka'],
  [2, 'Max Dupri', 'Carpenter', '9876543210', 'Karnataka'],
  [3, 'Jim Ross', 'Mason', '9876543210', 'Karnataka'],
  [4, 'Alex Rhodes', 'Maid', '9876543210', 'Karnataka'],
  [5, 'Ben Carry', 'Technician', '9876543210', 'Karnataka'],
  [6, 'Liam Plunkett', 'Carpenter', '9876543210', 'Karnataka'],
  [7, 'James Long', 'Mason', '9876543210', 'Karnataka'],
  [8, 'Richard Ngarava', 'Maid', '9876543210', 'Karnataka'],
];

const options = {
  filterType: 'dropdown',
  responsive: 'vertical',
  print: true,
  rowsPerPage: 10,
  page: 0
};



function HousekeepingStaffList() {

  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* <Sidebar></Sidebar>*/}
      <div className="mainContent" id="mainContent">
        <Header></Header>
        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Housekeeping Staff List</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow tablelayout">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Housekeeping Staff List
                          </div>
                        </div>
                        <div className="col-auto">
                          <Link
                            to="/addHousekeeper"
                            className="addCategory d-flex align-items-center rounded-5"
                          >
                            <span className="catIcon d-flex me-3">
                              <img
                                src='./assets/plus.svg'
                                alt=""
                                className="img-fluid catImg"
                              />
                            </span>
                            <div className="categoryText">Add Housekeeper</div>
                          </Link>
                      </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-3">
                        <Form.Group>
                            <Form.Control
                              type="date"
                              name="datepic"
                              placeholder="Start Date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>             
                      </div>
                      <div class="col-3">
                        <Form.Group>
                            <Form.Control
                              type="date"
                              name="datepic"
                              placeholder="End date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>             
                      </div>
                      <div class="col-3">
                        <button type="submit" className="customButton btn btn-primary">Search</button>
                      </div>
                    </div>
                    <MUIDataTable
                      title=""
                      data={data}
                      columns={columns}
                      options={options}
                      className="mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HousekeepingStaffList;
