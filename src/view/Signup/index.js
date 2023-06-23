import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../view/formPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";
import { createTechVal } from "../../api/ApiInstance";

function Signup() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    // selectOption: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log("submitted");
    console.log("Form Data", values);
    const body = {
      user_type: values.usertype,
      user_name: values.name,
      user_email: values.email,
      user_password: values.password,
    };
    console.log(">>>>>>>>>>>>", body);
    const res = await createTechVal("api/admin/admin-create", body);
    console.log("res", res);
    // navigate("/otp");
    // console.log("fsdafds", body);
  };

  if (!!!localStorage.getItem('token')) {
    return (
      <div className="container-fluid vh-100 position-realtive formBg">
        <div className="form shadow">
          <div className="formWidth py-4">
            <Row className="mb-4">
              <Col md={12} className="text-center">
                <div className="formHeading">Sign up</div>
              </Col>
            </Row>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <FormikForm>
                    {/* <Form> */}
                    <Row className="gy-3">
                      <Col md={12}>
                        <Form.Group className="" controlId="formBasicEmail">
                          <Form.Label>User Type :</Form.Label>
                          {/* <Form.Control
                            className="shadow-none"
                            type="text"
                            placeholder=""
                          /> */}
                          <FormikControl
                            control="input"
                            type="text"
                            name="usertype"
                            placeholder="user type"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="" controlId="formBasicEmail">
                          <Form.Label>User Name :</Form.Label>
                          {/* <Form.Control
                            className="shadow-none"
                            type="text"
                            placeholder="Enter your name"
                          /> */}
                          <FormikControl
                            control="input"
                            type="text"
                            name="name"
                            placeholder="username"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="" controlId="formBasicEmail">
                          <Form.Label>User Email :</Form.Label>
                          {/* <Form.Control
                            className="shadow-none"
                            type="email"
                            placeholder="Enter your email"
                          /> */}
                          <FormikControl
                            control="input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="" controlId="formBasicPassword">
                          <Form.Label>User Password :</Form.Label>
                          {/* <Form.Control
                            className="shadow-none"
                            type="password"
                            placeholder="enter your Password"
                          /> */}
                          <FormikControl
                            control="input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Row>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="shadow-none"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`${type}`}
                                />
                              </div>
                            ))}
                          </Col>
                          <Col md="auto">
                            <Link to="" className="forgetPassword">
                              forgot Password
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={12} className="text-center pt-3">
                        <Button type="submit" className="formButton">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                    {/* </Form> */}
                  </FormikForm>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  } else {
    navigate('/dashboard')
  }

}

export default Signup;
