import "./App.css";
import {
  Header,
  Book,
  Fleet,
  Plan,
  Banner,
  Choose,
  Faq,
  Mobile,
  Footer,
} from "./container";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Book />
      <Plan />
      <Fleet />
      <Banner />
      <Choose />
      <Faq />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
