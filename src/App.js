import "./App.css";
import { Header, Book, Fleet, Plan, Banner, Choose, Faq } from "./container";
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
    </div>
  );
}

export default App;
