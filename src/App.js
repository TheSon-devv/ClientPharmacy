import Home from "./container/home/home";
// import SignIn from "./container/SignIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailProduct from "./component/DetailProduct";
import CartContainer from "./container/cart/CartContainer";
import CheckOutContainer from "./container/checkout/CheckOutContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/signIn" component={SignIn}/> */}
        <Route path="/detailProduct" component={DetailProduct}/>
        <Route path="/checkOut" component={CheckOutContainer}/>
        <Route path="/cart" component={CartContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
