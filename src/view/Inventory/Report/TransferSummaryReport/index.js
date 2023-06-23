import React from 'react';
import Header from '../../../../CommonComponents/Header';
import { Link } from 'react-router-dom';
// import editIcon from '../../src//assets/edit.svg';
// import deletIcon from '../../src//assets/delete.svg';
// import addCatIcon from '../../src//assets/plus.svg';
import Table from 'react-bootstrap/Table';

import { MDBCheckbox } from 'mdb-react-ui-kit';
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
{/**/}



function  TransferSummaryReport() {


const columns = [
    {
      name: "Date		",
      selector: (row) => row.date	,
    },
    {
      name: "Reference_No 	",
      selector: (row) => row.reference_No 	,
    },
{
      name: "Warehouse_From",
      selector: (row) => row.warehouse_From	,
    },
    {
      name: "Warehouse_To	",
      selector: (row) => row.warehouse_To	,
    },

{
      name: "Total Amount	",
      selector: (row) => row.totalAmount,
    },
    {
      name: "Status	",
      selector: (row) => row.status,
    },

   
  ];
  const data = [
    {
      id: 1, 
      date: "26/04/2022		",
     
      reference_No: "PK060358		",
      warehouse_From: "Store Room	",
      warehouse_To: "Kitchen	",
      totalAmount: "3825.00		",
      status: "Completed	",
    
    },
 {
      id: 2,
      date: "26/04/2022		",
      reference_No: "PK060358		",
      warehouse_From: "Store Room	",
      warehouse_To: "Kitchen	",
      totalAmount: "3825.00		",
      status: "Completed	", 
    },
 {
      id: 3,
    
      date: "26/04/2022		",
      reference_No: "PK060358		",
      warehouse_From: "Store Room	",
      warehouse_To: "Kitchen	",
      totalAmount: "3825.00		",
      status: "Completed	",         
    },
    {
      id: 4,
      date: "26/04/2022		",
      reference_No: "PK060358		",
      warehouse_From: "Store Room	",
      warehouse_To: "Kitchen	",
      totalAmount: "3825.00		",
      status: "Completed	",
 },
 {
  id: 5,
  date: "26/04/2022		",
  reference_No: "PK060358		",
  warehouse_From: "Store Room	",
  warehouse_To: "Kitchen	",
  totalAmount: "3825.00		",
  status: "Completed	",
},
  ];


    return (
        

       
            <>
                {/* <Sidebar></Sidebar> */}
                <div className='mainContent' id="mainContent">
                    <Header></Header>
                    <div className='section'>
                        <div className='row gy-4'>
                            <div className='col-12 pt-3'>
                                <div className='mainHeading  px-3'>
                                Transfer Stock List


                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='sectionContent shadow'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='sectionContentHeader py-2 px-4 mb-4 rounded-3'>
                                                <div className='row d-flex align-items-center'>
                                                    <div className='col'>
                                                        <div className='sectionHeaderHeaing'>
                                                        Transfer Stock List


                                                        </div>
                                                    </div>
                                                    <div className='col-auto'>
                                                        <Link to='' className='addCategory d-flex align-items-center rounded-5'>
                                                            <span className='catIcon d-flex me-3'>
                                                                <img src='./assets/plus.svg' alt="" className='img-fluid catImg' />
                                                            </span>
                                                            <div className='categoryText'>
                                                            Transfer Stock & Inventory

                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='sectionContentBody'>
                                            <DataTable columns={columns} data={data} selectableRows/>

                                   {/*  <Table responsive className='sectiontable categoryList'>
                                                <thead>
                                                    <tr>
                                                    <MDBCheckbox/>
                                                        <th>Sr. No</th>
                                                        <th>Date 	</th>
                                                        <th>Received From </th>
                                                         <th>Item</th>
                                                         <th>Received By</th>
                                                         <th>Profit Center</th>
                                                         <th>Mode Of Payment </th>
                                                         <th>Amount</th>
                                                         <th>Total</th>
                                                         <th>Note</th>
                                                    
                                                    </tr>
                                                    <tr>
                                                    
                                                    <MDBCheckbox />

                                                    <td>01</td>
                                                        <td>26/04/2022</td>
                                                        <td>Rabi Som</td>
                                                        <td>Ponds</td>
                                                        <td>Ujjal Das</td>
                                                     <td> Kolkata </td>
                                                     <td> Cash </td>
                                                     <td> 100.00 </td>
                                                     <td> 0.00 </td>
                                                     <td> Test </td>

                                                  </tr>
                                                  <tr>
                                                    
                                                    <MDBCheckbox />

                                                    <td>02</td>
                                                        <td>24/04/2022</td>
                                                        <td>Rahul Kar</td>
                                                        <td>Soap</td>
                                                        <td>Ujjal Das</td>
                                                     <td> Kolkata </td>
                                                     <td> Cash </td>
                                                     <td> 100.00 </td>
                                                     <td> 0.00 </td>
                                                     <td> Test </td>

                                                  </tr>
                                                  <tr>
                                                    
                                                    <MDBCheckbox />

                                                    <td>03</td>
                                                        <td>26/04/2022</td>
                                                        <td>Sagar Pal</td>
                                                        <td>Soap</td>
                                                        <td>Ujjal Das</td>
                                                     <td> Kolkata </td>
                                                     <td> Cash </td>
                                                     <td> 100.00 </td>
                                                     <td> 0.00 </td>
                                                     <td> Test </td>

                                                  </tr>
                                                  <tr>
                                                    
                                                    <MDBCheckbox />

                                                    <td>04</td>
                                                        <td>26/04/2022</td>
                                                        <td>Sagar Pal</td>
                                                        <td>Soap</td>
                                                        <td>Ujjal Das</td>
                                                     <td> Kolkata </td>
                                                     <td> Cash </td>
                                                     <td> 100.00 </td>
                                                     <td> 0.00 </td>
                                                     <td> Test </td>

                                                  </tr>
                                            
                                        
                                                </thead>
                                                <tbody>
                                                    
                                                  
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
            </>
        
    )
}

export default TransferSummaryReport