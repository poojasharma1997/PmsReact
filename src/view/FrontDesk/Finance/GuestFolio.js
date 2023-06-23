import React from "react";
import Header from "../../../CommonComponents/Header";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


{
  /**/
}
function GuestFolio() {
  const columns = [
    {
      name: "Folio",
      selector: (row) => row.folio,
    },
    {
      name: "Room",
      selector: (row) => row.room,
    },
    {
      name: "Guest",
      selector: (row) => row.guest,
    },
    {
      name: "Arrival",
      selector: (row) => row.arrival,
    },
    {
      name: "Departure",
      selector: (row) => row.departure,
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
    },
  ];
  const options = {
    filterType: "dropdown",
    responsive: "vertical",
    print: true,
    rowsPerPage: 10,
    page: 0,
  };
  const data = [
    ['01', '205', 'Mr Ronald Carter', '26/04/2022', '01/05/2022', '₹772.00' ],
    ['27', '203', 'Mr Ronald Carter', '26/04/2022', '01/05/2022', '₹772.00'],
    ['29', '107', 'Mr Ronald Carter', '25/04/2022', '26/04/2022', '₹1003.00'],
    ['89', '101', 'Mr Ronald Carter', '26/04/2022', '28/04/2022', '₹548.50'],
    ['90', '102', 'Mr Ronald Carter', '26/04/2022', '05/05/2022', '₹169.00'],
    ['93', '104', 'Mr Ronald Carter', '25/04/2022', '01/05/2022', '₹169.00'],
    ['94', '105', 'Mr Ronald Carter', '26/04/2022', '01/05/2022', '₹548.50'],
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">Guest Folio </div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Guest Folio List
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
                <div className="col-12">
                <span style={{paddingRight:'20px'}}>Transaction</span>
                <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Inhouse"
              style={{padding:'0px 10px'}}
            />
            <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Reservation"
              style={{padding:'0px 10px'}}
            />
            <FormControlLabel
              control={(
                <Checkbox />
              )}
              label="Check Out"
              style={{padding:'0px 10px'}}
            />
                  <div className="sectionContentBody">
                    <MUIDataTable
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

export default GuestFolio;
