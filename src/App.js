import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import BlogContainer from "./container/Blog/BlogContainer";
import CartContainer from "./container/cart/CartContainer";
import CheckOutContainer from "./container/checkout/CheckOutContainer";
import ContactContainer from "./container/Contact/ContactContainer";
import DetailProductContainer from "./container/detailProduct/DetailProductContainer";
import Home from "./container/home/home";
import SignIn from "./container/Login/SignIn";
import ProductListContainer from "./container/ProductList/ProductListContainer";
import SignUp from "./container/SignUp/SignUp";
import UserContaienr from "./container/User/UserContaienr";

function App() {
  const token = localStorage.getItem('userToken');
  let router = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/detailProduct/:id" component={DetailProductContainer} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/contact" component={ContactContainer} />
      <Redirect to="/signIn" />
    </Switch>
  )
  if (token !== null) {
    router = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detailProduct/:id" component={DetailProductContainer} />
        <Route path="/checkOut" component={CheckOutContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/blog" component={BlogContainer} />
        <Route path="/contact" component={ContactContainer} />
        <Route path="/detailUser" component={UserContaienr} />
        <Route path="/productList" component={ProductListContainer} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
