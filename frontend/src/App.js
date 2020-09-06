import React from 'react';
import {ProductList} from "./productList/ProductList";
import {Product} from "./product/Product";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "./navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Switch>
        <Route path={"/product/:productId"}>
          <Product/>
        </Route>
        <Route path="/">
          <ProductList/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
