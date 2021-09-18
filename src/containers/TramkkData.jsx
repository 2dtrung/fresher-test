import { Col, Menu } from "antd";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect.svg";
import { useSelector } from "react-redux";

const { SubMenu } = Menu;

function TramkkData({ dataItem }) {
  const ConnectContainer = () => {
    return (
      <>
        <ConnectIcon style={{marginLeft: '10px'}}/>
        <span style={{fontWeight: '450', color: '#008556', marginLeft: '5px'}}>Đang kết nối</span>
      </>
    );
  }
  return (
    <>
      <Col span={1}></Col>
      <Col className="center-item" xl={4} lg={3}>{dataItem.id}</Col>
      <Col className="center-item" xl={4} lg={3}>{dataItem.name}</Col>
      <Col className="center-item" xl={7} lg={10}>{dataItem.address}</Col>
      <Col className="center-item active-connect" xl={4} lg={4}>
        {dataItem.connect ? <ConnectContainer/> : null}
      </Col>
      <Col className="center-item" xl={4} lg={3}>{dataItem.date}</Col>
    </>
  );
}

export default TramkkData;
