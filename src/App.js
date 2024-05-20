import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ShopAll from "./pages/ShopAll";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import Company from "./pages/Company";
import Ceo from "./pages/Ceo";
import Organization from "./pages/Organization";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/company" element={<Company />}>
          <Route path="ceo" element={<Ceo />} />
          <Route path="organization" element={<Organization />} />
        </Route>

        <Route path="*" element={<h1>페이지가 없습니다.</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
