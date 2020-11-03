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
    <Sider
      collapsible
      breakpoint="lg"
      collapsedWidth="0"
      zeroWidthTriggerStyle={{ top: "90%" }}
    >
      <div className="logo" />
      <p className="logo_text">Apotik Rizal</p>
      <Row justify="left">
        <Col>
          <Avatar className="avatar" size="large">
            <strong>R</strong>
          </Avatar>
        </Col>
        <Col className="user">
          <h3>Rizal</h3>
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
