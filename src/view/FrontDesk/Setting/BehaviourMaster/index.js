import React from "react";
import Header from "../../../../CommonComponents/Header";
import { Link } from "react-router-dom";
// import editIcon from '../../src/assets/edit.svg';
// import deletIcon from '../../src/assets/delete.svg';
// import addCatIcon from '../../src/assets/plus.svg';
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";

function BehaviourMaster() {
  const columns = [
    {
      name: "Type	",
      selector: (row) => row.type,
    },
    {
      name: "Status",
      cell: (row) => (
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            className="shadow-none"
          />
        </Form>
      ),
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
      type: "Behaviour	",
    },
    {
      id: 2,
      type: "Activity	",
    },
    {
      id: 3,
      type: "Payment Nature	",
    },
    {
      id: 4,
      type: "Cleanliness	",
    },
  ];

  return (
    <div className="mainContent" id="mainContent">
      <Header></Header>
      <div className="section">
        <div className="row gy-4">
          <div className="col-12 pt-3">
            <div className="mainHeading px-3">Behaviour List</div>
          </div>
          <div className="col-12">
            <div className="sectionContent shadow">
              <div className="row">
                <div className="col-12">
                  <div className="sectionContentHeader py-2 px-4 mb-4 rounded-3">
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="sectionHeaderHeaing">
                          Behaviour List
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/addBehaviour"
                          className="addCategory d-flex align-items-center rounded-5"
                        >
                          <span className="catIcon d-flex me-3">
                            <img
                              src="./assets/plus.svg"
                              alt=""
                              className="img-fluid catImg"
                            />
                          </span>
                          <div className="categoryText">Add Behaviour</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sectionContentBody">
                    <DataTable columns={columns} data={data} />

                    {/*  <Table responsive className='sectiontable amenities'>
                                    <thead>
                                        <tr>
                                            <th>Amenities Name</th>
                                            <th>Symbol</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Air Conditioner</td>
                                            <td>airconditioner.png</td>
                                            <td>
                                                <Form>
                                                    <Form.Check type="switch" id="custom-switch" className='shadow-none'/>
                                                </Form>
                                            </td>
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
                                            <td>Televisionr</td>
                                            <td>tv.png</td>
                                            <td>
                                                <Form>
                                                    <Form.Check type="switch" id="custom-switch" className='shadow-none'/>
                                                </Form>
                                            </td>
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
                                            <td>Room Heater</td>
                                            <td>heater.jpg</td>
                                            <td>
                                                <Form>
                                                    <Form.Check type="switch" id="custom-switch" className='shadow-none'/>
                                                </Form>
                                            </td>
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

export default BehaviourMaster;
