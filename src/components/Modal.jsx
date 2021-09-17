import React, { useState } from "react";
import { Modal, Button, Row, Col, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import EditInfo from "../containers/EditInfo"
const { TabPane } = Tabs;
const Tab = ({title}) => {
  return (
    <>
    <span style={{fontWeight: '600'}}>{title}</span>
    </>
  );
}
const ModalOverlay = () => {

  return (
    <>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<Tab title={'Thông tin'}/>} key="1">
            <EditInfo/>
          </TabPane>
          <TabPane tab={<Tab title={'Thông số'}/>} key="2">
            Content of Thông số
          </TabPane>
          <TabPane tab={<Tab title={'FTP'}/>} key="3">
            Content of FTP
          </TabPane>
          <TabPane tab={<Tab title={'Thông báo'}/>} key="4">
            Content of Thông báo
          </TabPane>
          <TabPane tab={<Tab title={'Lấy mẫu'}/>} key="5">
            Content of Lấy mẫu
          </TabPane>
          <TabPane tab={<Tab title={'Camera'}/>} key="6">
            Content of Camera
          </TabPane>
        </Tabs>
    </>
  );
};

export default ModalOverlay;
