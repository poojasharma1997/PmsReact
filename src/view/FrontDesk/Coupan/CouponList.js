import React from "react";
// import "../view/View.css";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

function CouponList() {
  const columns = [
    {
      name: "Coupon Name",
      selector: (row) => row.cName,
    },
    {
      name: "Coupon Code",
      selector: (row) => row.cCode,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
    },
    {
      name: "Discount Amt.(Rs.)",
      selector: (row) => row.discountAmt,
    },
    {
      name: "Discount Type",
      selector: (row) => row.discountType,
    },
    {
      name: "Action",
      cell: (row) => (
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
      cName: "C1",
      cCode: "C001",
      startDate: "05/01/2022",
      endDate: "06/02/2022",
      discountAmt: "200",
      discountType: "Fixed",
    },
    {
      id: 2,
      cName: "C2",
      cCode: "C002",
      startDate: "05/01/2022",
      endDate: "06/02/2022",
      discountAmt: "200",
      discountType: "Fixed",
    },
    {
      id: 3,
      cName: "C3",
      cCode: "C003",
      startDate: "05/01/2022",
      endDate: "06/02/2022",
      discountAmt: "500",
      discountType: "Fixed",
    },
    {
      id: 4,
      cName: "C4",
      cCode: "C004",
      startDate: "05/01/2022",
      endDate: "06/02/2022",
      discountAmt: "300",
      discountType: "Fixed",
    },
  ];
  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Coupon List</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          All Coupon List
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addcoupan"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Coupon</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />
                    {/* <Table responsive className="sectiontable categoryList">
                      <thead>
                        <tr>
                          <th>Coupon Name</th>
                          <th>Coupon Code </th>
                          <th>Start Date </th>
                          <th>End Date </th>
                          <th>Discount Amt.(Rs.) </th>
                          <th>Discount Type </th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>C1</td>
                          <td>C001</td>
                          <td>05/01/2022</td>
                          <td>06/02/2022</td>
                          <td>200</td>
                          <td>Fixed</td>

                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>C2</td>
                          <td>C002</td>
                          <td>05/01/2022</td>
                          <td>06/02/2022</td>
                          <td>200</td>
                          <td>Fixed</td>

                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>C3</td>
                          <td>C003</td>
                          <td>05/01/2022</td>
                          <td>06/02/2022</td>
                          <td>500</td>
                          <td>Fixed</td>

                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>C4</td>
                          <td>C004</td>
                          <td>05/01/2022</td>
                          <td>06/02/2022</td>
                          <td>300</td>
                          <td>Fixed</td>

                          <td>
                            <div className="row mx-0 gy-1 flex-nowrap">
                              <div className="col-auto pe-0">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={editIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="col-auto">
                                <Link to="" className="tableEditButton">
                                  <img
                                    src={deletIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table> */}
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

export default CouponList;
