import Sidebar from "./components/Sidebar/";
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./view/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./view/UserList";
import User from "./view/User";
import NewUser from "./view/NewUser";
import ProductList from "./view/ProductList";
import Product from "./view/Product";
import NewProduct from "./view/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;