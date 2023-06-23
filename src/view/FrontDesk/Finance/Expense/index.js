import React from "react";

// import Sidebar from '../CommonComponents/Sidebar';
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import MUIDataTable from 'mui-datatables'
{
  /**/
}

function Expenses() {
  const columns = [
    {
      name: 'Sr. No.',
      options: {
        filter: true,
      }
    },
    {
      name: 'Payment Date',
      options: {
        filter: true,
      }
    },
    {
      name: 'Payment Type',
      options: {
        filter: true,
      }
    },
    {
      name: 'Payment Purpose',
      options: {
        filter: false,
      }
    },
   
    {
      name: 'Paid by',
      options: {
        filter: false,
      }
    },
   
   
    {
      name: 'Receiver"s Name',
      options: {
        filter: false,
      }
    },
    {
      name: 'Payment Status',
      options: {
        filter: false,
      }
    },
    {
      name: 'Payment Amount',
      options: {
        filter: false,
      }
    },
    
  ];

  const data = [
    ['01', '26/04/2022', 'Cash','Table Bill', 'R.s Enterprise',  'Kisor Sen','Paid', '1000' ],
    ['02', '26/04/2022', 'Cash', 'Tea Bill',  'R.s Enterprise',   'Kisor Sen','Paid', '1100' ],
    ['03', '26/04/2022', 'Card', 'Internet Bill','R.s Enterprise', 'Kisor. Sen', 'Paid', '1000' ],
    ['04', '28/04/2022', 'Cash', 'Broker Bill',  'R.s Enterprise', 'Kisor. Sen', 'Paid', '1000'],
    
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
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Expenses</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">Expenses List</div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addexpense"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Expenses</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                  <MUIDataTable
     
        data={data}
        columns={columns}
        options={options}
      />

                    {/*   <Table responsive className="sectiontable categoryList">
                          <thead>
                            <tr>
                              <MDBCheckbox />
                              <th>Sr. No</th>
                              <th>Payment Date</th>
                              <th>Payment Type</th>
                              <th>  Payment Purpose</th>
                              <th>Paid by</th>
                              <th> Receiver's Name</th>
                              <th>Payment Status</th>
                              <th>Payment Amount</th>
                            </tr>
                        
                    

                            <tr>
                              <MDBCheckbox />
                              <td>01</td>
                              <td>26/04/2022</td>
                              <td> Cash </td>
                              <td>Table Bill</td>
                              <td>R.s Enterprise</td>
                              <td>Kisor Sen</td>
                              <td>Paid</td>
                              <td>1000 </td>
                            </tr>
                
                            <tr>
                              <MDBCheckbox />
                              <td>02</td>
                              <td>26/04/2022</td>
                              <td> Cash </td>
                              <td>Tea  Bill</td>
                              <td>R.s Enterprise</td>
                              <td>Kisor Sen</td>
                              <td>Paid</td>
                              <td>1100 </td>
                            </tr>
                            <tr>
                              <MDBCheckbox />
                              <td>03</td>
                              <td>26/04/2022</td>
                              <td> Cash </td>
                              <td>Internet  Bill</td>
                              <td>R.s Enterprise</td>
                              <td>Kisor Sen</td>
                              <td>Paid</td>
                              <td>1000 </td>
                            </tr>

                            <tr>
                              <MDBCheckbox />
                              <td>04</td>
                              <td>26/04/2022</td>
                              <td> Cash </td>
                              <td>Broker   Bill</td>
                              <td>R.s Enterprise</td>
                              <td>Kisor Sen</td>
                              <td>Paid</td>
                              <td>1000 </td>
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

export default Expenses;
