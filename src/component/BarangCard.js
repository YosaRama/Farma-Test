import React from "react";
import FormAdd from "./FormAdd";

import { Row, Card, Col, Divider } from "antd";
import TotalSection from "./TotalSection";

export default function BarangCard() {
  const table_header = [
    { title: "Barang", lg: 4 },
    { title: "Batch", lg: 4 },
    { title: "ED", lg: 3 },
    { title: "Harga@", lg: 3 },
    { title: "Qty", lg: 1 },
    { title: "Satuan", lg: 2 },
    { title: "Diskon", lg: 3 },
    { title: "Subtotal", lg: 4 },
  ];

  return (
    <Card bordered={false} style={{ marginTop: 16 }}>
      <Row>
        {table_header.map((item, index) => {
          return (
            <Col key={index} lg={item.lg} sm={item.sm}>
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
