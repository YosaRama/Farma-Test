import React from "react";

import { Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

export default function SupplierCard() {
  return (
    <Form
      name="supplier"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input supllier here!",
          },
        ]}
      >
        <label>
          Supplier <span style={{ color: "red" }}>*</span>
        </label>
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col lg={15} sm={24}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input Invoice Number!",
              },
            ]}
          >
            <label>
              Nomor Faktur <span style={{ color: "red" }}>*</span>
            </label>
            <Input placeholder="No.Faktur" />
          </Form.Item>
        </Col>
        <Col lg={5} sm={24}>
          <Form.Item>
            <label>Harga Termasuk PPN</label>
            <Select>
              <Option value="ya">Ya</Option>
              <Option value="tidak">Tidak</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
