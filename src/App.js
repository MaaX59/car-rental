import "./App.css";
import { Header, Book } from "./container";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Book />
    </div>
  );
}

export default App;
