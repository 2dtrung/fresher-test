import { Col } from "antd";
import logo from "../assets/images/logo.png";

function LogoFooter() {
  return (
    <>
      <Col span={4}><img src={logo} alt="footer-logo"></img></Col>
      <Col span={20}><p className="img-footer"> iLotusLand</p></Col>
    </>
  );
}

export default LogoFooter;
