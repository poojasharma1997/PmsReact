import React from "react";
import Header from "../../../../CommonComponents/Header";
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

function StaffAssignList() {
  const[modalopen,setModalOpen]=useState(false)
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const columns = [
  
    {
      name: "Staff Name",
      selector: (row) => row.name,
    },
    {
      name: "Staff Type",
      selector: (row) => row.type,
    },

    {
      name: "Room Task",
      selector: (row) => row.task,
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
    name:'John Doe',
    type:'Housekeeper Maid',
    task:'Cleaning'
    },
    {
        name:'Max Dupri',
        type:'Housekeeper Carpenter',
        task:'Washing Clothes'
       
       },
       {
        name:'Sam Curran',
        type:'Housekeeper Mason',
        task:'Dusting'
   
       },
       {
        name:'Liam Plunkett',
        type:'Housekeeper Technician',
        task:'Dusting'
   
       },
         
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
    
      <div className="section" 
      >
      
        <div className="row justify-content-center">
          <div className="col-12 pt-3 ">
            <h4 className="mainHeading  px-3">Staff Assignment</h4>
          </div>
          <div className="col-12" >
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                        Staff Assignment List
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/assignroommaid"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Assign Room For Maid</div>
                        </Link>
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
export default StaffAssignList;
