import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Product from "./Component/Products";
import ProductDesc from "./Component/ProductDesc";
import Register from "./Component/Register";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import { useState } from "react";

function App() {
  const [loginToken, setLoginToken] = useState()
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product loginToken={loginToken} />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/desc" element={<ProductDesc />}></Route>
      <Route path="/login" element={<Login setLoginToken={setLoginToken} />}></Route>

    </Routes>
  )
}
function MyApp() {
  return (
    <Router>
      <Navbar>
        <App />
      </Navbar>
    </Router>
  );
}

export default MyApp;
