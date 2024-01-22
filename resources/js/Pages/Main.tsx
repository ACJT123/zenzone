import React, { useState } from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, theme, Menu, Flex } from "antd";
import Welcome from "./Welcome";

import LearningIcon from "../../images/Sidebar/learning.png";
import ZensIcon from "../../images/Sidebar/zens.png";
import CourseIcon from "../../images/Sidebar/course.png";
import HomeIcon from "../../images/Sidebar/home.png";

import UserAvatar from "../../images/Sample/9.png";

import "../../style/Components/Sidebar/sidebar.scss";

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        icon: UserAvatar,
        key: "avatar",
    },
    {
        icon: HomeIcon,
        key: "home",
        label: "Home",
    },
    {
        icon: CourseIcon,
        key: "courses",
        label: "Featured Courses",
    },
    {
        icon: LearningIcon,
        key: "learning",
        label: "My Learning",
    },
    {
        icon: ZensIcon,
        key: "zens",
        label: "My Zens",
    },
];

const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedKey, setSelectedKey] = useState("home");
    const [collapsed, setCollapsed] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
    };

    const onBreakpointChange = (broken) => {
        setIsMobile(broken);
        setCollapsed(broken);
    };

    return (
        <Layout>
            <Sider
                // collapsible
                // collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                onBreakpoint={(broken) => onBreakpointChange(broken)}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    mode={isMobile ? "vertical" : "inline"}
                    defaultSelectedKeys={["1"]}
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    style={{
                        backgroundColor: "#F0F0F0",
                    }}
                >
                    {items.map((item) => (
                        <Menu.Item
                            key={item.key}
                            icon={
                                item.key === "avatar" ? (
                                    <img
                                        src={item.icon}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                ) : (
                                    <img src={item.icon} alt={item.label}  className="icon"/>
                                )
                            }
                            style={{
                              padding: item.key === "avatar" ? 50 : 20, 
                              display: "flex",
                              alignItems: 'center'
                            }}
                        >
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                <Content
                    style={{
                        marginLeft: collapsed ? 200 : 200,
                    }}
                >
                    <div
                        style={{
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            padding: "5px 20px",
                        }}
                    >
                        {selectedKey === "home" && <Welcome />}
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer> */}
            </Layout>
        </Layout>
    );
};

export default Main;
