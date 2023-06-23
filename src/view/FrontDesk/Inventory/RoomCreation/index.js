import React from "react";
import "./room.css";
// import Sidebar from '../CommonComponents/Sidebar';
import Header from "../../../../CommonComponents/Header";
import { Link, NavLink } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import { MDBSwitch } from "mdb-react-ui-kit";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Form from "react-bootstrap";
import DataTable from "react-data-table-component";
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RoomCreation(){
    
    const columns1 = [
        {
          name: 'Room Image',
          options: {
            filter: false,
          }
        },
        {
          name: 'Unit Category',
          options: {
            filter: true,
          }
        },
        {
          name: 'Unit No',
          options: {
            filter: true,
          }
        },
        {
          name: 'Unit Status',
          options: {
            filter: true,
            customBodyRender: (value) => {
              //console.log(value);
              if (value == 'Clean') {
                return (<Chip label="Clean" style={{backgroundColor:'green', color:'#fff', padding:'5px 15px'}} />);
              }
              if (value == 'Dirty') {
                return (<Chip label="Dirty" style={{backgroundColor:'#ea4335', color:'#fff', padding:'5px 15px'}} />);
              }
              return (<Chip label="Unknown" />);
            }
          }
        },
        {
          name: 'Bed',
          options: {
            filter: false,
          }
        },
        {
          name: 'F. No',
          options: {
            filter: false,
          }
        },
        {
          name: 'Unit category',
          options: {
            filter: false,
          }
        },
        {
          name: 'Class',
          options: {
            filter: true,
          }
        },
        {
          name: 'Type',
          options: {
            filter: true,
          }
        },
        {
          name: 'Min. Occupancy',
          options: {
            filter: false,
          }
        },
        {
          name: 'Max Occupancy',
          options: {
            filter: false,
          }
        },
        {
          name: 'Allottment',
          options: {
            filter: false,
          }
        },
        {
          name: 'Base Room Price',
          options: {
            filter: true,
            customBodyRender: (value) => {
              const nf = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              });
    
              return nf.format(value);
            }
          }
        },
        {
          name: 'Bed Type',
          options: {
            filter: true,
          }
        },
        {
          name: 'Details',
          options: {
            filter: false,
          }
        },
        {
          name: 'Action',
          options: {
            filter: false,
          }
        },
        
      ];
    
          const data1 = [
            [<img src={'../../assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, <NavLink to="/viewRoom" style={{textDecoration:'none'}}>Executive</NavLink>, 102, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 103, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 104, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 105, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 106, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 107, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 108, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 109, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 110, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 111, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 112, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 113, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 114, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 115, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 116, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/deluxe.jpg'} alt='room' style={{width:'120px'}}/>, 'Deluxe', 117, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Executive', 118, 'Dirty', 'Single', '1st', 'Room', 'Super Deluxe', 'Exe. Ruby', '01', '05',  'MMT GoIbibo', 120, 'Kingsize', 'Lorem ipsum dolor sit amet', <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
          ];
        
          const options = {
            filterType: 'dropdown',
            responsive: 'vertical',
            print: true,
            rowsPerPage: 10,
            page: 0
          };
        
          const columns2= [
            {
              name: 'Room Image',
              options: {
                filter: false,
              }
            },
            {
              name: 'Room Category',
              options: {
                filter: false,
              }
            },
            {
              name: 'Room No',
              options: {
                filter: false,
              }
            },
            {
              name: 'Min. Occupancy',
              options: {
                filter: false,
              }
            },
            {
              name: 'Max Occupancy',
              options: {
                filter: false,
              }
            },
            {
              name: 'No. of Bed',
              options: {
                filter: true,
              }
            },
            {
              name: 'Bed Details (U)',
              options: {
                filter: true,
              }
            },
            {
              name: 'Bed Details (L)',
              options: {
                filter: true,
              }
            },
            {
              name: 'Layout',
              options: {
                filter: false,
              }
            },
            {
              name: 'Action',
              options: {
                filter: false,
              }
            },
            
          ];
        
          const data2 = [
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, <NavLink to="/viewbed" style={{textDecoration:'none'}}>Dormitory</NavLink>, 1001, '04', '10', '6', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1002, '04', '10', '6', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1003, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1004, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1005, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>,  <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1006, '04', '10', '6', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink> , <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1007, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1008, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1009, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
            [<img src={'./assets/classic3.jpg'} alt='room' style={{width:'120px'}}/>, 'Dormitory', 1010, '04', '10', '12', 'A001 10', 'A005 10', <NavLink to="/dormlayout" variant="contained" style={{backgroundColor:'#2196F3', color:'#fff', padding:'5px 15px', borderRadius:'16px', textDecoration:'none'}}>Layout</NavLink>, <IconButton><EditIcon aria-label="Edit" /><DeleteIcon aria-label="Delete" style={{color:'#ea4335'}}/></IconButton>],
          ];
        return (
          <div className="mainContent" id="mainContent"  >
                <Header></Header>
                <div className="section" 
      >
                <div className="row gy-4" >
                        <div className="col-12 pt-3 pb-3 ">
                            <div className="mainHeading text-white px-3">Tabs</div>
                        </div>
                        <div className="col-12" >
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className=" py-2 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center p-0">
                                                <div className="col-12 mb-5" >
                                                    <div className="sectionHeaderHeaing">
                                                        Room & Dormitory List
                                                    </div>
                                                </div>
                                                <div style={{ padding:'15px', background:'#fafafa'}}>
                                                <div className="col-12 p-0" style={{background:'#f5f5f5'}}>
                                                <Tabs defaultActiveKey="Room"
                                                        id="uncontrolled-tab-example"
                                                        // className="mb-3"
                                                        style={{border:'none'}}>
                                                    <Tab eventKey="Room" title="Room" style={{border:'none'}}>
                                                        
                                                    <div style={{width:'100%', justifyContent:'end', display:'flex',marginBottom:'10px'}}>
                                                    <Link
                                                        to="/addroom"
                                                        className="addCategory d-flex align-items-center rounded-5"
                                                        
                                                    >
                                                        <span className="catIcon d-flex me-3">
                                                            <img
                                                                src="./assets/plus.svg"
                                                                alt=""
                                                                className="img-fluid catImg"
                                                            />
                                                        </span>
                                                        <div className="categoryText" >Add New Room</div>
                                                    </Link>
                                                </div>
                                                {/* <div className="col-12"> */}
                                        <div className="sectionContentBody">
                                            {/* <DataTable columns={columns} data={data} selectableRows /> */}
                                            <MUIDataTable
                                                
                                                data={data1}
                                                columns={columns1}
                                                options={options}
                                            />
                              
                                        </div>
                                    {/* </div> */}
                                                    </Tab>
                                                    <Tab eventKey="Dormitory" title="Dormitory"  style={{border:'none'}}>
                                                    <div >
                                                    <div style={{width:'100%',justifyContent:'end', display:'flex', marginBottom:'10px'}}>
                                                    <Link
                                                        to="/addbed"
                                                        className="addCategory d-flex align-items-center rounded-5"
                                                    >
                                                        <span className="catIcon d-flex me-3">
                                                            <img
                                                                src="./assets/plus.svg"
                                                                alt=""
                                                                className="img-fluid catImg"
                                                            />
                                                        </span>
                                                        <div className="categoryText">Add New Bed</div>
                                                    </Link>
                                                    </div>
                                                </div>
                                                <div style={{width:'100%'}}>
                                        <div className="sectionContentBody">
                                            {/* <DataTable columns={columns} data={data} selectableRows /> */}
                                            <MUIDataTable
                                               
                                                data={data2}
                                                columns={columns2}
                                                options={options}
                                            />
                              
                                        </div>
                                    </div>
                                                    </Tab>
                                                </Tabs>
                                                </div>
                                                </div>
                                                
                                               
                                               
                                            </div>
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
    
   
    

export default RoomCreation