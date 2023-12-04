import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/cart" Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
