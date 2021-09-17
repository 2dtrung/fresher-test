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
      <Col span={6}>
        <img className="logo-img" src={logo}></img>
      </Col>
      <Col span={13} offset={1}>
          <Row style={{fontWeight: "600"}}>Monitoring</Row>
          <Row style={{fontWeight: "400", color: '#656565', fontSize:'12px'}}>Giám sát trạm quan trắc</Row>
      </Col>
      <Col span={4}>
        <img className="logo-superapp" src={supericon}></img>
      </Col>
    </>
  );
}

export default LogoHeading;
