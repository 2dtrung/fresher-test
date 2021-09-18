import QueueAnim from "rc-queue-anim";
import { useSelector } from "react-redux";
import ContainerConfig from "./ContainerConfig";


function Sidebar() {
  const visible = useSelector((state) => state.setVisibleConfig);
  console.log(visible);
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
