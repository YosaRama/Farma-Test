import React, { useState } from "react";

import { Layout, Row, Col, Card, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SupplierCard from "../component/SupplierCard";
import PembelianCard from "../component/PembelianCard";
import BarangCard from "../component/BarangCard";

const { Content } = Layout;

export default function TheContent() {
  const [ppnType, setPpnType] = useState("Tidak");
  const [purchaseType, setPurchaseType] = useState("");

  function handleChangeStatus(value) {
    setPpnType(value);
  }
  function handleChangeType(value) {
    setPurchaseType(value);
  }

  return (
    <Content style={{ margin: "0 16px" }}>
      <h4>
        <ArrowLeftOutlined style={{ color: "#13C2CD" }} />
        Faktur Pembelian
      </h4>
      <Row>
        <Col lg={20} sm={24}>
          <h1 style={{ fontSize: "30px" }}>
            <strong>Catat faktur pembelian</strong>
          </h1>
        </Col>
        <Col>
          <Button
            size="large"
            style={{
              marginRight: "15px",
              borderRadius: "5px",
              border: "2px solid #13C2CD ",
              color: "#13C2CD",
            }}
          >
            <strong>Batal</strong>
          </Button>
          <Button
            size="large"
            style={{
              borderRadius: "5px",
              backgroundColor: "#13C2CD",
              color: "#ffffff",
            }}
          >
            <strong>Simpan faktur</strong>
          </Button>
        </Col>
      </Row>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col lg={12} sm={24} style={{ marginTop: 16 }}>
              <Card bordered={false}>
                <SupplierCard onChange={handleChangeStatus} />
              </Card>
            </Col>
            <Col lg={12} sm={24} style={{ marginTop: 16 }}>
              <Card bordered={false}>
                <PembelianCard
                  onChange={handleChangeType}
                  type={purchaseType}
                />
              </Card>
            </Col>
          </Row>
          <Col lg={24}>
            <BarangCard status={ppnType} type={purchaseType} />
          </Col>
        </div>
      </div>
    </Content>
  );
}
