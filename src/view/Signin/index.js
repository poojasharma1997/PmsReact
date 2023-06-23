import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../../view/formPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";
import { createTechVal } from "../../api/ApiInstance";
import { useNavigate } from "react-router-dom";

function Signin({setSidebarShow}) {
  const navigate = useNavigate();
useEffect(()=>{setSidebarShow(false)},[])
 const[email,setEmail] =useState('')
 const[password,setPassword] = useState('')
  
  const onSubmit = async () => {
   
    const body = {
      user_email: email,
      user_password: password
    };
    localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTBjNTBhNDZiYWQ4ZDE4YmJhODQiLCJpYXQiOjE2Nzg4NjMxMjR9.okCDYuEmKScEFjotrpl2sRfx2YJouJjL5lVbCN4LFg4')
    navigate('/signin2')
    console.log(">>>>>>>>>>>>---login", body);
    // const res = await createTechVal("api/admin/admin-login", body);
    // console.log("res", res);
    // console.log("res.success", res.success);
    // if (res.success)
    // {
    //   localStorage.setItem("token", JSON.stringify(res.token));
      
    //   navigate('/signin2')
    // };
  };
  if(!!!localStorage.getItem('token')){
    return (
      <div className='container-fluid vh-100 position-realtive formBg'>
      <div className='form shadow'>
          <div className='formWidth py-4'>
              <Row className='mb-4'>
                  <Col md={12} className='text-center'>
                      <div className='formHeading'>
                          Sign in
                      </div>
                  </Col>
              </Row>
          <Form>
              <Row className="justify-content-center">
                  <Col md={7}>
                  <Row className='gy-3'>
                  <Col md={12}>
                      <Form.Group className="" controlId="formBasicEmail">
                          <Form.Label>Email address :</Form.Label>
                          <Form.Control className='shadow-none' type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                          
                      </Form.Group>
                  </Col>
                  <Col md={12}>
                      <Form.Group className="" controlId="formBasicPassword">
                          <Form.Label>Password :</Form.Label>
                          <Form.Control className='shadow-none' type="password" placeholder="enter your Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                      </Form.Group>
                  </Col>
                  <Col md={12}>
                      <Row>
                          <Col>
                              {['checkbox'].map((type) => (
                                  <div key={`default-${type}`} 
                                  className='shadow-none'>
                                  <Form.Check 
                                      type={type}
                                      id={`default-${type}`}
                                      label={`${type}`
                                  }
                                  />
                                  </div>
                              ))}
                          </Col>
                          <Col md="auto">
                              <Link to="" className='forgetPassword'>forgot Password</Link>
                          </Col>
                      </Row>
                  </Col>
                  <Col md={12} className='text-center pt-3'>
                      <Button type="submit" className='formButton' onClick={()=>onSubmit()}>
                          Submit
                      </Button>
                  </Col>
              </Row>
                  </Col>
              </Row>
              
          </Form>
          </div>
      </div>
  </div>    
    );
  }else{
    navigate('/dashboard')
  }
  
}

export default Signin;
