import React from "react";

import { Col, Input, Row, Select, Form, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function FormAdd() {
  return (
    <Form>
      <Row gutter={6}>
        <Col span={4}>
          <Form.Item>
            <Input placeholder="Nama Barang" name="nama_barang" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Input placeholder="Batch" name="batch" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Row>
              <Col span={12}>
                <Input placeholder="MM" name="month" />
              </Col>
              <Col span={12}>
                <Input placeholder="DD" name="month" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item
            name="qty"
            rules={[
              {
                required: true,
                message: "Please input quantity!",
              },
            ]}
          >
            <Input type="number" addonBefore="IDR" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={1}>
          <Form.Item>
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Select>
              <Option>Pcs</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item
            name="diskon"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              type="number"
              addonBefore={
                <Form.Item name="prefix" noStyle>
                  <Select style={{ width: 60 }}>
                    <Option value="%">%</Option>
                  </Select>
                </Form.Item>
              }
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Row>
            <Col span={12}>
              <h3>IDR</h3>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <h3>0</h3>
                </Col>
                <Col span={12}>
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
