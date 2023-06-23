import React from "react";
import "../FormStyle.css";
import "./setuphotel.css";
import MUIDataTable from 'mui-datatables'
import { useState } from "react";

import { Button, Col, FormGroup, Row } from "react-bootstrap";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

function ReservationList(props) {
    const columns = [
        {
          name: 'Res.',
          options: {
            filter: true,
          }
        },
        {
          name: 'Guest',
          options: {
            filter: false,
          }
        },
       
        {
          name: 'Room',
          options: {
            filter: true,
          }
        },
       
        
        {
          name: 'Rate Type',
          options: {
            filter: false,
          }
        },
       
        {
          name: 'Res.Type',
          options: {
            filter: false,
          }
        },
       
        {
          name: 'Release Term',
          options: {
            filter: false,
          }
        },
        {
          name: 'Dept',
          options: {
            filter: false,
          }
        },
        {
          name: 'Total($)',
          options: {
            filter: false,
          }
        },
        {
          name: 'Deposit($)',
          options: {
            filter: false,
          }
        },
        {
          name: 'Action',
          options: {
            filter: true,
          }
        },
        
       
      
       
       
       
        
      ];
    
      const data = [
        ['93', 'Mrs. Juli Basu','106-DDR',   'Room Only(Non-Smoking)','Hold Unconfirm Booking','25%	','	08-27','107.35','0.00',
         ],
      
        
      
      ];
    
      const options = {
        filterType: 'dropdown',
        responsive: 'vertical',
        print: true,
        rowsPerPage: 10,
        page: 0
      };
      const{setNext,setNext2} = props
    return (
     <>
          <Col md={12}>
                              <div className="HotelStep bg-white">
                              <div className="setupFormHeading">
                           <h2 className='pending'>Reservation List 
                            </h2> 
                            </div>
                          </div>
                          <section>
                          <MUIDataTable
      title=""
      data={data}
      columns={columns}
      options={options}
    />
                          </section>
                          <Col md={12} >
                                <div className="setupHotelButton" style={{paddingTop:'30px'}}>
                                  <Button
                                    type="button"
                                    className="inactive me-2"
                                    onClick={()=>{setNext(false)}}
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    type="button"
                                    className="active"
                                    onClick={()=>{setNext2(true); setNext(false)}}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Col>
                          
                          </Col>
                                                
     </>
                               
                                               
                                              
                                            
                          
    );
}

export default ReservationList;
