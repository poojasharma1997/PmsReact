import React from "react";
import "../FormStyle.css";
import "./setuphotel.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, FormGroup, Row } from "react-bootstrap";
import MUIDataTable from 'mui-datatables'
function RoomStatus(props) {
 
   
    const {setNext2,setNext3,setNext} = props
    const columns = [
        {
          name: 'Room',
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
          name: 'Arrival',
          options: {
            filter: true,
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
          name: 'Balance($)',
          options: {
            filter: false,
          }
        },
        {
          name: 'Status',
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
        ['203-KRJ', 'Mrs. Juli Basu','08-24',   '08-25','791.00','791.00	','Stayover',
        ],
        ['106-DDR', 'Mr. Akash Das','08-24',   '08-25','282.50','-56.50	','Due Out',
         ],
        ['107-DDR', 'Mr. Utpal Pal','08-25',   '08-28','214.70','214.70	','Arrived',
        ],
      
        
        
      
      ];
    
      const options = {
        filterType: 'dropdown',
        responsive: 'vertical',
        print: true,
        rowsPerPage: 10,
        page: 0
      };
   
    return (
        <>
          <Col md={12}>
                              <div className="HotelStep bg-white">
                              <div className="setupFormHeading">
                           <h2 className='pending'>Room Status
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
                                    onClick={()=>{setNext(true)
                                        setNext2(false)}}
                                  >
                                    Back
                                  </Button>
                                  <Button type="button" className="active me-2"onClick={()=>{setNext2(false); setNext3(true)}}>Skip</Button>
                                  <Button
                                    type="button"
                                    className="active"
                                    onClick={()=>{setNext2(false)
                                        setNext3(true)}}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Col>
                          
                          </Col>
         </>
                                            
                                          
    );
}

export default RoomStatus;
