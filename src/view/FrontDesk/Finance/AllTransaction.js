import React from "react";
import MUIDataTable from "mui-datatables";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

import { MDBCheckbox } from "mdb-react-ui-kit";

function AllTransaction() {

    
    const columns = [
      {
        name: 'Sr. No.',
        options: {
          filter: true,
        }
      },
      {
        name: 'Transaction ID',
        options: {
          filter: true,
        }
      },
      {
        name: 'Date and Time',
        options: {
          filter: true,
        }
      },
      {
        name: 'Status',
        options: {
          filter: false,
        }
      },
      {
        name: 'User',
        options: {
          filter: false,
        }
      },
      {
        name: 'Profit Center',
        options: {
          filter: false,
        }
      },
      {
        name: 'Type',
        options: {
          filter: true,
        }
      },
      {
        name: 'Amount',
        options: {
          filter: false,
        }
      },
      {
        name: 'Payment Mode',
        options: {
          filter: false,
        }
      },
      {
        name: 'Payment Details',
        options: {
          filter: false,
        }
      },
      {
        name: 'Payment From',
        options: {
          filter: false,
        }
      },
      {
        name: 'Payment To',
        options: {
          filter: false,
        }
      },
      
    ];
  
    const data = [
      ['01', '205', ' 01/05/2022 ', 'Paid', 'Mr Ronald Carter', '₹772.00', 'Booking Payment', '₹1240.00', 'Cash', 'No breakup available','Dilip Das 700001', 'Hotel' ],
      ['02', '203', ' 01/05/2022 ', 'Paid', 'Mr Ronald Carter', '₹772.00', 'Booking Payment', '₹2200.00', 'Cash', 'No breakup available', 'Rahul Kar 789654', 'Hotel'],
      ['03', '107', ' 26/04/2022 ', 'Paid', 'Mr Ronald Carter', '₹1003.00', 'Booking Payment', '₹13440.00', 'Cr/Dr Card', 'Card No:', 'Ronak Sen ', 'Hotel '],
      ['04', '101', ' 28/04/2022', 'Paid', ' Mr Ronald Carter', '₹548.50', 'Booking Payment', '₹2240.00', 'Cash', 'No breakup available', 'Sumit Sarkar Kolkata-700001', 'Hotel'],
      ['05', '102', ' 05/05/2022', 'Paid', ' Mr Ronald Carter', '₹169.00', 'Booking Payment', '₹1500.00', 'Cash', '[Gpay] Tran ID: ghjg678070777| Recv Acc : 48545895990', 'Kingsuk Roy 789654', 'Hotel' ],
      ['06', '104', ' 01/05/2022', 'Paid', 'Mr Ronald Carter', '₹169.00','Booking Payment', '₹1000.00', 'E Wallet','No breakup available', 'Subha Das 789654', 'Hotel' ],
      ['07', '105', ' 01/05/2022', 'Paid', 'Mr Ronald Carter', '₹548.50', 'Booking Payment', '₹2240.00', 'Cash', 'No breakup available', 'Soma Pal 700102', 'Hotel'],
    ];
  
    const options = {
      filterType: 'dropdown',
      responsive: 'vertical',
      print: true,
      rowsPerPage: 10,
      page: 0
    };
   
 
  return (
    <div className="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">All Transaction</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          All Transaction List
                        </div>
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

export default AllTransaction;
