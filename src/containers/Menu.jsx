import { Menu, Row, Col } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ReactComponent as MessIcon } from "../assets/icons/message.svg";
import { ReactComponent as DownIcon } from "../assets/icons/download.svg";
import { ReactComponent as ConfigIcon } from "../assets/icons/config.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import logo from "../assets/images/logo.png";

const { SubMenu } = Menu;

function MenuItem() {
  return (
    <div className="menu-item" style={{ border: "1px solid rgb(240, 240, 240)"}}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<MessIcon />} style={{ fontWeight: "600" }}>
          Trang chủ
        </Menu.Item>
        <SubMenu key="sub1" icon={<DownIcon />} title="Khai thác dữ liệu">
          <Menu.Item key="2">Giám sát trực tuyến</Menu.Item>
          <Menu.Item key="3">Bản đồ</Menu.Item>
          <Menu.Item key="4">Camera</Menu.Item>
          <Menu.Item key="5">Tra cứu dữ liệu</Menu.Item>
          <Menu.Item key="6">Dữ liệu trung bình</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<ConfigIcon />} style={{ fontWeight: "600" }}>
          Cấu hình
        </Menu.Item>
        <Menu.Item key="8" icon={<AccountIcon />} style={{ fontWeight: "600" }}>
          Tài khoản
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuItem;
