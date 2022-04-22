import Header from "./Components/Small/Header";
import SideBar from "./Components/Small/SideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import Product from "./Components/Product/Product";
import Order from "./Components/Order/Order";
import Home from "./Components/Home";
import User from "./Components/user/User";

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/product" element={<Wrapper children={<Product />} />} />
        <Route path="/order" element={<Wrapper children={<Order />} />} />
        <Route path="/user" element={<Wrapper children={<User />} />} />
        <Route path="/" element={<Wrapper children={<Home />} />} />
      </Routes>


    </Router>

  );
}

export default App;
