import react from "react";
import Header from "../../../../CommonComponents/Header";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Form from "react-bootstrap/Form";
import Switch from "@mui/material/Switch";
import { TextField } from "@mui/material";
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function AddBed() {
  const label = { inputProps: { "aria-label": "Active" } };
  return (
    <>
    <div className="mainContent" id="mainContent" >
        <Header />
        <div className="section" 
      >
           <div className="row gy-4" >
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add  Bed</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">Add New Bed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="addForm">
                      <form action="#">
                        <div className="row gy-4">
                          <div className="col-md-6">
                            <div className=" shadow p-4 rounded-2">
                              <div className="row gy-3">
                              
                                <div className="col-md-12">
                                <Form.Label>Room Category</Form.Label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                    
                                    <option value="1">Dormatory</option>
                                   
                                   
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                <Form.Label>Bed Type</Form.Label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                   
                                    <option value="1">Upper</option>
                                    <option value="1">Lower</option>
                                    
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Room Number"
                                    />
                                  </Form.Group>
                                </div>

                                <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Base Room Rent"
                                    />
                                  </Form.Group>
                                </div>

                                <div className="col-md-12">
                                <Form.Label>Floor Number</Form.Label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                     <option >Floor Number</option>
                                    <option value="1">1st</option>
                                    <option value="1">2nd</option>
                                    <option value="1">3rd</option>
                                  </Form.Select>
                                </div>
                               

                               
                              </div>
                            
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="shadow p-4 rounded-2">
                              <div className="row ">
                                <div className="col-md-12">
                                 <h6>Amenties</h6>
                                </div>
                                <div className="col-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Air Conditioner"
                                          />
                                        </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Television"
                                          />
                                        </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Extra bed"
                                          />
                                        </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Balcony"
                                          />
                                        </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Premium View"
                                          />
                                        </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label=" Room Heater"
                                          />
                                        </Form.Group>
                                </div>
                               
                                <div className="col-md-12">
                                <Form.Label component="legend" style={{marginTop:'20px',marginBottom:'20px'}}><strong>Upload Room Photos</strong></Form.Label>
                                </div>
                                <div className="col-md-12" style={{ height:'269px',border:'2px dashed rgba(0, 0, 0, 0.12)' ,borderRadius:'12px', alignItems:'center'}}>
                              
                           
                                 <div style={{width:'100%',marginTop:'70px'}}>
                                 <p style={{fontSize:'16px',marginLeft:'77px'}}>Drag and drop image(s) here or click</p>
                                  <label  for="file-input">
                                  <CloudUploadIcon fontSize="large" sx={{color:' #FF9100',width:'72px',height:'72px',position:'relative',cursor: 'pointer',marginLeft:'177px'}}/>
                                  </label>
                                 
                                
                              <input type='file'  id="file-input"  style={{display:'none'}}/>
                                 </div>
                               
                                   
                              
                                </div>
                               
                              </div>
                            </div>
                            <div className="col-md-12">
                          
                            <div class="text-center pt-3 col-md-12">
                                  <button
                                    type="submit"
                                    class=" btn "
                                    style={{
                                     color:'white',
                                      padding:'9px 40px !important', 
                                        borderRadius:'50PX',
                                    width:'180px',
                                    marginRight: '25px',
                                  backgroundColor:'rgb(255, 145, 0)'}}
                                  >
                                    Submit
                                  </button>
                                  <button
                                    type="submit"
                                    class=" btn"
                                    style={{ 
                                    color:'white',
                                      padding:'9px 40px !important',
                                        borderRadius:'50PX',
                                            width:'180px',
                                  backgroundColor: 'rgb(234, 67, 53)' }}
                                  >
                                    Reset
                                  </button>
                             
                            
                            </div>
                          </div>

                            {/* <div className="shadow p-4 rounded-2">

                                                   <div className="addFormHeading pb-3">Upload Amenities Icon</div>
                                                    <Form.Group className="" controlId="formBasicEmail">
                                                        <Form.Label for="file" className="w-100">
                                                            <div className="fileLabel">
                                                                <div className="text-center">
                                                                <div className="filelableText">
                                                                    Drag and drop image(s) here or click
                                                                </div>
                                                               
                                                                </div>
                                                            </div>
                                                        </Form.Label>
                                                        <Form.Control className='shadow-none d-none' type="file" id="file" placeholder="Enter your email" />
                                                        
                                                    </Form.Group>
                                                </div> */}
                          </div>

                         
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddBed;
