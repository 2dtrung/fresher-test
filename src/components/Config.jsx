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

import LogoHeading from "../containers/LogoHeading";
import MenuItem from "../containers/Menu";
import LogoFooter from "../containers/LogoFooter";

const { SubMenu } = Menu;

function Sidebar() {
  return (
    <>
      <div className="logo-heading">
        <p style={{ fontWeight: "700", fontSize: "20px", marginLeft: "38px" }}>
          Cấu hình
        </p>
      </div>
      <div className="menu-config">
        <Menu
          style={{ width: 165, border: "none" }}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Kết nối
          </Menu.Item>
          <Menu.Item key="2" style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Trạm quan trắc
          </Menu.Item>
          <Menu.Item key="3" style={{ fontWeight: "400" }}>
            Chỉ tiêu quan trắc
          </Menu.Item>
          <Menu.Item key="4" style={{ fontWeight: "400" }}>
            Loại trạm quan trắc
          </Menu.Item>
          <Menu.Item key="5" style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Tính toán
          </Menu.Item>
          <Menu.Item key="6" style={{ fontWeight: "400" }}>
            Quy chuẩn Việt Nam
          </Menu.Item>
          <Menu.Item key="7" style={{ fontWeight: "400" }}>
            Tính toán AQI
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}

export default Sidebar;
