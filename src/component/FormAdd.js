import React from "react";

import { Col, Input, Row, Select, Form, Button, DatePicker } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";

const { Option } = Select;

export default function FormAdd(props) {
  return (
    <Row gutter={6}>
      <Col lg={3} sm={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input placeholder="Nama Barang" />
        </Form.Item>
      </Col>
      <Col lg={3} sm={24}>
        <Form.Item>
          <Input placeholder="Batch" />
        </Form.Item>
      </Col>
      <Col lg={3} sm={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input date!",
            },
          ]}
        >
          <Row>
            <Col lg={12} sm={24}>
              <DatePicker placeholder="MM" name="month" picker="month"/>
            </Col>
            <Col lg={12} sm={24}>
              <Input placeholder="DD" name="date" />
            </Col>
          </Row>
        </Form.Item>
      </Col>
      <Col lg={3} sm={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input quantity!",
            },
          ]}
        >
          <Input
            type="number"
            addonBefore="IDR"
            style={{ width: "100%" }}
            placeholder="0"
          />
        </Form.Item>
      </Col>
      <Col lg={1} sm={24}>
        <Form.Item>
          <Input type="number" placeholder="0" />
        </Form.Item>
      </Col>
      <Col lg={2} sm={24}>
        <Form.Item>
          <Select>
            <Option>Pcs</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col lg={3} sm={24}>
        <Form.Item>
          <Input
            type="number"
            placeholder="0"
            addonBefore={
              <Form.Item noStyle>
                <Select style={{ width: 55 }} defaultValue="%">
                  <Option value="%">%</Option>
                </Select>
              </Form.Item>
            }
          />
        </Form.Item>
      </Col>
      <Col lg={4} sm={24}>
        <Row>
          <Col lg={12} sm={24}>
            <h3>IDR</h3>
          </Col>
          <Col lg={12} sm={24}>
            <Row>
              <Col lg={12} sm={12}>
                <h3>0</h3>
              </Col>
              <Col lg={12} sm={12}>
                <ButtonGroup>
                  <Button size="large" onClick={props.onAdd}>
                    <PlusOutlined style={{ fontSize: "large" }} />
                  </Button>
                  <Button size="large" onClick={props.onDelete}>
                    <DeleteOutlined style={{ fontSize: "large" }} />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
