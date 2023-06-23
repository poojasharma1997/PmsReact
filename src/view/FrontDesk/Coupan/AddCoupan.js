import Header from "../../../CommonComponents/Header";
import Form from "react-bootstrap/Form";

function AddCoupan() {
  
  return (
    <>
     
     <div className="mainContent" id="mainContent" >
        <Header />
        <div className="section" 
      >
             <div className="row justify-content-center" >
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add Coupan</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">
                            Add New Coupan
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
                                      placeholder="Name"
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
                                      placeholder="Code"
                                    />
                                  </Form.Group>
                                </div>
                               
                              </div>
                            
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                            <div className=" shadow p-4 rounded-2">
                              <div className="row gy-3">
                              <div className="col-md-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                     <Form.Label>Start Date</Form.Label>
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
                                     <Form.Label>End Date</Form.Label>
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
                                      placeholder="Discount Amount"
                                    />
                                  </Form.Group>
                                </div>
                                  </div>
                                  </div>
                            </div>
                           
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                          <div class="text-center pt-3 ">
                            <button
                              type="submit"
                              class="formButton btn btn-primary"
                              style={{ 
                                  borderRadius:'50PX',
                              width:'150px',
                            backgroundColor:'#FF9100'}}
                            >
                              Submit
                            </button>
                            </div>
                          <div class="text-center pt-3 ">
                            <button
                              type="submit"
                              class="formButton btn btn-primary"
                              style={{ 
                                  borderRadius:'50PX',
                              width:'150px',
                              backgroundColor:'#FF9100'}}
                            >
                              Reset
                            </button>
                           </div>
                                 
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
export default AddCoupan;
