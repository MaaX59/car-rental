import "./App.css";
import { Header, Book, Fleet } from "./container";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Book />
      <Fleet />
    </div>
  );
}

export default App;
