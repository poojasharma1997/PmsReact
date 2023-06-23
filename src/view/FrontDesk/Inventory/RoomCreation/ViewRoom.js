import React from "react";
import "./room.css";

import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";

import DataTable from "react-data-table-component";

function ViewRoom() {
    const columns = [
        {
            name: "Category Type",
            selector: (row) => row.title,
            style: {
                width: "90px",
            },
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
                            <img src="./assets/delete.svg" alt="" className="img-fluid" />
                        </Link>
                    </div>
                </div>
            ),
        },
    ];
    const data = [
        {
            id: 1,
            title: "Delux",
        },
        {
            id: 2,
            title: "Semi Delux",
        },
        {
            id: 2,
            title: "Standard",
        },
        {
            id: 2,
            title: "Standard",
        },
    ];
    return (
        <div className="mainContent" id="mainContent">
            <Header></Header>
            <div className="section">
                <div className="row gy-4">
                    <div className="col-12 pt-3">
                        <div className="mainHeading px-3">View Room</div>
                    </div>
                    <div className="col-12">
                        <div className="sectionContent shadow">
                            <div className="row">
                                <div className="col-12">
                                    <div className="sectionContentHeader bg-white mb-4 rounded-3">
                                        <div className="row d-flex align-items-center">
                                            <div className="col">
                                                <div className="sectionHeaderHeaing">
                                                    View Room
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 viewRoomBg p-0">
                                            <div className="executiveRoom">
                                                Executive Room
                                            </div>
                                            <div className="viewRoomContent">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="viewRoomContentCard">
                                                            <div className="mb-2">
                                                                <strong className="me-1">unit No:</strong>102
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Unit Status:</strong>Dirty
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Bed Type:</strong>Single
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Floor No.:</strong>1st
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="viewRoomContentCard">
                                                            <div className="mb-2">
                                                                <strong className="me-1">Class:</strong>Super Deluxe
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Category:</strong>Executive Ruby
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Min.Occupancy:</strong>1
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Max.Occupancy:</strong>1
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="viewRoomContentCard">
                                                            <div className="mb-2">
                                                                <strong className="me-1">Allotment:</strong> MMT
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Base Room Price:</strong>₹120.00
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong className="me-1">Details:</strong>Lorem ipsum dolor sit amet
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="viewRoomContentCard">
                                                            <div className="viewRoomImg">
                                                            <img
                                                                src="../assets/viewRoom.jpg"
                                                                alt="img"
                                                                className="w-100 h-100"
                                                            ></img>
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
                </div>
            </div>
        </div>
    );
}

export default ViewRoom;
