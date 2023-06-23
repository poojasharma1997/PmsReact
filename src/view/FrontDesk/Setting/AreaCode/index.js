import React, { useState } from "react";
//import Sidebar from "../Components/Sidebar";
import Header from "../../../../CommonComponents/Header";
import MUIDataTable from 'mui-datatables';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";








function AreaCode() {
  
const [active, setActive] = useState(false);
const [open, setOpen] = useState(false);


const handleActiveChange = (event, value) => {
  setActive(value);
  setOpen(value ? false : open);
};

const columns = [
  {
    name: 'Pin Code',
    options: {
      filter: true,
    }
  },
    {
      name: 'Country',
      options: {
        filter: true,
      }
    },
  {
    name: 'City',
    options: {
      filter: true,
    }
  },
  {
    name: 'Locality1',
    options: {
      filter: true,
    }
  },
  {
    name: 'Locality2',
    options: {
      filter: true,
    }
  },
  {
    name: 'Status',
    options: {
      filter: true,
    }
  }
];

const data = [
  ['700103', 'India', 'Kolkata','Narendrapur','Gariahat',<FormControlLabel
  control={(
    <Switch
      checked={active}
      onChange={handleActiveChange}
      value="active"
      color="primary"
    />
  )}
/>],
  ['700001', 'India', 'Kolkata','Dalhousie','G.C.Avenue',<FormControlLabel
  control={(
    <Switch
      checked={active}
      onChange={handleActiveChange}
      value="active"
      color="primary"
    />
  )}
/>],
];

const options = {
  filterType: 'dropdown',
  responsive: 'vertical',
  print: true,
  rowsPerPage: 10,
  page: 0
};

  return (
    <div className="container-fluid px-0 d-flex">
      {/* <Sidebar></Sidebar>*/}
      <div className="mainContent" id="mainContent">
        <Header></Header>
        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Area Code</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow tablelayout">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Hotel Area Code
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div class="col-2 float-right">
                          <button type="submit" className="customButton btn btn-primary pl-5">Export Excel</button>
                        </div>
                        <div class="col-3 float-right">
                          <Form.Select aria-label="Default select example" className="shadow-none mb-4" required>
                            <option>Default Nature of Visit*</option>
                            <option value="1">Kolkata</option> 
                          </Form.Select>             
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
    </div>
  );
}


export default AreaCode;
