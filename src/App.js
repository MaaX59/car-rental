import "./App.css";
import { Header, Book, Fleet, Plan } from "./container";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Book />
      <Plan />
      <Fleet />
    </div>
  );
}

export default App;
