import { Menu } from "antd";
import { useSelector } from "react-redux";
import ContainerConfig from "./ContainerConfig";

const { SubMenu } = Menu;

function Sidebar() {
  const visible = useSelector(state => state.setVisibleConfig);
  console.log(visible);
  return (
    <>
      {visible ?  <ContainerConfig/> : null}
    </>
  );
}

export default Sidebar;
