import React from "react";

import { Col, Divider, Input, Row, Select, Form } from "antd";
const { Option } = Select;

export default function TotalSection() {
  return (
    <Row>
      <Col lg={16}>
        <p>0 dari maks. 25 barang per faktur</p>
      </Col>
      <Col lg={8} style={{ textAlign: "right" }}>
        <Row>
          <Col span={12}>
            <h3>Subtotal</h3>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <p>IDR</p>
              </Col>
              <Col span={12}>
                <p>0</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h3>Diskon Pembelian</h3>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <p>IDR</p>
              </Col>
              <Col span={12}>
                <p>0</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <h3>DPP</h3>
          </Col>
          <Col span={8} offset={4}>
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
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h3>PPN</h3>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <p>IDR</p>
              </Col>
              <Col span={12}>
                <p>0</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <h3>Biaya Materai</h3>
          </Col>
          <Col span={9} offset={3}>
            <Input
              type="number"
              addonBefore="IDR"
              style={{ width: "100%" }}
              placeholder="0"
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <h3>Total tagihan</h3>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <p>IDR</p>
              </Col>
              <Col span={12}>
                <p>0</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
