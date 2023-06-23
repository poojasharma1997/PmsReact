import React from "react";
import "./room.css";

import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";

import DataTable from "react-data-table-component";

function DormLayout() {
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
            <div className="mainHeading px-3">Dorm Layout</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader bg-white mb-5 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 viewRoomBg">
                      
                      <div className="viewRoomContent">
                        <div className="row">
                          <div className="col-auto">
                            <div className="dormLayoutInner">
                              <div className="dormImg">
                                <img src="./assets/dorm2.png" className="w-100 h-100" alt=""></img>
                              </div>
                              <a href="" className="topdormLink">U-10</a>
                              <a href="" className="bottomdormLink">L-10</a>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="dormLayoutInner">
                              <div className="dormImg">
                                <img src="./assets/dorm2.png" className="w-100 h-100" alt=""></img>
                              </div>
                              <a href="" className="topdormLink">U-11</a>
                              <a href="" className="bottomdormLink">L-11</a>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="dormLayoutInner">
                              <div className="dormImg">
                                <img src="./assets/dorm2.png" className="w-100 h-100" alt=""></img>
                              </div>
                              <a href="" className="topdormLink">U-12</a>
                              <a href="" className="bottomdormLink">L-12</a>
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

export default DormLayout;
