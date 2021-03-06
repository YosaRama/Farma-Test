import React, { useState } from "react";
import FormAdd from "./FormAdd";

import { Row, Card, Col, Divider, Form } from "antd";
import TotalSection from "./TotalSection";

export default function BarangCard(props) {
  const table_header = [
    { title: "Barang", lg: 3 },
    { title: "Batch", lg: 3 },
    { title: "ED", lg: 3 },
    { title: "Harga@", lg: 3 },
    { title: "Qty", lg: 1 },
    { title: "Satuan", lg: 2 },
    { title: "Diskon", lg: 3 },
    { title: "Subtotal", lg: 4 },
  ];

  const ppnStatus = props.status;
  const purchase_type = props.type;

  const [count, setCount] = useState(0);

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
      <Form>
        <Form.List name="item">
          {(fields, { add, remove }, { errors }) => (
            <>
              <FormAdd onAdd={() => add()} />
              {setCount(fields.length + 1)}
              {fields.map((field, index) => {
                return (
                  <FormAdd
                    {...field}
                    key={field.key}
                    onDelete={() => remove(field.name)}
                    onAdd={() => add()}
                  />
                );
              })}
            </>
          )}
        </Form.List>
      </Form>
      <Divider />
      <TotalSection status={ppnStatus} type={purchase_type} count={count} />
    </Card>
  );
}
