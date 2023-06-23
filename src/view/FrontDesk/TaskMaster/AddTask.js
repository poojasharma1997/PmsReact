import React, { useState } from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import fileUpload from "../assets/uploadFile.svg";

function AddTask() {

    const [date, setDate] = useState(new Date());

    return (
        <>
           {/* <Sidebar></Sidebar>*/}
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">Add Task</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                        Add Task
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
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Task Name" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                            <Form.Control className='shadow-none' type="text" placeholder="Assigned To" required/>
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                            <Form.Control as="textarea" placeholder="Task Description" rows={2} />
                                                                        </Form.Group>    
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="col-md-6">
                                                    <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Paper>
                                                                <div className="shadow p-4 rounded-2">
                                                                    <div className="gy-3">
                                                                        <Form.Group className="mb-4">
                                                                            <Form.Control
                                                                                type="date"
                                                                                name="datepic"
                                                                                value={date}
                                                                                onChange={(e) => setDate(e.target.value)}
                                                                            />
                                                                        </Form.Group>
                                                                        
                                                                        <Form.Select aria-label="Default select example" className="shadow-none mb-4">
                                                                            <option>Select Priority</option>
                                                                            <option value="1">Low</option>
                                                                            <option value="2">Medium</option> 
                                                                            <option value="2">High</option> 
                                                                        </Form.Select>    
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                            </Grid>
                                                        </Grid>
                                                        <div className="text-center mt-4">
                                                            <button type="submit" className="customButton btn btn-primary " style={{ marginRight:'20px'}}>Submit</button>
                                                            <button type="submit" className="customButton btn btn-primary">Reset</button>
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
    )
}

export default AddTask