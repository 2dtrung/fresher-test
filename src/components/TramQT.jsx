import { Menu, Row, Col, Button, Space, Modal } from "antd";
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
        <Row>
          <Col span={2}></Col>
          <Col span={4}>Mã trạm</Col>
          <Col span={4}>Tên trạm</Col>
          <Col span={10}>Địa chỉ</Col>
          <Col span={4}>Ngày hoạt động</Col>
        </Row>
      </div>
      <Row>
        <Col span={2}>
          <DownOutlined />
        </Col>
        <Col span={22} style={{ fontWeight: "600" }}>
          Trạm không khí (10)
        </Col>
      </Row>
      {tramKK.map((data) => {
        return (
          <Row key={data.id} onClick={() => setVisible(true)}>
            <TramkkData dataItem={data} />
          </Row>
        );
      })}
      <Row>
        <Col span={2}>
          <DownOutlined />
        </Col>
        <Col span={22} style={{ fontWeight: "600" }}>
          Trạm nước mặt (10)
        </Col>
      </Row>
      {tramNM.map((data) => {
        return (
          <Row key={data.id}>
            <TramnmData dataItem={data} />
          </Row>
        );
      })}
      <Modal
        title="Ha Noi Capital"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={720}
        style={{right: -320, top: 0}}
      >
        <ModalOverlay/>
      </Modal>
    </>
  );
}

export default Sidebar;
