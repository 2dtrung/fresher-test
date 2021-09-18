import { Tabs } from "antd";
import React from "react";
import EditInfo from "../containers/EditInfo";
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
            Nội dung của Thông số
          </TabPane>
          <TabPane tab={<Tab title={'FTP'}/>} key="3">
            Nội dung của FTP
          </TabPane>
          <TabPane tab={<Tab title={'Thông báo'}/>} key="4">
            Nội dung của Thông báo
          </TabPane>
          <TabPane tab={<Tab title={'Lấy mẫu'}/>} key="5">
            Nội dung của Lấy mẫu
          </TabPane>
          <TabPane tab={<Tab title={'Camera'}/>} key="6">
            Nội dung của Camera
          </TabPane>
        </Tabs>
    </>
  );
};

export default ModalOverlay;
