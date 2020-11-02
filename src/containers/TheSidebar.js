import React from "react";
import { Layout, Menu, Divider, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function TheSidebar() {
  return (
    <Sider>
      <div className="logo">
        <img src="img/logo_white.png" alt="logo" />
      </div>
      <Row>
        <Col>
          <Avatar size="large">R</Avatar>
        </Col>
        <Col>
          <h3 style={{ color: "#ffffff", textAlign: "center" }}>Rizal</h3>
        </Col>
      </Row>

      <Divider style={{ border: "solid 1px #ffffff" }} />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
