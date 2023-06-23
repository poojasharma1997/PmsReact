import React from "react";

// import Sidebar from "../CommonComponents/Sidebar";
import Header from "../../../CommonComponents/Header";
import "./booking.css";
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

function BookingDetails() {
    const [modalopen, setModalOpen] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        {
            name: "Booking Id",
            selector: (row) => row.bookingid,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Contact",
            selector: (row) => row.contact,
        },

        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Room Type",
            selector: (row) => row.roomtype,
        },
        {
            name: "Booking Type",
            selector: (row) => row.bookingtype,
        },
        {
            name: "Checkin Date",
            selector: (row) => row.checkindate,
        },
        {
            name: "Checkout Date",
            selector: (row) => row.checkoutdate,
        },
        {
            name: "Room Rent",
            selector: (row) => row.roomrent,
        },
        {
            name: "Tax",
            selector: (row) => row.tax,
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


    return (
        <div className="mainContent" id="mainContent">
            <Header></Header>

            <div className="section"
            >

                <div className="row justify-content-center">
                    <div className="col-12 pt-3 ">
                        <h4 className="mainHeading  px-3">Booking Details</h4>
                    </div>
                    <div className="col-12" >
                        <div className="sectionContent shadow">
                            <div className="row">
                                <div className="col-12">
                                    <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                                        <div className="row d-flex align-items-center">
                                            <div className="col">
                                                <div className="sectionHeaderHeaing">
                                                    Booking Details
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-light p-3 rounded">
                                    <div className="sectionContentBody">
                                        <div className="bookingDetailsButton mb-4">
                                            <div className="row">
                                                <div className="col-auto">
                                                    <Button type="button" className="firstButton btn">Premium Python</Button>
                                                </div>
                                                <div className="col-auto">
                                                    <Button type="button" className="secondButton btn">Premium Python</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bookingDetailContent">
                                            <Row className="gy-3">
                                                <Col md={9}>
                                                    <div className="leftSideDetails">
                                                        <Row className="gy-5">
                                                            <Col md={12}>
                                                                <Row className="gy-4">
                                                                    <Col md={12}>
                                                                        <div className="bookindetailsImg">
                                                                            <img src=".//assets/bookingDetail.jpg" alt="img" className="w-100 h-100"></img>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={12}>
                                                                        <div className="bookingDetailHeading">
                                                                            Description
                                                                        </div>
                                                                        <div className="bookingDetailDescription">
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <div className="AdditionalbookingDetails">
                                                                    <Row className="gy-4">
                                                                        <Col md={12}>
                                                                            <div className="bookingDetailHeading">
                                                                                Additional Details
                                                                            </div>
                                                                        </Col>
                                                                        <Col  md={12}>
                                                                            <Row className="gy-3">
                                                                                <Col md={6}>
                                                                                    <ul className="m-0 p-0">
                                                                                        <li>
                                                                                            <strong>Room ID:</strong> #STV36987
                                                                                        </li>
                                                                                        <li>
                                                                                            <strong>Base Room Rent:</strong> ₹ 2000.00
                                                                                        </li>
                                                                                        <li>
                                                                                            <strong>Weekend Room Rent:</strong> ₹ 2000.00
                                                                                        </li>
                                                                                    </ul>
                                                                                </Col>
                                                                                <Col md={6}>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <strong>Seasonal Room Rent:</strong> ₹ 2000.00
                                                                                        </li>
                                                                                        <li>
                                                                                            <strong>Added to OTA(s):</strong> No
                                                                                        </li>
                                                                                        <li>
                                                                                            <strong> Housekeeping Status:</strong> Clean
                                                                                        </li>
                                                                                    </ul>
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md="3">
                                                    <div className="rightSideDetails">
                                                        <Row className="gy-3">
                                                            <Col md={12}>
                                                                <div className="rightSideImg">
                                                                    <img src=".//assets/roomimg.jpg" className="w-100 h-100" alt="img"></img>
                                                                </div>
                                                            </Col>
                                                            <Col md={12}>
                                                                <div className="rightSideImg">
                                                                    <img src=".//assets/roomimg.jpg" className="w-100 h-100" alt="img"></img>
                                                                </div>
                                                            </Col>
                                                            <Col md={12}>
                                                                <div className="bookingDetailHeading">
                                                                    Amenities
                                                                </div>
                                                                <div className="rightSideAmenetiesList">
                                                                    <ul class="premiumPythonItem">
                                                                        <li>
                                                                            <div class="premiumPythonItemImg">
                                                                                <img src=".//assets/train.svg"></img>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="premiumPythonItemImg">
                                                                                <img src=".//assets/wifi.svg"></img>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                        <div class="premiumPythonItemImg">
                                                                            <img src=".//assets/car.svg"></img>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="premiumPythonItemImg">
                                                                                <img src=".//assets/smoking.svg"></img>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="premiumPythonItemImg">
                                                                                <img src=".//assets/glass.svg"></img>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                        </Row>
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

        </div>
    );
}
export default BookingDetails;
