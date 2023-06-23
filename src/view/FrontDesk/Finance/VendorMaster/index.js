import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import MUIDataTable from "mui-datatables";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";

function VendorMaster() {
  const columns = [
    {
      name:'SR.No.',
      options: {
        filter: false,
      }
    },
    {
      name: "OrganizationName	",
      options: {
        filter: false,
      }
    },
    {
      name: "OrganizationAddress",
      options: {
        filter: false,
      }
    },
    {
      name: "CIN_NO",
      options: {
        filter: false,
      }
    },
    {
      name: "RegisterEmail",
      options: {
        filter: false,
      }
    },
    {
      name: "RegisterPhNo",
      options: {
        filter: false,
      }
    },
    {
      name: "GSTNo	",
      options: {
        filter: false,
      }
    },
    {
      name: "TypeOfVendor",
      options: {
        filter: false,
      }
    },
  ];
  const data = [
    ['1','C.R Enterprise','Kolkata','141331	','cr@gmail.com	','9002343550	','10AABCU9603R1ZM','Manufacturer'],
    ['2','C.R Enterprise','Kolkata','141331	','cr@gmail.com	','9002343550	','10AABCU9603R1ZM','Manufacturer'],
    ['3','C.R Enterprise','Kolkata','141331	','cr@gmail.com	','9002343550	','10AABCU9603R1ZM','Manufacturer'],
    ['4','C.R Enterprise','Kolkata','141331	','cr@gmail.com	','9002343550	','10AABCU9603R1ZM','Manufacturer'],
   
  ];
  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

  return (
   
    <div className="mainContent" id="mainContent">
    <Header />
    <div className="section" 
  >
         <div className="row justify-content-center" >
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Vendor Master</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Vendor List</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addNewVendor"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add New Vendor</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                  <MUIDataTable     data={data}
                                           columns={columns}
                                           options={options}
                                       />

                    {/* <Table responsive className='sectiontable categoryList'>
                                                <thead>
                                                    <tr>
                                                    <MDBCheckbox/>
                                                        <th>Sr. No</th>
                                                        <th>Organization Name	</th>
                                                        <th>Organization Address</th>
                                                         <th>CIN NO. </th>
                                                         <th>Register Email</th>
                                                         <th>Register Ph No.</th>
                                                         <th>GST No.</th>
                                                         <th>Type Of Vendor</th>


                                                    </tr>
                                                    <tr>
                                                    <MDBCheckbox />
                                                      <td>01</td>
                                                        <td>C.R Enterprise </td>
                                                        <td>Kolkata </td>
                                                        <td>141331</td>
                                                        <td>cr@gmail.com </td>
                                                        <td>9002343550</td>
                                                  <td>10AABCU9603R1ZM </td>
                                                  <td>Manufacturer </td>
                                                
                                                    </tr>
                                                    <tr>
                                                    <MDBCheckbox />
                                                      <td>02</td>
                                                        <td>C.R Enterprise </td>
                                                        <td>Kolkata </td>
                                                        <td>141331</td>
                                                        <td>cr@gmail.com </td>
                                                        <td>9002343550</td>
                                                  <td>10AABCU9603R1ZM </td>
                                                  <td>Manufacturer </td>
                                                
                                                    </tr>
                                                    <tr>
                                                    <MDBCheckbox />
                                                      <td>03</td>
                                                        <td>C.R Enterprise </td>
                                                        <td>Kolkata </td>
                                                        <td>141331</td>
                                                        <td>cr@gmail.com </td>
                                                        <td>9002343550</td>
                                                  <td>10AABCU9603R1ZM </td>
                                                  <td>Manufacturer </td>
                                                
                                                    </tr>
                                                    <tr>
                                                    <MDBCheckbox />
                                                      <td>04</td>
                                                        <td>C.R Enterprise </td>
                                                        <td>Kolkata </td>
                                                        <td>141331</td>
                                                        <td>cr@gmail.com </td>
                                                        <td>9002343550</td>
                                                  <td>10AABCU9603R1ZM </td>
                                                  <td>Manufacturer </td>
                                                
                                                    </tr>
                                            

                                                </thead>
                                                <tbody>
                                                    
                                                  
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

export default VendorMaster;
