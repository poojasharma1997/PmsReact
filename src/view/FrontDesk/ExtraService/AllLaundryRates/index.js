import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import { MDBSwitch } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";

function AllLaundryRates() {
  const columns = [
    {
      name: "Cloth Type",
      selector: (row) => row.clothtype,
    },
    {
      name: "FabricType",
      selector: (row) => row.fabricType,
    },
    {
      name: "LaundryRate	.",
      selector: (row) => row.laundryRate,
    },
    {
      name: "DryCleaningRate		",
      selector: (row) => row.dryCleaningRate,
    },
    {
      name: "IroningRate		",
      selector: (row) => row.ironingRate,
    },
    {
      name: "DefaultType		",
      selector: (row) => row.defaultType,
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
      clothtype: "Trousers",
      fabricType: "Cotton",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
    },
    {
      id: 1,
      clothtype: "Saree",
      fabricType: "Linen",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
    },
    {
      id: 1,
      clothtype: "Shirt",
      fabricType: "Cotton",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
    },
    {
      id: 1,
      clothtype: "Trousers",
      fabricType: "Linen",
      laundryRate: "₹30.00		",
      dryCleaningRate: "₹80.00		",
      ironingRate: "₹10.00		",
      defaultType: "---",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading  px-3">All Laundry Rates Plan</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          All Laundry Rate Plan List
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/restLaundryRates"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">
                            Add Rest Laundry Rates
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />

                    {/*  <Table responsive className='sectiontable categoryList'>
                                          <thead>
                                              <tr>
                                                  <th>Cloth Type	</th>
                                                  <th>Fabric Type		</th>
                                                  <th>Laundry Rate		</th>
                                                   <th>Dry Cleaning Rate		</th>
                                                   <th>Ironing Rate		</th>
                                                   <th>Default Type		</th>
                                                   <th>Action	</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              
                                          <tr>
                                                  <td>Trousers</td>
                                                  <td>Cotton</td>
                                                  <td>₹30.00</td>
                                                  <td>₹80.00</td>
                                                  <td>₹10.00</td>
                                                  <td>---</td>
                                                

                                                  <td>
                                                  <div className='row mx-0 gy-1 flex-nowrap'>
                                                          <div className='col-auto pe-0'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={editIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                          <div className='col-auto'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={deletIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                      </div>
                                                  </td>
                                              </tr>
                                              

                                              <tr>
                                                  <td>Saree</td>
                                                  <td>Linen</td>
                                                  <td>₹30.00</td>
                                                  <td>₹90.00</td>
                                                  <td>₹10.00</td>
                                                  <td>---</td>
                                                

                                                  <td>
                                                  <div className='row mx-0 gy-1 flex-nowrap'>
                                                          <div className='col-auto pe-0'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={editIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                          <div className='col-auto'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={deletIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  </tr>

                                                  <tr>
                                                  <td>Shirt</td>
                                                  <td>Cotton</td>
                                                  <td>₹40.00</td>
                                                  <td>₹80.00</td>
                                                  <td>₹10.00</td>
                                                  <td>---</td>
                                                

                                                  <td>
                                                  <div className='row mx-0 gy-1 flex-nowrap'>
                                                          <div className='col-auto pe-0'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={editIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                          <div className='col-auto'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={deletIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                      </div>
                                                  </td>
                                      </tr>
                                      <tr>
                                                  <td>Trousers</td>
                                                  <td>Linen</td>
                                                  <td>₹30.00</td>
                                                  <td>₹80.00</td>
                                                  <td>₹10.00</td>
                                                  <td>---</td>
                                                

                                                  <td>
                                                  <div className='row mx-0 gy-1 flex-nowrap'>
                                                          <div className='col-auto pe-0'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={editIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                          <div className='col-auto'>
                                                              <Link to='' className='tableEditButton'>
                                                                  <img src={deletIcon} alt="" className='img-fluid' />
                                                              </Link>
                                                          </div>
                                                      </div>
                                                  </td>
                                              </tr>
                                                 
                                          </tbody>
                                          </Table>*/}
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

export default AllLaundryRates;
