import React, {useState} from "react";
import Header from "../../../CommonComponents/Header";
import MUIDataTable from 'mui-datatables';

import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';

import EditIcon from '@material-ui/icons/Edit';

import Chip from '@material-ui/core/Chip';
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';




function StaffAssignRoom() {

  const [date, setDate] = useState(new Date());

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

const reason = [
  {
    value: 'maintenance',
    label: 'Under Maintenance',
  },
  {
    value: 'cleaning',
    label: 'Cleaning',
  }
];
  const columns = [
    {
      name: 'Room No',
      options: {
        filter: false,
      }
    },
    {
      name: 'Room Type',
      options: {
        filter: false,
      }
    },
    {
      name: 'Availability',
      options: {
        filter: false,
      }
    },
    {
      name: 'Status',
      options: {
        filter: true,
      }
    },
    {
      name: 'Task Assign',
      options: {
        filter: false,
      }
    },
    {
      name: 'HK Manager Remark',
      options: {
        filter: false,
      }
    },
    {
      name: 'Urgency',
      options: {
        filter: true,
      }
    }
    
  ];

  const data = [
    [<IconButton onClick={handleShow}><span style={{fontSize:'14px'}}>101</span> &nbsp;&nbsp;<LockIcon aria-label="Lock" /></IconButton>, 'Premium Python', 'Available', <Chip label="Clean" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />, 'Cleaning', <IconButton  onClick={handleShow1}><span style={{fontSize:'14px', color:'#000'}}>Completed</span>&nbsp;<EditIcon/></IconButton>, 'High'],
    [<IconButton><span style={{fontSize:'14px'}}>102</span> &nbsp;&nbsp;<LockIcon aria-label="Lock" /></IconButton>, 'Executive Java', 'Unavailable', <Chip label="Dirty" style={{backgroundColor:'#ea4335', color:'#fff', padding:'5px 15px'}} />, 'Cleaning', 'Reassigned', 'Medium'],
    [<IconButton><span style={{fontSize:'14px'}}>103</span> &nbsp;&nbsp;<LockIcon aria-label="Lock" /></IconButton>, 'Standard Ruby', 'Unavailable', <Chip label="Dirty" style={{backgroundColor:'#ea4335', color:'#fff', padding:'5px 15px'}} />, 'Washing Cloths', 'Started', 'Medium'],
    [<IconButton><span style={{fontSize:'14px'}}>104</span> &nbsp;&nbsp;<LockIcon aria-label="Lock" /></IconButton>, 'Executive Java', 'Available', <Chip label="Clean" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />, 'Dusting', 'Completed', 'High'],
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
    <div className="mainContent" id="mainContent">
        <Header></Header>
        <div className="section">
          <div className="row gy-4">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Staff Assign Room</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow tablelayout">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Housekeeping Staff Assign Room
                          </div>
                        </div>
                      </div>
                    </div>
                    <Grid container spacing={3} className="mt-5">
                      <Grid item xs={12} sm={5}>
                        <Grid container spacing={1} >
                          <Grid item xs={12} sm={6}>
                            <h5 style={{fontSize:'16px',color:'#FF9100'}}>Housekeeping Staff</h5>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <p>John Doe</p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                      <Grid container spacing={1} >
                        <Grid item xs={12} sm={6}>
                            <h5 style={{fontSize:'16px',color:'#FF9100'}}>Assign Manager</h5>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <p>Max Dupri</p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                          <h5 style={{fontSize:'16px',color:'#FF9100'}}>21st July, 2022</h5>
                      </Grid>
                      <div className="clearfix"></div>
                    </Grid>
                    <MUIDataTable
                      title=""
                      data={data}
                      columns={columns}
                      options={options}
                      className="mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Block/Unblock Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mt-5">
              <Form.Control
                type="date"
                name="datepic"
                placeholder="From Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Control
                type="date"
                name="datepic"
                placeholder="To Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Select aria-label="Default select example" className="shadow-none mb-4">
                <option>Select Reason</option>
                <option value="1">Under Maintenance</option>
                <option value="2">Cleaning</option> 
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" placeholder="Remarks" rows={2} />
            </Form.Group> 
                                                       
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} color="primary" autoFocus className="modalBtn">
              Save
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus className="modalBtn">
              Close
            </Button>
          </Modal.Footer>
        </Modal>




        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Update Remark</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select aria-label="Default select example" className="shadow-none mt-5">
                <option>Remark</option>
                <option value="1">Pending</option>
                <option value="2">Completed</option>
                <option value="2">Reassigned</option>  
            </Form.Select>                                          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} color="primary" autoFocus className="modalBtn">
              Save
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus className="modalBtn">
              Close
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </>
      
   
  );
}

export default StaffAssignRoom;
