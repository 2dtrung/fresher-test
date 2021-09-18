import QueueAnim from "rc-queue-anim";
import React from "react";
import { useSelector } from 'react-redux';
import ContainerTramQT from "./ContainerTramQT";

function Sidebar() {
  const visibleTQT = useSelector(state => state.setVisibleTQT)
  return (
    <>
      <QueueAnim className="demo-content" >
        {visibleTQT
          ? [
              <div className="demo-thead" key="a">
                <ContainerTramQT/>
              </div>,
            ]
          : null}
      </QueueAnim>
    </>
  );
}

export default Sidebar;
