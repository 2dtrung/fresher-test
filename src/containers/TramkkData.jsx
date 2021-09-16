import { Menu, Row, Col, Space } from "antd";
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

function TramkkData({ dataItem }) {
  return (
    <>
      <Col span={2}></Col>
      <Col span={4}>{dataItem.id}</Col>
      <Col span={4}>{dataItem.name}</Col>
      <Col span={10}>{dataItem.address}</Col>
      <Col span={4}>{dataItem.date}</Col>
    </>
  );
}

export default TramkkData;
