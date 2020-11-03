import React from "react";

import { Col, Row, Select, Form, DatePicker } from "antd";
const { Option } = Select;

export default function PembelianCard(props) {
  const purchase_type = props.type;
  return (
    <Form
      name="purchase_type"
      initialValues={{
        remember: true,
      }}
    >
      <Row>
        <Col span={4}>
          <Form.Item>
            <label>Pembayaran</label>
            <Select onChange={props.onChange} defaultValue="Kredit">
              <Option value="kredit">Kredit</Option>
              <Option value="tunai">Tunai</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={6}>
        <Col span={6}>
          <Form.Item>
            <label>Tanggal pembelian</label>
            <br />
            <DatePicker format="DD-MM-YYYY" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <label>Jatuh tempo</label>
            <br />
            <DatePicker
              format="DD-MM-YYYY"
              disabled={purchase_type === "tunai" ? true : false}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
