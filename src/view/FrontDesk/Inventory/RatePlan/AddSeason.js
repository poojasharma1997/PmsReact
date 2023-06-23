import react from "react";
import Header from "../../../../CommonComponents/Header";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Form from "react-bootstrap/Form";
import Switch from "@mui/material/Switch";

function AddSeason() {
  const label = { inputProps: { "aria-label": "Active" } };
  return (
    <>
     
     <div className="mainContent" id="mainContent" >
        <Header />
        <div className="section"  
      >
             <div className="row justify-content-center"s>
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add Season</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className=" py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">Add Season</div>
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
                                      placeholder="Season"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                    <option>Room Type</option>
                                    <option value="1">Deluxe</option>
                                    <option value="2">Semi Deluxe</option>
                                    <option value="3">Standard</option>
                                  </Form.Select>
                                </div>
                                <div className="col-md-12">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="shadow-none mb-3"
                                  >
                                    <option>Meal Plan</option>
                                    <option value="1">EP</option>
                                    <option value="2">AP</option>
                                    <option value="3">CP</option>
                                    <option value="4">MAP</option>
                                    <option value="5">No Meal Plan</option>
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
                                      placeholder="Updated Price for Double Occupancy"
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
                                      placeholder="Updated Price for Default Occupancy"
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
                                      placeholder="Updated Price for Extra Child"
                                    />
                                  </Form.Group>
                                </div>
                              </div>
                              <FormGroup>
                                <FormControlLabel
                                  control={<Switch  />}
                                  label="Active"
                                />
                              </FormGroup>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="shadow p-4 rounded-2">
                              <div className="row gy-3">
                                <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Control
                                      className="shadow-none"
                                      type="date"
                                      placeholder="Start Date"
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
                                      type="date"
                                      placeholder="End Date"
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
                                      placeholder="Basic Price"
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
                                      placeholder="Updated Price for Single Occupancy"
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
                                      placeholder="Updated Price for Triple Occupancy"
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
                                      placeholder="Updated Price for Extra Adult"
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
                                      placeholder="Updated Price for more than Triple Occupancy"
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
                                      placeholder="Updated Price for dormatory"
                                    />
                                  </Form.Group>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                          
                                <div class="text-center pt-3 col-md-12">
                                  <button
                                    type="submit"
                                    class="formButton btn btn-primary"
                                    style={{ 
                                        borderRadius:'50PX',
                                    width:'150px',}}
                                  >
                                    Submit
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
export default AddSeason;
