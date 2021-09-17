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
  const title = <span style={{fontWeight: "600"}}>Khai thác dữ liệu</span>;
  return (
    <div className="menu-item">
      <Menu
        style={{ width: 248, background: 'rgb(250, 250, 250)' }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<MessIcon />} style={{ fontWeight: "600" }}>
          Trang chủ
        </Menu.Item>
        <SubMenu key="sub1" icon={<DownIcon />} title={title}>
          <Menu.Item key="2">Giám sát trực tuyến</Menu.Item>
          <Menu.Item key="3">Bản đồ</Menu.Item>
          <Menu.Item key="4">Camera</Menu.Item>
          <Menu.Item key="5">Tra cứu dữ liệu</Menu.Item>
          <Menu.Item key="6">Dữ liệu trung bình</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<ConfigIcon />} style={{ fontWeight: "600", fontSize: '16px' }}>
          Cấu hình
        </Menu.Item>
        <Menu.Item key="8" icon={<AccountIcon />} style={{ fontWeight: "600", fontSize: '16px' }}>
          Tài khoản
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuItem;
