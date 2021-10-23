import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import UserDashboard from "./pages/userDashboard";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
// import Blog from "./pages/blog";
// import Index from "./pages/music"
// import Talk from "./pages/talk";
import Resources from "./pages/resources";
import Loader from "./pages/loader";


function App() {
  return (
    <div className="">
     <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/userdashboard">
            <UserDashboard />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          {/* <Route exact path="/pen-down-your-thoughts">
            <Blog />
          </Route>
          <Route exact path="/music">
            <Index />
          </Route>
          <Route exact path="/talk">
            <Talk />
          </Route> */}
          <Route exact path="/loading">
            <Loader/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
