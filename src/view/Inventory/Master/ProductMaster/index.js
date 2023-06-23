import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from "../../src/assets/edit.svg";
// import deletIcon from "../../src/assets/delete.svg";
// import addCatIcon from "../../src/assets/plus.svg";
import Table from "react-bootstrap/Table";
import { MDBSwitch } from "mdb-react-ui-kit";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Form from "react-bootstrap";
import DataTable from "react-data-table-component";
import MUIDataTable from "mui-datatables";
{
    /**/
}
function ProductMaster() {
    
      const columns = [
        {
          name: 'SR. No.',
          options: {
            filter: false,
          }
        },
          {
            name: 'Image',
            options: {
              filter: false,
            }
          },
        {
          name: 'Product',
          options: {
            filter: true,
          }
        },
        {
          name: 'Product Code',
          options: {
            filter: true,
          }
        },
        {
          name: 'Category',
          options: {
            filter: true,
          }
        },
        {
          name: 'UOM',
          options: {
            filter: false,
          }
        },
        {
          name: 'Purchase Price',
          options: {
            filter: true,
          }
        },
        {
          name: 'Selling Price',
          options: {
            filter: false,
          }
        },
       
        {
          name: 'Current Stock',
          options: {
            filter: false,
          }
        },
      ];
    
      const data = [
        ['1', <img src='/assets/banana.jpg' alt='banana' style={{width:'50px'}}/>, 'Banana',<a href="/app/ui/product-details" style={{textDecoration:'none'}}>SB067895</a>,'Fruits & Vegetables','Dozen','33.80','50.10','30 Dozen'],
        ['2', <img src='/assets/lays.jpg' alt='lays' style={{width:'40px'}}/>, 'Lays', 'SB077825','Packet Food','Piece','8.10', '10','100 Piece'],
        ['3', <img src='./assets/chicken.jpg' style={{width:'60px'}}/>, 'Chicken', 'SB067889', 'Food & Grocery','KG','85.50', '235.70','100 KG'],
        ['4', <img src='./assets/apple.jpg' style={{width:'50px'}}/>, 'Apple', 'SB078670', 'Fruit & Vegetables','KG','120.00', '160.00','50 KG'],
        ['5', <img src='./assets/coke.jpg' style={{width:'40px'}}/>, 'Coke', 'SB067769','Drinks', 'LT','33.50','40.00','50 LT'],
        ['6', <img src='./assets/pasta.jpg' style={{width:'40px'}}/>, 'Pasta',  'SB067978','Packet Food','KG','33.50', '45.70','70 KG'],
        ['7', <img src='./assets/carrot.jpg' style={{width:'40px'}}/>, 'Carrot', 'SB067994','Fruits & Vegetables','KG','23.50', '34.70','50 KG'],
      ];
    
      const options = {
        filterType: 'dropdown',
        responsive: 'vertical',
        print: true,
        rowsPerPage: 10,
        page: 0
      };
    
    return (
        <div className="mainContent" id="mainContent">
            <Header></Header>
            <div className="section">
                <div className="row gy-4">
                    <div className="col-12 pt-3">
                        <div className="mainHeading  px-3">Product List </div>
                    </div>
                    <div className="col-12">
                        <div className="sectionContent shadow">
                            <div className="row">
                                <div className="col-12">
                                    <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                                        <div className="row d-flex align-items-center">
                                            <div className="col">
                                                <div className="sectionHeaderHeaing">
                                                    Product List
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <Link
                                                    to="/addProduct"
                                                    className="addCategory d-flex align-items-center rounded-5"
                                                >
                                                    <span className="catIcon d-flex me-3">
                                                        <img
                                                            src="./assets/plus.svg"
                                                            alt=""
                                                            className="img-fluid catImg"
                                                        />
                                                    </span>
                                                    <div className="categoryText">Add  New Product</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="sectionContentBody">
                                        {/* <DataTable columns={columns} data={data} selectableRows /> */}
                                        <MUIDataTable
                                           
                                            data={data}
                                            columns={columns}
                                            options={options}
                                        />
                                        {/* <Table responsive className="sectiontable categoryList">
                      <thead>
                        <tr>
                          <th>Season</th>
                          <th>Start Date </th>
                          <th>End Date </th>
                          <th>Room Category </th>
                          <th>Meal Plan </th>
                          <th>Base Price </th>
                          <th>Occupancy Wise Updated Price </th>
                          <th>Status </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Peak</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Standard</td>
                          <td>EP</td>
                          <td>1500.00</td>
                          <td>Single---2000.00</td>
                          <td>
                            <MDBSwitch /> <br />
                          </td>

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
                          <td>Mid</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Deluxe</td>
                          <td>AP</td>
                          <td>1500.00</td>
                          <td>Double---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
                          </td>
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
                          <td>Low</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Semi Deluxe</td>
                          <td>No Meal Plan</td>
                          <td>1500.00</td>
                          <td>Triple---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
                          </td>
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
                          <td>Special</td>
                          <td>06/01/2022</td>
                          <td>06/03/2022</td>
                          <td>Deluxe</td>
                          <td>EP</td>
                          <td>1500.00</td>
                          <td>Default---2000.00</td>
                          <td>
                            {" "}
                            <MDBSwitch /> <br />
                          </td>
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

export default ProductMaster;
