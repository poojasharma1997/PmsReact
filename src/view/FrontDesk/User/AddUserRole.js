import Header from "../../../CommonComponents/Header";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Form from "react-bootstrap/Form";
import Switch from "@mui/material/Switch";
import { TextField } from "@mui/material";

import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function AddUserRole() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
       <div className="mainContent" id="mainContent">
        <Header />
        <div className="section" 
      >
             <div className="row justify-content-center" >
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add New User</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Add New User
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="addForm">
                      <form action="#">
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <div className=" shadow p-4 rounded-2">
                              <div className="row gy-3">
                                <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Short Code"
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
                                      placeholder="Name"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <TextField
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Description"
                                      multiline
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                    <option>UserRole</option>
                                    <option value="1">Administrator</option>
                                    <option value="2">Chief Cashier</option>
                                    <option value="3">
                                      Front Office Clerk
                                    </option>
                                    <option value="4">
                                      Front Office Manager
                                    </option>
                                    <option value="5">General Manager</option>
                                  </Form.Select>
                                </div>
                              </div>
                              <FormGroup>
                                <FormControlLabel
                                  control={<Switch />}
                                  label="Active"
                                />
                              </FormGroup>
                            </div>
                          </div>
                          <div  className="col-md-6">
                          <div>
                            <div className="shadow p-4 rounded-2">
                              <div className="row gy-3">
                                <div className="col-md-12">
                               
                                  <Tabs
                                    defaultActiveKey="home"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                    style={{border:'none'}}
                                  >
                                      
                                    <Tab eventKey="home" title="Home"  style={{border:'none'}}>
                                    <div className="col-md-12">
                                  <Form.Group
                                   
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Search"
                                    />
                                  </Form.Group>
                                </div>
                                      <div className="col-md-12">
                                        <Form.Group
                                         
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Configuration"
                                          />
                                        </Form.Group>

                                        <Form.Group
                                         
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Access to Configuration Panel"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Access to Change Language"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Defines Rates"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                       
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label=" Access to General Setting"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                      
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="Access to Change Exchange Rates"
                                          />
                                        </Form.Group>
                                      </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile"  style={{border:'none'}}>
                                    <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="text"
                                      placeholder="Search"
                                    />
                                  </Form.Group>
                                </div>
                                      <div className="col-md-12">
                                        <Form.Group
                                         
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="View"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          
                                          controlId="formBasicPassword"
                                        >
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="View with Search"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                         
                                          controlId="formBasicPassword"
                                        >
                                          {" "}
                                          <FormControlLabel
                                            control={<Checkbox />}
                                            label="View with Search and Download"
                                          />
                                        </Form.Group>
                                      </div>
                                    </Tab>
                                  </Tabs>
                                 
                                </div>
                             
                              </div>
                            </div>
                          </div>

                          <div class="text-center pt-3 ">
                            <button
                              type="submit"
                              class="formButton btn btn-primary"
                              style={{ 
                                  borderRadius:'50PX',
                              width:'150px',}}
                            >
                              Save
                            </button>
                       
                      
                      </div>
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
export default AddUserRole;
