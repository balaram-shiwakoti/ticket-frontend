import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const ResetPassword = ({
  handleOnchange,
  email,
  handleResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleResetSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnchange}
                value={email}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Button className="mt-2" type="submit">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login now
          </a>
        </Col>
      </Row>
    </Container>
  );
};
ResetPassword.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
