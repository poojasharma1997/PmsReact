import React from 'react';
import Header from '../../../CommonComponents/Header';
import { Link } from 'react-router-dom';
// import editIcon from '../../src/assets/edit.svg';
// import deletIcon from '../../src/assets/delete.svg';
// import addCatIcon from '../../src/assets/plus.svg';
import Table from 'react-bootstrap/Table';

import { MDBCheckbox } from 'mdb-react-ui-kit';



function  CancelSales () {




{/*
    const columns = [
        {
          name: "Season",
          selector: (row) => row.season,
        },
        {
          name: "Start Date",
          selector: (row) => row.startDate,
        },
        {
          name: "End Date",
          selector: (row) => row.endDate,
        },
        {
          name: "Room Category",
          selector: (row) => row.roomCategory,
        },
        {
          name: "Meal Plan",
          selector: (row) => row.mealPlan,
        },
        {
          name: "Base Price",
          selector: (row) => row.basePrice,
        },
        {
          name: "Occupancy Wise Updated Price",
          selector: (row) => row.owuPrice,
        },
        {
          name: "Status",
          cell: (row) => (
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                className="shadow-none"
              />
            </Form>
          ),
        },
        {
          name: "Action",
          cell: (row) => (
            <div className="row mx-0 gy-1 flex-nowrap">
              <div className="col-auto pe-0">
                <Link to="" className="tableEditButton">
                  <img src={editIcon} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col-auto">
                <Link to="" className="tableEditButton">
                  <img src={deletIcon} alt="" className="img-fluid" />
                </Link>
              </div>
            </div>
          ),
        },
      ];
      const data = [
        {
          id: 1,
          season: "Peak",
          startDate: "06/01/2022",
          endDate: "06/03/2022",
          roomCategory: "Standard",
          mealPlan: "EP",
          basePrice: "1500.00",
          owuPrice: "Single---2000.00",
        },
        {
          id: 2,
          season: "Mid",
          startDate: "06/01/2022",
          endDate: "06/03/2022",
          roomCategory: "Deluxe",
          mealPlan: "AP",
          basePrice: "1500.00",
          owuPrice: "Double---2000.00",
        },
        {
          id: 3,
          season: "Low",
          startDate: "06/01/2022",
          endDate: "06/03/2022",
          roomCategory: "Semi Deluxe",
          mealPlan: "No Meal Plan",
          basePrice: "1500.00",
          owuPrice: "Triple---2000.00",
        },
        {
          id: 4,
          season: "Special",
          startDate: "06/01/2022",
          endDate: "06/03/2022",
          roomCategory: "Deluxe",
          mealPlan: "EP",
          basePrice: "1500.00",
          owuPrice: "Default---2000.00",
        },
      ];/*}

 {/*
*/}
    return (
        

       
            <>
                {/* <Sidebar></Sidebar> */}
                <div className='mainContent'>
                    <Header></Header>
                    <div className='section'>
                        <div className='row gy-4'>
                            <div className='col-12 pt-3'>
                                <div className='mainHeading  px-3'>
                                Cancel Sales  

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
                                                        Cancel   Sales(All Warehouses)
                                                        </div>
                                                    </div>
                                                   {/*  <div className='col-auto'>
                                                        <Link to='' className='addCategory d-flex align-items-center rounded-5'>
                                                            <span className='catIcon d-flex me-3'>
                                                                <img src={addCatIcon} alt="" className='img-fluid catImg' />
                                                            </span>
                                                            <div className='categoryText'>
                                                                Add  Transaction
                                                            </div>
                                                        </Link>
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='sectionContentBody'>
                                            <Table responsive className='sectiontable categoryList'>
                                                <thead>
                                                    <tr>
                                                    <MDBCheckbox/>
                                                        <th>Sr. No</th>
                                                        <th>Date</th>
                                                        <th>Reference No.</th>
                                                         <th>Biller</th>
                                                         <th> Customer</th>
                                                         <th>Sale Status </th>
                                                         <th>Grand Total </th>
                                                         <th>Paid </th>
                                                         <th>Balance </th>
                                                         <th>Payment Status </th>
                                                         <th>Note </th>

                                                    </tr>
                                                    <tr>
                                                  <MDBCheckbox />
                                                        <td>01</td>
                                                       
                                                        <td>01/05/2022 </td>
                                                        <td>SM/2021/0007</td>
                                                        <td>Hotel Aamar Digha & Restaurant</td>
                                                        <td>Prasanta Dutta </td>
                                                        <td>COMPLETED</td>
                                                        <td>₹772.00</td>
                                                        <td>₹772.00 </td>
                                                        <td>0</td>
                                                
                                                        <td> CLOSED  </td>
                                                        <td> Wrong Bill   </td>
                                                       </tr>
                                                      

                                                </thead>
                                                <tbody> 
                                                    
                                                  
                                                </tbody>
                                                </Table>
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

export default CancelSales