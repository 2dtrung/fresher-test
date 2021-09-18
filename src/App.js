import { Col, Row, Empty } from "antd";
import Config from "./components/Config.jsx";
import Sidebar from "./components/Sidebar.jsx";
import TramQT from "./components/TramQT.jsx";
import "./scss/App.css";
import { useSelector } from "react-redux";

function App() {
  const visible = useSelector((state) => state.setVisibleConfig);
  const EmptyContent = () => {
    return (
      <div
        className="empty-content" style={{width: '100%', marginTop: '200px'}}
      >
        <Empty description={<><p>Mục chưa hiện thực!</p><p>Mời bạn lựa chọn cấu hình</p></> } />
      </div>
    );
  };
  return (
    <>
      <Row>
        <Col className="sidebar" flex="280px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Row style={{ height: "900px" }}>
            {visible ? (
              <>
                <Col flex="222px">
                  <Config />
                </Col>
                <Col flex="auto">
                  <TramQT />
                </Col>
              </>
            ) : <EmptyContent/>}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
