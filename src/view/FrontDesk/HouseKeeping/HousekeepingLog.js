import React, {useState} from "react";
import Header from "../../../CommonComponents/Header";
import MUIDataTable from 'mui-datatables';
import Chip from '@material-ui/core/Chip';

import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//import fileUpload from "../assets/uploadFile.svg";


const columns = [
  {
    name: 'Log Index',
    options: {
      filter: false,
    }
  },
  {
    name: 'Room No',
    options: {
      filter: false,
    }
  },
  {
    name: 'Staff Type',
    options: {
      filter: false,
    }
  },
  {
    name: 'Staff Name',
    options: {
      filter: true,
    }
  },
  {
    name: 'Assignment Type',
    options: {
      filter: false,
    }
  },
  {
    name: 'Assigned Date',
    options: {
      filter: false,
    }
  },
  {
    name: 'Resolved Date',
    options: {
      filter: true,
    }
  },
  {
    name: 'Log Status',
    options: {
      filter: false,
    }
  },
  
];

const data = [
  [1, '101', 'Maid', 'John Doe', 'Cleaning', '18/07/2022 - 4:31PM', '19/07/2022 - 6:00PM', <Chip label="Done" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />],
  [2, '102', 'Mason', 'Sam Curran', 'Repairing', '18/07/2022 - 2:00PM', '20/07/2022 - 4:00PM', <Chip label="Done" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />],
  [3, '103', 'Carpenter', 'Liam Plunkett', 'Door Repairing', '19/07/2022 - 7:00AM', '19/07/2022 - 3:00PM', <Chip label="Done" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />],
  [4, '104', 'Technician', 'Max Dupri', 'Undefined', '19/07/2022 - 2:15PM', '21/07/2022 - 1:15PM', <Chip label="Done" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />],
];

const options = {
  filterType: 'dropdown',
  responsive: 'vertical',
  print: true,
  rowsPerPage: 10,
  page: 0
};



function HousekeepingLog() {
  return (
    <>
      
      <div className="mainContent" id="mainContent">
        <Header></Header>
        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Housekeeping Logs</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow tablelayout">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Housekeeping Logs
                          </div>
                        </div>
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

export default HousekeepingLog;
