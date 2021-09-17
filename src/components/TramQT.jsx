import { Menu, Row, Col, Button, Space, Modal, Drawer } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ReactComponent as MessIcon } from "../assets/icons/message.svg";
import { ReactComponent as DownIcon } from "../assets/icons/download.svg";
import { ReactComponent as ConfigIcon } from "../assets/icons/config.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as HeaderIcon } from "../assets/icons/header.svg";
import logo from "../assets/images/logo.png";
import { tramKK, tramNM } from "../tqt.js";
import TramkkData from "../containers/TramkkData";
import TramnmData from "../containers/TramnmData";
import React, { useState } from 'react';
import ModalOverlay from "./Modal";

import LogoHeading from "../containers/LogoHeading";
import MenuItem from "../containers/Menu";
import LogoFooter from "../containers/LogoFooter";

const { SubMenu } = Menu;

function Sidebar() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const TitleModal = ({title}) =><span style={{ fontWeight: "700", fontSize: '20px'}}>{title}</span>;
  return (
    <>
      <div className="logo-heading">
        <Row>
          <Col span={20}>
            <div>
              <p style={{ fontWeight: "700", fontSize: "20px" }}>
                Trạm quan trắc
              </p>
            </div>
          </Col>
          <Col span={4}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              Tạo trạm
            </Button>
          </Col>
        </Row>
      </div>

      <div className="tqt-heading">
        <Row className='tqt-header'>
          <Col span={1}><HeaderIcon /></Col>
          <Col span={4} style={{ fontWeight: "600"}}>Mã trạm</Col>
          <Col span={4} style={{ fontWeight: "600"}}>Tên trạm</Col>
          <Col span={11} style={{ fontWeight: "600"}}>Địa chỉ</Col>
          <Col span={4} style={{ fontWeight: "600"}}>Ngày hoạt động</Col>
        </Row>
      </div>
      <Row className='item-space'>
        <Col span={1}>
          <DownOutlined />
        </Col>
        <Col span={23} style={{ fontWeight: "600" }}>
          Trạm không khí (10)
        </Col>
      </Row>
      {tramKK.map((data) => {
        return (
          <Row className='item-space' key={data.id} onClick={() => setVisible(true)}>
            <TramkkData dataItem={data} />
          </Row>
        );
      })}
      <Row className='item-space'>
        <Col span={1}>
          <DownOutlined />
        </Col>
        <Col span={23} style={{ fontWeight: "600" }}>
          Trạm nước mặt (20)
        </Col>
      </Row>
      {tramNM.map((data) => {
        return (
          <Row className='item-space' key={data.id}>
            <TramnmData dataItem={data} />
          </Row>
        );
      })}
      <Drawer title={<TitleModal title={'Ha Noi Capital'}/>} size={720} width={720} placement="right" onClose={onClose} visible={visible}>
        <ModalOverlay />
        <Row className="input-space">
            <Button type="primary" onClick={onClose}>
              Cập nhật
            </Button>
        </Row>
      </Drawer>
    </>
  );
}

export default Sidebar;
