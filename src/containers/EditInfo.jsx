import { Col, Input, Row, Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const { Option } = Select;

const EditInfo = () => {
  const data = useSelector(state => state.getData);
  const InputContent = ({id, placeholder, value, warning}) => {
    return (
      <Col span={12}>
        <Row style={{fontWeight: "600", fontSize: '16px'}}>{id}<span style={{color: 'red'}}> (*)</span></Row>
        <Input className="input-value" style={{ width: 309, height: 48 }} value={value} placeholder={placeholder} />
        <Row className="input-error">{warning}</Row>
      </Col>
    );
  }
  return (
    <>
      <Row>
        <InputContent id={'Mã trạm '} placeholder={'HANOI_CAPITAL'} value={data.id} warning={'Đây là mã không thể đổi'}/>
        <InputContent id={'Tên trạm '} placeholder={'Tên trạm quan trắc'} warning={'Đặt tên để tìm kiếm'}/>
      </Row>
      <Row className='input-space'>
        <InputContent id={'Kinh độ '} placeholder={'Mã trạm của bạn'} warning={'Đây là mã không thể đổi'}/>
        <InputContent id={'Vĩ độ '} placeholder={'Trên trạm quan trắc'} warning={'Đặt tên để tìm kiếm'}/>
      </Row>
      <Row className='input-space'>
        <InputContent id={'Địa chỉ '} placeholder={'556 Nguyen Gia Cu, Gia Thuy Ward'} value={data.address} warning={'Đây là mã không thể đổi'}/>
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
