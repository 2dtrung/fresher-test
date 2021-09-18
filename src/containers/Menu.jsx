import { Menu } from "antd";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as ConfigIcon } from "../assets/icons/config.svg";
import { ReactComponent as DownIcon } from "../assets/icons/download.svg";
import { ReactComponent as MessIcon } from "../assets/icons/message.svg";
import {setTrue, setFalse, setFalseTQT} from '../actions/setVisibleState'
import {useDispatch} from 'react-redux';
const { SubMenu } = Menu;

function MenuItem() {
  const title = <span style={{fontWeight: "600"}}>Khai thác dữ liệu</span>;
  const dispatch = useDispatch();
  return (
    <div className="menu-item">
      <Menu
        style={{ width: 248, background: 'rgb(250, 250, 250)' }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item className="icon-click" key="1" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}} icon={<MessIcon />} style={{ fontWeight: "600" }}>
          Trang chủ
        </Menu.Item>
        <SubMenu key="sub1" icon={<DownIcon />} title={title}>
          <Menu.Item className="submenu-item" key="2" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}}>Giám sát trực tuyến</Menu.Item>
          <Menu.Item key="3" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}}>Bản đồ</Menu.Item>
          <Menu.Item key="4" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}}>Camera</Menu.Item>
          <Menu.Item key="5" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}}>Tra cứu dữ liệu</Menu.Item>
          <Menu.Item key="6" onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}}>Dữ liệu trung bình</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<ConfigIcon />} onClick={() => dispatch(setTrue)} style={{ fontWeight: "600", fontSize: '16px' }}>
          Cấu hình
        </Menu.Item>
        <Menu.Item key="8" icon={<AccountIcon />} onClick={() => {dispatch(setFalse); dispatch(setFalseTQT)}} style={{ fontWeight: "600", fontSize: '16px' }}>
          Tài khoản
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuItem;
