import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import BlogContainer from "./container/Blog/BlogContainer";
import CartContainer from "./container/cart/CartContainer";
import CheckOutContainer from "./container/checkout/CheckOutContainer";
import ContactContainer from "./container/Contact/ContactContainer";
import DetailProductContainer from "./container/detailProduct/DetailProductContainer";
import DoctorContainer from "./container/Doctor/DoctorContainer";
import Home from "./container/home/home";
import SignIn from "./container/Login/SignIn";
import OrderContainer from "./container/Order/OrderContainer";
import ProductListContainer from "./container/ProductList/ProductListContainer";
import SignUp from "./container/SignUp/SignUp";
import UserContaienr from "./container/User/UserContaienr";
import { authCheckState } from "./store/actions/auth";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userToken);

  useEffect(() => {
    dispatch(authCheckState())
  },[])
  let router = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/detailProduct/:id" component={DetailProductContainer} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/contact" component={ContactContainer} />
      <Route path="/doctor" component={DoctorContainer} />
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
        <Route path="/order" component={OrderContainer} />
        <Route path="/productList" component={ProductListContainer} />
        <Route path="/doctor" component={DoctorContainer} />
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
