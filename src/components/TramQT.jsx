import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Menu, Row, Collapse } from "antd";
import React, { useState } from "react";
import { ReactComponent as HeaderIcon } from "../assets/icons/header.svg";
import TramkkData from "../containers/TramkkData";
import TramnmData from "../containers/TramnmData";
import { tramKK, tramNM } from "../tqt.js";
import ModalOverlay from "./Modal";
import {useSelector} from 'react-redux';
import ContainerTramQT from "./ContainerTramQT";

const { Panel } = Collapse;

const { SubMenu } = Menu;

function Sidebar() {
  const visibleTQT = useSelector(state => state.setVisibleTQT)
  return (
    <>
      {visibleTQT ? <ContainerTramQT/> : null}
    </>
  );
}

export default Sidebar;
