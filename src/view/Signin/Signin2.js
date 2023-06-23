import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import '../../view/formPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

function Signin2({setSidebarShow}) {
    useEffect(()=>{setSidebarShow(false)},[])
    const navigate = useNavigate()
  return (
   
   
            <div className='container-fluid vh-100 position-realtive formBg'>
                <div className='form shadow'>
                    <div className='formWidth py-4'>
                        <Row className='mb-4'>
                            <Col md={12} className='text-center'>
                                <div className='formHeading'>
                                    Hotel International (PMS)
                                </div>
                            </Col>
                        </Row>
                        <Form>
                            <Row className='gy-3'>
                                <Col md={12}>
                                    <Row className=' justify-content-center'>
                                        <Col md={6}>
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Select className='shadow-none' placeholder='property Name'>
                                                <option>property Name</option>
                                                <option>Disabled select</option>
                                                <option>Disabled select</option>
                                            </Form.Select>
                                        </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Row className=' justify-content-center'>
                                        <Col md={6}>
                                        <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Select className='shadow-none' placeholder='Location'>
                                            <option>Location</option>
                                            <option>Disabled select</option>
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                                <Col md={12} className='text-center pt-3'>
                                    <Button type="submit" onClick={()=>navigate('/signin3')} className='formButton'>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
      
   
  )
}

export default Signin2