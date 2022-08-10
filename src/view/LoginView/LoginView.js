// React
import React from "react";

// Style
import "./LoginView.css";

// Antd
import { UserOutlined } from "@ant-design/icons";
import { Col , Button, Input, Row} from "antd/lib";

export default function LoginView() {
  return (
    <div className="login-view-container">
      <Col className="login-view-inner-container">
        <Row className="login-view-input">
          <Input
            size="large"
            placeholder={"Enter your username"}
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Row>
        <Row className="login-view-input">
          <Input.Password
            placeholder="Enter your password"
   
          />
        </Row>
        <Row className="login-view-button">
            <Button>
                Save
            </Button>
        </Row>
      </Col>
    </div>
  );
}
