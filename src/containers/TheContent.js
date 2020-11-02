import React from "react";

import { Layout, Row, Col, Card, Button } from "antd";
const { Content } = Layout;

export default function TheContent() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <h5>Faktur Pembelian</h5>
      <Row gutter={16}>
        <Col span={20}>
          <h1 style={{ fontSize: "30px" }}>
            <strong>Catat faktur pembelian</strong>
          </h1>
        </Col>
        <Col>
          <Button
            size="large"
            style={{ marginRight: "15px", borderRadius: "5px" }}
          >
            Batal
          </Button>
          <Button size="large" style={{ borderRadius: "5px" }}>
            Simpan faktur
          </Button>
        </Col>
      </Row>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
          <Col span={24}>
            <Card title="Card title" bordered={false} style={{ marginTop: 16 }}>
              Card content
            </Card>
          </Col>
        </div>
      </div>
    </Content>
  );
}
