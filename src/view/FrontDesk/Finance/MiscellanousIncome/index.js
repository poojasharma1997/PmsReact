import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";

import DataTable from "react-data-table-component";
{
  /**/
}

function MiscellaneousIncome() {
  const columns = [
    {
      name: "Sr. No.",
      options: {
        filter: true,
      },
    },
    {
      name: " Date",
      options: {
        filter: true,
      },
    },
    {
      name: "Receive From",
      options: {
        filter: true,
      },
    },
    {
      name: "Item",
      options: {
        filter: false,
      },
    },

    {
      name: "Receive By",
      options: {
        filter: false,
      },
    },
    {
      name: "Profit Center",
      options: {
        filter: false,
      },
    },
    {
      name: "Mode Of Payment",
      options: {
        filter: false,
      },
    },

    {
      name: "Tax(%)",
      options: {
        filter: false,
      },
    },
    {
      name: "Amount",
      options: {
        filter: false,
      },
    },
    {
      name: "Total",
      options: {
        filter: false,
      },
    },
    {
      name: "Note",
      options: {
        filter: false,
      },
    },
  ];

  const data = [
    [
      "01",
      "26/04/2022",
      "Rabi Som",
      "Ponds",
      "Ujjal Das",
      "Kolkata",
      "Cash",
      "10.00",
      "1000.00 ",
      "1100.00",
      "Test",
    ],
    [
      "02",
      "26/04/2022",
      "Rahul Kar",
      "Soap",
      "Ujjal Das",
      "Kolkata",
      "Cash",
      "10.00",
      "100.00 ",
      "0.00",
      "Test",
    ],
    [
      "03",
      "26/04/2022",
      "Sagar Pal",
      "Soap",
      "Ujjal Das",
      "Kolkata",
      "Cash",
      "1.00",
      "1000.00",
      "0.00",
      "Test",
    ],
    [
      "04",
      "28/04/2022",
      "Sagar Pal",
      "Soap",
      "Ujjal Das",
      "Kolkata",
      "Cash",
      "1.00",
      "100.00 ",
      "0.00",
      "Test",
    ],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "vertical",
    print: true,
    rowsPerPage: 10,
    page: 0,
  };

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">All Miscellaneous Income</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          List Of All Miscellaneous Income
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addmiscellanous"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add New</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <MUIDataTable
                      title=""
                      data={data}
                      columns={columns}
                      options={options}
                    />
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

export default MiscellaneousIncome;
