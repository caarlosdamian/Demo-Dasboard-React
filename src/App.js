import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state?.user?.currentUser);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <div className="App">
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={UserList} />
            <Route path="/user/:userId" exact component={User} />
            <Route path="/newUser" exact component={NewUser} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/product/:productsId" exact component={Product} />
            <Route path="/products/newProduct" exact component={NewProduct} />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
