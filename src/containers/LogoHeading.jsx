import { Col, Row } from "antd";
import logo from "../assets/images/logo.png";
import supericon from "../assets/images/SuperIcon.png";

function LogoHeading() {
  return (
    <>
      <Col span={6}>
        <img className="logo-img" src={logo} alt="logo"></img>
      </Col>
      <Col span={13} offset={1}>
          <Row style={{fontWeight: "600"}}>Monitoring</Row>
          <Row style={{fontWeight: "400", color: '#656565', fontSize:'12px'}}>Giám sát trạm quan trắc</Row>
      </Col>
      <Col span={4}>
        <img className="logo-superapp" src={supericon} alt="supericon"></img>
      </Col>
    </>
  );
}

export default LogoHeading;
