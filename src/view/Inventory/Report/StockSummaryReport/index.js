import React from 'react';
import Header from '../../../../CommonComponents/Header';
import { Link } from 'react-router-dom';
// import editIcon from '../../src//asses/edit.svg';
// import deletIcon from '../../src//asses/delete.svg';
// import addCatIcon from '../../src//asses/plus.svg';
import Table from 'react-bootstrap/Table';

import { MDBCheckbox } from 'mdb-react-ui-kit';
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
{/**/}



function  StockSummaryReport() {


const columns = [
    {
      name: "Image		",
      selector: (row) => row.image	,
    },
    {
      name: "	Items",
      selector: (row) => row.items	,
    },
{
      name: "Type_Category",
      selector: (row) => row.type_Category	,
    },
    {
      name: "Total Warehouse Stock",
      selector: (row) => row.totalWarehouseStock	,
    },

{
      name: "Total Kitchen Stock	",
      selector: (row) => row.totalKitchenStock	,
    },
    {
      name: "UOM	",
      selector: (row) => row.uom,
    },
    {
      name: "Unit Price",
      selector: (row) => row.unitPrice,
    },
    {
      name: "Alert Qty",
      selector: (row) => row.alertQty,
    },
    {
      name: "Last Update",
      selector: (row) => row.lastUpdate,
    },

   
  ];
  const data = [
    {
      id: 1, 
      image: "Glass (12)		",
      items: "Glass (12)		",
      type_Category: "General Stock		",
      totalWarehouseStock: "201	",
      totalKitchenStock: "100",
      uom: "Piece	",
      unitPrice: "	30 INR",
     
      alertQty: "5 piece		",
      lastUpdate: "11.07.22 07.33.32	",
    
    },
 {
      id: 2,
      image: "Glass (12)		",
      items: "Glass (12)		",
      type_Category: "General Stock		",
      totalWarehouseStock: "201	",
      totalKitchenStock: "100",
      uom: "Piece	",
      unitPrice: "	30 INR",
     
      alertQty: "5 piece		",
      lastUpdate: "11.07.22 07.33.32	",
    },
 {
      id: 3,
      image: "Glass (12)		",
      items: "Glass (12)		",
      type_Category: "General Stock		",
      totalWarehouseStock: "201	",
      totalKitchenStock: "100",
      uom: "Piece	",
      unitPrice: "	30 INR",
     
      alertQty: "5 piece		",
      lastUpdate: "11.07.22 07.33.32	",
    },
    {
      id: 4,
      image: "Glass (12)		",
      items: "Glass (12)		",
      type_Category: "General Stock		",
      totalWarehouseStock: "201	",
      totalKitchenStock: "100",
      uom: "Piece	",
      unitPrice: "	30 INR",
     
      alertQty: "5 piece		",
      lastUpdate: "11.07.22 07.33.32	",
 },
 {
  id: 5,
  image: "Glass (12)		",
      items: "Glass (12)		",
      type_Category: "General Stock		",
      totalWarehouseStock: "201	",
      totalKitchenStock: "100",
      uom: "Piece	",
      unitPrice: "	30 INR",
     
      alertQty: "5 piece		",
      lastUpdate: "11.07.22 07.33.32	",
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
                                Stock Inventory


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
                                                        Stock  & Inventory List


                                                        </div>
                                                    </div>
                                                    <div className='col-auto'>
                                                        <Link to='' className='addCategory d-flex align-items-center rounded-5'>
                                                            <span className='catIcon d-flex me-3'>
                                                                <img src='./assets/plus.svg 'alt="" className='img-fluid catImg' />
                                                            </span>
                                                            <div className='categoryText'>
                                                            Stock  & Inventory

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

export default StockSummaryReport