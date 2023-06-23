import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import fileUpload from "../assets/uploadFile.svg";

function KOTCancel() {
    return (
        <>
            {/* <Sidebar></Sidebar> */}
            <div className="mainContent" id="mainContent">
                <Header></Header>
                <div className="section">
                    <div className="row gy-4">
                        <div className="col-12 pt-3">
                            <div className="mainHeading px-3">KOT Cancel</div>
                        </div>
                        <div className="col-12">
                            <div className="sectionContent shadow">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <div className="sectionHeaderHeaing">
                                                    KOT Cancel
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="addForm">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="make-box">
                                                            <div className="row">
                                                                <p>
                                                                    Order No.:  #SM/POS/2022/12230 <br />
                                                                    Placed at:  09-09-2022 12:49 <br />
                                                                    Order Status:   <span class="badge bg-danger">Order Cancelled</span> <br />
                                                                    Customer:  Walk-in Customer <br />
                                                                    Ordered By:  Waiter <br />
                                                                    Table No.:  S10 <br />
                                                                    Room No.:  N/A <br />
                                                                    Waiter Name:  John Doe
                                                                </p>
                                                            </div>
                                                            <div className="row">
                                                                <button type="submit" class="btn btn-primary new-btn">ORDER DETAILS</button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                   
                                                    

                                                    
                                                </div>
                                                {/* <div className="row gy-3">
                                                    <div className="col-md-6">
                                                            <div classname="col-lg-4">
                                                               <h4>Order No.:  #SM/POS/2022/12230</h4>
                                                               <h4>Placed at:  09-09-2022 12:49</h4>
                                                               <h4>Order Status:  Order Placed</h4>
                                                               <h4>Customer:  Walk-in Customer</h4>
                                                               <h4>Ordered By:  Waiter</h4>
                                                               <h4>Table No.:  S10</h4>
                                                               <h4>Room No.:  N/A</h4>
                                                               <h4>Waiter Name:  John Doe</h4>
                                                               </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <div class="text-center pt-3 col-md-12"><button type="submit" class="formButton btn btn-primary">ORDER DETAILS</button>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div class="text-center pt-3 col-md-12"><button type="submit" class="formReset btn btn-primary">CANCEL ORDER</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
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

export default KOTCancel