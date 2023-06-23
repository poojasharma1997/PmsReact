import React from "react";

import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src//assets/edit.svg";
// import deletIcon from "../../src//assets/delete.svg";
// import addCatIcon from "../../src//assets/plus.svg";
import Table from "react-bootstrap/Table";
// import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
function TaxRule() {
  const columns = [
    {
      name: "Sr. No.",
      selector: (row) => row.srno,
    },
    {
        name: "Tax Rule Name",
        selector: (row) => row.taxrulename,
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
        name: "Start Price",
        selector: (row) => row.startprice,
      },
      {
        name: "End Price",
        selector: (row) => row.endprice,
      },
      {
        name: "Start Date",
        selector: (row) => row.startdate,
      },
      {
        name: "End Date",
        selector: (row) => row.enddate,
      },
      {
        name: "Elements",
        selector: (row) => row.elements,
      },
      {
        name: "Percentage(%)",
        selector: (row) => row.percentage,
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
      srno:"1",
      taxrulename: "SGST-SLAB-ONE",
      category: "Range-1-SGST",
      description: " First Slab Of Sgst  ",
      startprice: "    0.00",
      endprice: "1000.00",
      startdate:"01-Jan-2018",
      enddate: "31-Dec-2022",
      elements:"SGST ",
      percentage:" 0.00",
     
      
     
    },
    {
        id: 2,
        srno:"2",
        taxrulename: "SGST-SLAB-TWO",
        category: "Range-2-SGST",
        description: "Slab For Sgst Two  ",
        startprice: "1001.00",
        endprice: "7500.00 ",
        startdate:"01-Jan-2018",
        enddate: "31-Dec-2022",
        elements:"SGST ",
        percentage:" 6.00",
       
  
  
  
        
  
  
  
       
      },
   
   
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Tax Rule</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                        List Of All Tax Rules
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to=""
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src='./assets/plus.svg'
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Tax Rules</div> 
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
export default TaxRule;
