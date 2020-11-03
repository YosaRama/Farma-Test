import React from "react";

import { Layout, Row, Col, Card, Button } from "antd";
import SupplierCard from "../component/SupplierCard";
import PembelianCard from "../component/PembelianCard";
import BarangCard from "../component/BarangCard";

const { Content } = Layout;

export default function TheContent() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <h5>Faktur Pembelian</h5>
      <Row>
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
              <Card bordered={false}>
                <SupplierCard />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <PembelianCard />
              </Card>
            </Col>
          </Row>
          <Col span={24}>
            <BarangCard />
          </Col>
        </div>
      </div>
    </Content>
  );
}
