import React from "react";
import FormAdd from "./FormAdd";

import { Row, Card, Col, Divider } from "antd";
import TotalSection from "./TotalSection";

export default function BarangCard() {
  const table_header = [
    { title: "Barang", span: 4 },
    { title: "Batch", span: 4 },
    { title: "ED", span: 3 },
    { title: "Harga@", span: 3 },
    { title: "Qty", span: 1 },
    { title: "Satuan", span: 3 },
    { title: "Diskon", span: 2 },
    { title: "Subtotal", span: 4 },
  ];

  return (
    <Card bordered={false} style={{ marginTop: 16 }}>
      <Row>
        {table_header.map((item, index) => {
          return (
            <Col key={index} span={item.span}>
              <strong>{item.title}</strong>
            </Col>
          );
        })}
      </Row>
      <Divider />
      <FormAdd />
      <Divider />
      <TotalSection />
    </Card>
  );
}
