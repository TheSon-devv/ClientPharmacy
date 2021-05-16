import Home from "./container/home/home";
import SignIn from "./container/Login/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContainer from "./container/cart/CartContainer";
import CheckOutContainer from "./container/checkout/CheckOutContainer";
import DetailProductContainer from "./container/detailProduct/DetailProductContainer";
import SignUp from "./container/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/detailProduct" component={DetailProductContainer}/>
        <Route path="/checkOut" component={CheckOutContainer}/>
        <Route path="/cart" component={CartContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
