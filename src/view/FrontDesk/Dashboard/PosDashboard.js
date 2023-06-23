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
import { Col, Row } from "react-bootstrap";

function PosDashboard() {
    return (
        <div className="mainContent" id="mainContent">
            <Header></Header>

            <div className="section"
            >

                <div className="row gy-4 justify-content-center">
                    <div className="col-12 pt-3 ">
                        <h4 className="mainHeading  px-3">Pos dashboard</h4>
                    </div>
                    <div className="col-12 ">
                        <div style={{ paddingBottom: "20px" }}>
                            <Row className="gy-3">
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg1">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/room.svg" alt=""></img>
                                                    {/* <img src={itemImg1}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg2">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/checkout.svg" alt=""></img>
                                                    {/* <img src={itemImg2}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg3">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/revenue.svg" alt=""></img>
                                                    {/* <img src={itemImg3}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg4">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/booking.svg" alt=""></img>
                                                    {/* <img src={itemImg4}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg5">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/vacancy.svg" alt=""></img>
                                                    {/* <img src={itemImg5}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} lg={4}>
                                    <div className="dashboardItemBox itemBg6">
                                        <Row className="align-items-end h-100">
                                            <Col>
                                                <div className="itemCount">207</div>
                                                <div className="itemHeading">Guest in Room</div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="itemImg">
                                                    <img src="./assets/total.svg" alt=""></img>
                                                    {/* <img src={itemImg6}></img> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="col-12" >
                        <div className="sectionContent shadow">
                            <div className="row">
                                <div className="col-12 bg-light p-3 rounded">
                                    <div className="sectionContentBody">
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <div className="posChart">
                                                    <div className="posHeading pb-5">
                                                        Purchase
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
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
export default PosDashboard;
