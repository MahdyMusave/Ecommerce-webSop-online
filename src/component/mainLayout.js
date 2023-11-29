import React, { useState } from "react";
import { AiTwotoneDashboard } from "react-icons/ai";
import { RiDatabase2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHardDrive } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { SiSimpleanalytics } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa6";
import { GiInfo } from "react-icons/gi";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GiFoundryBucket } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";

import { SiWebcomponentsdotorg } from "react-icons/si";
import { TbForms } from "react-icons/tb";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "dashboard",
              icon: <AiTwotoneDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <RiDatabase2Line />,
              label: "Patalog",
              children: [
                {
                  key: "product",
                  icon: <RiDatabase2Line />,
                  label: "Add product",
                },
                {
                  key: "product-list",
                  icon: <RiDatabase2Line />,
                  label: "Product list",
                },
                {
                  key: "category",
                  icon: <RiDatabase2Line />,
                  label: "Brand",
                },
                {
                  key: "list-category",
                  icon: <RiDatabase2Line />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <RiDatabase2Line />,
                  label: "Bategory",
                },
                {
                  key: "list-category",
                  icon: <RiDatabase2Line />,
                  label: "Category list",
                },
                {
                  key: "list-color",
                  icon: <RiDatabase2Line />,
                  label: "Color list",
                },
              ],
            },
            {
              key: "orders",
              icon: <MdShoppingCartCheckout />,
              label: "orders",
            },
            {
              key: "blog",
              icon: <FcLike />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <MdShoppingCartCheckout />,
                  label: "Add Blog",
                },
                {
                  key: "blog-category",
                  icon: <MdShoppingCartCheckout />,
                  label: "Add Blog Category",
                },
              ],
            },
            {
              key: "",
              icon: <HiOutlineMail />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <IoChatbubbleOutline />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <FiHardDrive />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <SlCalender />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <SiSimpleanalytics />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <CiSettings />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <IoLockClosedOutline />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <LiaFileInvoiceSolid />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <FaDollarSign />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <GiInfo />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <TbAirConditioningDisabled />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <MdOutlineHelpOutline />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <GiFoundryBucket />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <IoIosMenu />,
              label: "Dashbord",
            },

            {
              key: "",
              icon: <SiWebcomponentsdotorg />,
              label: "Dashbord",
            },
            {
              key: "",
              icon: <TbForms />,
              label: "Dashbord",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
