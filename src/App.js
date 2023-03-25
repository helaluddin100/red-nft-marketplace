import "./App.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Item from "./components/item";
import Explore from "./components/explore";
import Activity from "./components/activity";
import Wallet from "./components/wallet";
import Create from "./components/createItem";
import Blog from "./components/blog";
import PostDetails from "./components/post-details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Action from "./components/Action";
import Help from "./components/Help";
import Author from "./components/Author";
import Contact from "./components/Contact";
import Collection from "./components/Collection";
import Login from "./components/Login";
import Singup from "./components/Singup";
import AuthorProfile from "./components/AuthorProfile";
import EditProfile from "./components/EditProfile";
import Popup from "./components/popup";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/popup">
            <Popup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/singup">
            <Singup />
          </Route>
          <Route exact path="/item">
            <Item />
          </Route>
          <Route exact path="/author-profile">
            <AuthorProfile />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/activity">
            <Activity />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/action">
            <Action />
          </Route>
          <Route exact path="/collection">
            <Collection />
          </Route>
          <Route exact path="/post-details">
            <PostDetails />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/author">
            <Author />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/edit-profile">
            <EditProfile />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
