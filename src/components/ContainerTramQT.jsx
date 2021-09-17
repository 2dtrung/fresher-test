import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Menu, Row, Collapse } from "antd";
import React, { useState } from "react";
import { ReactComponent as HeaderIcon } from "../assets/icons/header.svg";
import TramkkData from "../containers/TramkkData";
import TramnmData from "../containers/TramnmData";
import { tramKK, tramNM } from "../tqt.js";
import ModalOverlay from "./Modal";

const { Panel } = Collapse;

const { SubMenu } = Menu;

function ContainerTramQT() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const TitleModal = ({ title }) => (
    <span style={{ fontWeight: "700", fontSize: "20px" }}>{title}</span>
  );
  const PanelHeader1 = () => (
      <p>Trạm không khí (10)</p>
  );
  const PanelHeader2 = () => (
    <p>Trạm nước mặt (20)</p>
  );
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
        <Row className="tqt-header">
          <Col span={1}>
            <HeaderIcon />
          </Col>
          <Col span={4} style={{ fontWeight: "650" }}>
            Mã trạm
          </Col>
          <Col span={4} style={{ fontWeight: "650" }}>
            Tên trạm
          </Col>
          <Col span={11} style={{ fontWeight: "650" }}>
            Địa chỉ
          </Col>
          <Col span={4} style={{ fontWeight: "650" }}>
            Ngày hoạt động
          </Col>
        </Row>
      </div>
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel header="Trạm không khí (10)" key="1" style={{ width: "100%" }}>
          {tramKK.map((data) => {
            return (
              <Row
                className="item-space"
                key={data.id}
                onClick={() => setVisible(true)}
              >
                <TramkkData dataItem={data} />
              </Row>
            );
          })}
        </Panel>
        <Panel header="Trạm nước mặt (20)" key="2">
          {tramNM.map((data) => {
            return (
              <Row className="item-space" key={data.id}>
                <TramnmData dataItem={data} />
              </Row>
            );
          })}
        </Panel>
      </Collapse>
      <Drawer
        title={<TitleModal title={"Ha Noi Capital"} />}
        size={720}
        width={720}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <ModalOverlay />
        <Row className="input-space">
          <Button
            style={{ fontWeight: "600", height: "40px", width: "110px" }}
            type="primary"
            onClick={onClose}
          >
            Cập nhật
          </Button>
        </Row>
      </Drawer>
    </>
  );
}

export default ContainerTramQT;
