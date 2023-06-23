import React from "react";
import "../FormStyle.css";
import "./setuphotel.css";
import dayjs from "dayjs";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, FormGroup, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MUIDataTable from'mui-datatables'
function NightlyCharge(props) {
    
    const{setNext3,setNext4,setNext2} = props
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
          name: 'Folio',
          options: {
            filter: true,
          }
        },
       
        
        {
          name: 'Description',
          options: {
            filter: false,
          }
        },
       
       
       
        {
          name: 'Amount($)',
          options: {
            filter: false,
          }
        },
        {
          name: 'Net($)',
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
        ['203-KRJ', 'Mrs. Soma Das','23',   'Room Charges','98.00','98.00',
        ],
    
        ['106-DDR', 'Mr. Asok Roy','24',   'Room Charges','140.00','158.20',
         ],
        ['102-SD', 'Mr. Ronit Pal','25',   'Room Charges','95.00','107.35',
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
                           <h2 className='pending'>Nightly Charge
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
                                    onClick={()=>{setNext3(false);setNext2(true)}}
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    type="button"
                                    className="active"
                                    onClick={()=>{setNext4(true);setNext3(false)}}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Col>
                          
                          </Col>
        </>
       
                                              
                                         
    );
}

export default NightlyCharge;
