import { Menu, Row } from "antd";
import LogoFooter from "../containers/LogoFooter";
import LogoHeading from "../containers/LogoHeading";
import MenuItem from "../containers/Menu";


const { SubMenu } = Menu;

function Sidebar() {
  return (
    <>
      <div className="logo-heading-sidebar">
        <Row>
          <LogoHeading />
        </Row>
      </div>
      <Row className="menu-sidebar">
        <MenuItem/>
      </Row>
      <Row className="footer-sidebar">
        <LogoFooter/>
      </Row>
    </>
  );
}

export default Sidebar;
