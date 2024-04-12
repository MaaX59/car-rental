import "./App.css";
import { Header, Book, Fleet, Plan, Banner, Choose } from "./container";
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
    </div>
  );
}

export default App;
