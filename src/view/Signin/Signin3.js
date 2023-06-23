import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
import '../../view/formPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Sign3({setSidebarShow}) {
    useEffect(()=>{setSidebarShow(false)},[])
    const navigate = useNavigate()
    return (
        <div className='container-fluid vh-100 position-realtive formBg'>
            <div className='form shadow'>
                <div className='formWidth py-4'>
                    <Row className='mb-4'>
                        <Col md={12} className='text-center'>
                            <div className='formSmallHeading w-100'>
                            SELECT AN OPEN CASH DRAWER SESSION
                            </div>
                        </Col>
                    </Row>
                    <Form>
                        <Row className='gy-3 justify-content-center'>
                            <Col md={7}>
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Select className='shadow-none' placeholder='cash Drawer Name'>
                                        <option>cash Drawer Name</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12} className='text-center pt-3'>
                                <Button type="submit"  onClick={()=>{navigate('/dashboard'); setSidebarShow(true)}} className='formButton'>
                                    Continue
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Sign3