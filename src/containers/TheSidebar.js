import React from "react";
import { Layout, Menu, Divider, Row, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import Icon from "@ant-design/icons";

import "./TheSidebar.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const cashierSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5625 11.5625H5.9375C5.59375 11.5625 5.3125 11.8438 5.3125 12.1875V12.8125C5.3125 13.1562 5.59375 13.4375 5.9375 13.4375H6.5625C6.90625 13.4375 7.1875 13.1562 7.1875 12.8125V12.1875C7.1875 11.8438 6.90625 11.5625 6.5625 11.5625ZM5.3125 9.6875C5.3125 9.34375 5.03125 9.0625 4.6875 9.0625H4.0625C3.71875 9.0625 3.4375 9.34375 3.4375 9.6875V10.3125C3.4375 10.6562 3.71875 10.9375 4.0625 10.9375H4.6875C5.03125 10.9375 5.3125 10.6562 5.3125 10.3125V9.6875ZM9.0625 9.6875C9.0625 9.34375 8.78125 9.0625 8.4375 9.0625H7.8125C7.46875 9.0625 7.1875 9.34375 7.1875 9.6875V10.3125C7.1875 10.6562 7.46875 10.9375 7.8125 10.9375H8.4375C8.78125 10.9375 9.0625 10.6562 9.0625 10.3125V9.6875ZM14.0625 11.5625H13.4375C13.0938 11.5625 12.8125 11.8438 12.8125 12.1875V12.8125C12.8125 13.1562 13.0938 13.4375 13.4375 13.4375H14.0625C14.4062 13.4375 14.6875 13.1562 14.6875 12.8125V12.1875C14.6875 11.8438 14.4062 11.5625 14.0625 11.5625ZM15.9375 9.0625H15.3125C14.9688 9.0625 14.6875 9.34375 14.6875 9.6875V10.3125C14.6875 10.6562 14.9688 10.9375 15.3125 10.9375H15.9375C16.2812 10.9375 16.5625 10.6562 16.5625 10.3125V9.6875C16.5625 9.34375 16.2812 9.0625 15.9375 9.0625ZM19.9766 14.8242L18.9805 7.85938C18.8477 6.9375 18.0586 6.25 17.125 6.25H8.125V5H11.875C12.2188 5 12.5 4.71875 12.5 4.375V0.625C12.5 0.28125 12.2188 0 11.875 0H1.875C1.53125 0 1.25 0.28125 1.25 0.625V4.375C1.25 4.71875 1.53125 5 1.875 5H5.625V6.25H2.875C1.94141 6.25 1.15234 6.9375 1.01953 7.85938L0.0234375 14.8242C0.0078125 14.9414 0 15.0586 0 15.1797V18.125C0 19.1602 0.839844 20 1.875 20H18.125C19.1602 20 20 19.1602 20 18.125V15.1758C20 15.0586 19.9922 14.9414 19.9766 14.8242ZM3.125 3.125V1.875H10.625V3.125H3.125ZM2.875 8.125H17.1211L18.0156 14.375H1.98438L2.875 8.125ZM18.125 18.125H1.875V16.25H18.125V18.125ZM12.8125 9.6875C12.8125 9.34375 12.5312 9.0625 12.1875 9.0625H11.5625C11.2188 9.0625 10.9375 9.34375 10.9375 9.6875V10.3125C10.9375 10.6562 11.2188 10.9375 11.5625 10.9375H12.1875C12.5312 10.9375 12.8125 10.6562 12.8125 10.3125V9.6875ZM10.3125 11.5625H9.6875C9.34375 11.5625 9.0625 11.8438 9.0625 12.1875V12.8125C9.0625 13.1562 9.34375 13.4375 9.6875 13.4375H10.3125C10.6562 13.4375 10.9375 13.1562 10.9375 12.8125V12.1875C10.9375 11.8438 10.6562 11.5625 10.3125 11.5625Z"
      fill="white"
    />
  </svg>
);

const inventorySvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9023 7.21094L17.9258 1.28125C17.6719 0.515625 16.957 0 16.1484 0H3.85156C3.04297 0 2.32812 0.515625 2.07422 1.28125L0.0976562 7.21094C0.0351562 7.40234 0 7.60156 0 7.80469V18.125C0 19.1602 0.839844 20 1.875 20H18.125C19.1602 20 20 19.1602 20 18.125V7.80469C20 7.60156 19.9688 7.40234 19.9023 7.21094ZM18.0234 7.5H10.9375V1.875H16.1484L18.0234 7.5ZM3.85156 1.875H9.0625V7.5H1.97656L3.85156 1.875ZM1.875 18.125V9.375H18.125V18.125H1.875Z"
      fill="white"
    />
  </svg>
);

const CashierIcon = (props) => <Icon component={cashierSvg} {...props} />;
const InventoryIcon = (props) => <Icon component={inventorySvg} {...props} />;

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
      <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
        <Menu.Item key="1" icon={<CashierIcon />}>
          Kasir
        </Menu.Item>

        <SubMenu key="sub1" icon={<InventoryIcon />} title="Inventori">
          <Menu.Item key="2">Stok barang</Menu.Item>
          <Menu.Item key="3">Faktur pembelian</Menu.Item>
          <Menu.Item key="4">PBF</Menu.Item>
          <Menu.Item key="5">Stok opnam</Menu.Item>
        </SubMenu>
        <Menu.Item
          key="6"
          icon={<SettingOutlined style={{ fontSize: "20px" }} />}
        >
          Pengaturan
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
