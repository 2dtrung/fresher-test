import { Menu } from "antd";
import { useDispatch } from "react-redux";
import {setTrueTQT, setFalseTQT} from "../actions/setVisibleState"

function ContainerConfig() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="logo-heading">
        <p style={{ fontWeight: "700", fontSize: "20px", marginLeft: "38px" }}>
          Cấu hình
        </p>
      </div>
      <div className="menu-config">
        <Menu
          style={{ width: 175, border: "none" }}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Kết nối
          </Menu.Item>
          <Menu.Item key="2" onClick={() => dispatch(setTrueTQT)} style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Trạm quan trắc
          </Menu.Item>
          <Menu.Item key="3" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "450" }}>
            Chỉ tiêu quan trắc
          </Menu.Item>
          <Menu.Item key="4" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "450" }}>
            Loại trạm quan trắc
          </Menu.Item>
          <Menu.Item key="5" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "600", color: "#2C5DE5" }}>
            Tính toán
          </Menu.Item>
          <Menu.Item key="6" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "450" }}>
            Qui chuẩn Việt Nam
          </Menu.Item>
          <Menu.Item key="7" onClick={() => dispatch(setFalseTQT)} style={{ fontWeight: "450" }}>
            Tính toán AQI
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}

export default ContainerConfig;
