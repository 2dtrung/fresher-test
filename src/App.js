import './scss/App.css';
import { Row, Col } from "antd";
import Sidebar from './components/Sidebar.jsx';
import Config from './components/Config.jsx';
import TramQT from './components/TramQT.jsx';

function App() {
  return (
    <>
      <Row>
        <Col className="sidebar" flex="280px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Row style={{height: '900px'}}>
            <Col flex="212px">
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
