import { Col, Menu } from "antd";


const { SubMenu } = Menu;

function TramnmData({ dataItem }) {
  return (
    <>
      <Col span={1}></Col>
      <Col className="center-item" span={4}>{dataItem.id}</Col>
      <Col className="center-item" span={4}>{dataItem.name}</Col>
      <Col className="center-item" span={7}>{dataItem.address}</Col>
      <Col className="center-item" span={4}></Col>
      <Col className="center-item" span={4}>{dataItem.date}</Col>
    </>
  );
}

export default TramnmData;
