import React from "react";
import "./App.css";

import TheSidebar from "./containers/TheSidebar";
import TheContent from "./containers/TheContent";

import { Layout } from "antd";
import TheFooter from "./containers/TheFooter";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <TheSidebar />
      <Layout className="site-layout">
        <TheContent />
        <TheFooter />
      </Layout>
    </Layout>
  );
}
