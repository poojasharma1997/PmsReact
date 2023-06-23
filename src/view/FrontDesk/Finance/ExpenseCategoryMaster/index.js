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

function ExpenseCategoryMaster() {
  const columns = [
    {
      name: "CategoryName	",
      selector: (row) => row.categoryCode,
    },
    {
      name: "Category	",
      selector: (row) => row.category,
    },

    {
      name: "Sub-Category	",
      selector: (row) => row.subcategory,
    },

    {
      name: "Action",
      cell: (row) => (
        <div className="row mx-0 gy-1 flex-nowrap">
          <div className="col-auto pe-0">
            <Link to="" className="tableEditButton">
              <img src="./assets/edit.svg" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-auto">
            <Link to="" className="tableEditButton">
              <img src="./assets/delete.svg" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      categoryCode: "ELE		",
      category: "Utility Bill		",
      subcategory: "Electicity Bill		",
    },
    {
      id: 2,
      categoryCode: "ELE		",
      category: "Payment to vendor			",
      subcategory: "Broker  Bill		",
    },
    {
      id: 3,
      categoryCode: "OTH			",
      category: "Utility Bill		",
      subcategory: "Tea Bill			",
    },
    {
      id: 4,
      categoryCode: "OTH		",
      category: "Utility Bill		",
      subcategory: "Internet  Bill		",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Expense Category Master</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Categories</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addExpensesCategory"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Category</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} selectableRows />

                    {/*  <Table responsive className='sectiontable categoryList'>
                                                <thead>
                                                    <tr>
                                                    <MDBCheckbox/>
                                                        <th>Sr. No</th>
                                                        <th>Category Code 	</th>
                                                        <th>Category</th>
                                                         <th> Sub-Category</th>
                                                         <th>Action</th>
                                                        

                                                    </tr>
                                                    <tr>
                                                    
                                                    <MDBCheckbox />

                                                    <td>01</td>
                                                        <td>ELE</td>
                                                        <td>Utility Bill</td>
                                                        <td>Electicity Bill</td>
                                                        <td></td>
                                             </tr>
                                             <tr>
                                         <MDBCheckbox />

                                        <td>02</td>
                                       <td>ELE</td>
                                       <td>Utility  Bill</td>
                                      <td>Internet Bill</td>
                                      <td></td>
                                             </tr>
                                            
                                             <tr>
                                         <MDBCheckbox />

                                        <td>03</td>
                                       <td>OTH</td>
                                       <td>Utility   Bill</td>
                                      <td>Tea Bill</td>
                                       <td></td>
                                             </tr>
                                             <tr>
                                         <MDBCheckbox />
                                       <td>04</td>
                                       <td>OTH</td>
                                       <td>Payment to vendor</td>
                                      <td>Broker Bill</td>
                                     <td></td>
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

export default ExpenseCategoryMaster;
