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
      <div className="logo-heading-sidebar">
        <Row>
          <LogoHeading />
        </Row>
      </div>
      <Row className="menu-sidebar">
        <MenuItem/>
      </Row>
      <Row className="footer-sidebar">
        <LogoFooter/>
      </Row>
    </>
  );
}

export default Sidebar;
