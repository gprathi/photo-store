import Header from "./components/Header";
import React  from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import "./App.css";



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <Photos  />{" "}
        </Route>
        <Route path="/cart">
          {" "}
          <Cart />{" "}
        </Route>
      </Switch>
    </div>
  );
}



// # Challenge

// Get the JSON data with the photos information from the API and save it to context state

// 1. As soon as the ContextProvider component renders, get the JSON data from this url: 
// https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

// 2. Save the array of data that comes back to state.

// Review data fetching in React using `fetch`: 
// https://scrimba.com/p/p7P5Hd/c79Jask


export default App;
