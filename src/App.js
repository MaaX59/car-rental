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
import ScrollButton from "./component/ScrollButton/ScrollButton";

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
      <ScrollButton />
    </div>
  );
}

export default App;
