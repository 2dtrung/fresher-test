import { Menu, Empty, Col } from "antd";
import { useSelector } from "react-redux";
import ContainerConfig from "./ContainerConfig";
import QueueAnim from "rc-queue-anim";

const { SubMenu } = Menu;

function Sidebar() {
  const visible = useSelector((state) => state.setVisibleConfig);
  console.log(visible);
  const EmptyContent = () => {
    return (
      <div className="empty-content" style={{marginTop: '200px', marginLeft: '500px'}}>
        <Empty />
      </div>
    );
  };
  return (
    <>
      <QueueAnim className="demo-content">
              <div className="demo-thead" key="a">
                <ContainerConfig />
              </div>,
      </QueueAnim>
    </>
  );
}

export default Sidebar;
