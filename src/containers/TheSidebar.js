import React from "react";
import { Layout, Menu, Divider, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import "./TheSidebar.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function TheSidebar() {
  return (
    <Sider collapsible>
      <div className="logo" />
      <Row>
        <Col>
          <Avatar size="large">R</Avatar>
        </Col>
        <Col>
          <h3 style={{ color: "#ffffff", textAlign: "center" }}>Rizal</h3>
        </Col>
      </Row>

      <Divider style={{ border: "solid 1px #ffffff" }} />
      <Menu theme="dark" defaultSelectedKeys={["3"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Kasir
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Inventori
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Stok barang</Menu.Item>
          <Menu.Item key="4">Faktur pembelian</Menu.Item>
          <Menu.Item key="5">PBF</Menu.Item>
          <Menu.Item key="6">Stok opnam</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<FileOutlined />}>
          Pengaturan
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
