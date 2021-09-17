import { Col, Row } from "antd";
import Config from './components/Config.jsx';
import Sidebar from './components/Sidebar.jsx';
import TramQT from './components/TramQT.jsx';
import './scss/App.css';

function App() {
  return (
    <>
      <Row>
        <Col className="sidebar" flex="280px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Row style={{height: '900px'}}>
            <Col flex="222px">
              <Config/>
            </Col>
            <Col flex="auto">
              <TramQT/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
