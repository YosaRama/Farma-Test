import React from "react";

import { Col, Input, Row, Select, Form, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function FormAdd() {
  return (
    <Form>
      <Row gutter={6}>
        <Col lg={4} sm={24}>
          <Form.Item
            name="nama_barang"
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
        <Col lg={4} sm={24}>
          <Form.Item name="batch">
            <Input placeholder="Batch" />
          </Form.Item>
        </Col>
        <Col lg={3} sm={24}>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: "Please input date!",
              },
            ]}
          >
            <Row>
              <Col lg={12} sm={24}>
                <Input placeholder="MM" name="month" />
              </Col>
              <Col lg={12} sm={24}>
                <Input placeholder="DD" name="month" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col lg={3} sm={24}>
          <Form.Item
            name="price"
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
          <Form.Item name="qty">
            <Input type="number" placeholder="0" />
          </Form.Item>
        </Col>
        <Col lg={2} sm={24}>
          <Form.Item name="type">
            <Select defaultValue="Pcs">
              <Option>Pcs</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col lg={3} sm={24}>
          <Form.Item name="diskon">
            <Input
              type="number"
              placeholder="0"
              addonBefore={
                <Form.Item name="prefix" noStyle>
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
                  <Button>
                    <DeleteOutlined style={{ fontSize: "25px" }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
