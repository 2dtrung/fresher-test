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
import supericon from "../assets/images/SuperIcon.png";

const { SubMenu } = Menu;

function LogoHeading() {
  return (
    <>
      <Col span={3} offset={1}>
        <img src={logo}></img>
      </Col>
      <Col span={16}>
          <Row>Monitoring</Row>
          <Row>Giam sat tram quan trac</Row>
      </Col>
      <Col span={3}>
        <img src={supericon}></img>
      </Col>
      <Col span={1}></Col>
    </>
  );
}

export default LogoHeading;
