import logo from './logo.svg';
import {Layout, Row, Col} from "antd"
import './App.css';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{
      height:'100%'
    }}>
      <Header>
        Short Editor
      </Header>
      <Content style={{
        padding: "0 50px",
        height:'100%'
      }}>
        <Row>
          <Col span={12}>
            This is left side
          </Col>

          <Col span={12}>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
