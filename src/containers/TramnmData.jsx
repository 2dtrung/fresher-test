import { Col, Menu } from "antd";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect.svg";


const { SubMenu } = Menu;

function TramnmData({ dataItem }) {
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
      <Col className="center-item" span={4}>{dataItem.id}</Col>
      <Col className="center-item" span={4}>{dataItem.name}</Col>
      <Col className="center-item" span={7}>{dataItem.address}</Col>
      <Col className="center-item" span={4}>
        {dataItem.connect ? <ConnectContainer/> : null}
      </Col>
      <Col className="center-item" span={4}>{dataItem.date}</Col>
    </>
  );
}

export default TramnmData;
