import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

export default function App() {
  return (
      <Layout>
          <Header>
              <Greeting/>
              <Navigation/>
          </Header>
          <Content>
              <Slider/>
          </Content>
          <Footer/>
          <ScrollToTop/>
      </Layout>
  );
}
