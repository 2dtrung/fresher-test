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

function LogoFooter() {
  return (
    <>
      <Col span={4}><img src={logo}></img></Col>
      <Col span={20}><p>iLotusLand</p></Col>
    </>
  );
}

export default LogoFooter;
