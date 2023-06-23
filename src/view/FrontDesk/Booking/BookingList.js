import React from "react";

// import Sidebar from "../CommonComponents/Sidebar";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
// import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
import swal from 'sweetalert'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function BookingList() {
  const[modalopen,setModalOpen]=useState(false)
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const columns = [
    {
      name: "Booking Id",
      selector: (row) => row.bookingid,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
    },

    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
        name: "Room Type",
        selector: (row) => row.roomtype,
      },
      {
        name: "Booking Type",
        selector: (row) => row.bookingtype,
      },
      {
        name: "Checkin Date",
        selector: (row) => row.checkindate,
      },
      {
        name: "Checkout Date",
        selector: (row) => row.checkoutdate,
      },
      {
        name: "Room Rent",
        selector: (row) => row.roomrent,
      },
      {
        name: "Tax",
        selector: (row) => row.tax,
      },

    {
      name: "Action",
      cell: () => (
        <div className="row mx-0 gy-1 flex-nowrap">
        <div className="col-auto pe-0">
          <Link to="" className="tableEditButton">
            <img src="./assets/edit.svg" alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="col-auto">
          <Link to="" className="tableEditButton">
            <img src="./assets/delete.svg" alt="" className="img-fluid" onClick={handleShow} />
          </Link>
        </div>
      </div>
      ),
    },

  
  ];
  
  const handleAlert=()=>{
  setModalOpen(true)
    }
   console.log(modalopen,"modalopen") 
  const data = [
    {
     bookingid: 'SVL3216',
     name:'John',
     contact:'9876123488',
     email:'john@email.com',
     roomtype:'Premium Python',
     bookingtype:'Spot',
     checkindate:'1/04/23',
    checkoutdate:'2/04/23',
     roomrent:'₹1300',
     tax:'₹450'

    },
    {
        bookingid: 'SVL3217',
        name:'Rohn',
        contact:'9876123488',
        email:'Rohn@email.com',
        roomtype:'Executive Java',
        bookingtype:'Pencil',
        checkindate:'1/04/23',
       checkoutdate:'2/04/23',
        roomrent:'₹1300',
        tax:'₹450'
   
       },
       {
        bookingid: 'SVL3218',
        name:'John',
        contact:'9876123488',
        email:'john@email.com',
        roomtype:'Premium Python',
        bookingtype:'Spot',
        checkindate:'1/04/23',
       checkoutdate:'2/04/23',
        roomrent:'₹1300',
        tax:'₹450'
   
       },
         
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
    
      <div className="section" 
      >
      
        <div className="row justify-content-center">
          <div className="col-12 pt-3 ">
            <h4 className="mainHeading  px-3">Booking List</h4>
          </div>
          <div className="col-12" >
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                        Booking List
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />
                  
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#FF9100',borderBottom:' 4px solid #fcb532'}} >Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{color:'rgba(0, 0, 0, 0.54)'}}>Are you sure want to delete this row?</Modal.Body>
        <Modal.Footer>
          <Button  style={{color:' #fcb532'}}variant="secondary" onClick={handleClose}>
           Yes
          </Button>
          <Button  style={{color:' #fcb532'}} variant="primary" onClick={handleClose}>
           No
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
            </div>
          </div>
        </div>
      
        </div>
    
    </div>
  );
}
export default BookingList;
