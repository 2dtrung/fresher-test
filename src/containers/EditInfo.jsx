import { Col, Input, Row, Select, Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;
const EditInfo = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Mã trạm <span style={{color: 'red'}}> (*)</span></Row>
          <Input style={{ width: 309, height: 48 }} placeholder="HANOI_CAPITAL" />
          <Row className="input-error">Đây là mã không thể đổi</Row>
        </Col>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Tên trạm <span style={{color: 'red'}}> (*)</span></Row>
          <Input style={{ width: 309, height: 48 }} placeholder="Tên trạm quan trắc" />
          <Row className="input-error">Đặt tên để tìm kiếm</Row>
        </Col>
      </Row>
      <Row className='input-space'>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Kinh độ <span style={{color: 'red'}}> (*)</span></Row>
          <Input style={{ width: 309, height: 48 }} placeholder="Mã trạm của bạn" />
          <Row className="input-error">Đây là mã không thể đổi</Row>
        </Col>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Vĩ độ <span style={{color: 'red'}}> (*)</span></Row>
          <Input style={{ width: 309, height: 48 }} placeholder="Trên trạm quan trắc" />
          <Row className="input-error">Đặt tên để tìm kiếm</Row>
        </Col>
      </Row>
      <Row className='input-space'>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Địa chỉ <span style={{color: 'red'}}> (*)</span></Row>
          <Input style={{ width: 309, height: 48 }} placeholder="556 Nguyen Gia Cu, Gia Thuy Ward" />
          <Row className="input-error">Đây là mã không thể đổi</Row>
        </Col>
        <Col span={12}>
          <Row style={{fontWeight: "600", fontSize: '16px'}}>Loại trạm</Row>
          <Select
            showSearch
            placeholder="Không khí"
            style={{ width: 309}}
            size={'large'}
          >
            <Option value="air">Không khí</Option>
            <Option value="water">Nước mặt</Option>
          </Select>
        </Col>
      </Row>
    </>
  );
};

export default EditInfo;
