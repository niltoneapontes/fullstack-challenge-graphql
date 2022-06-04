import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { globalContext } from "./context/globalContext";
import HomeRoot from "./pages/Home";
import ProfileRoot from "./pages/Profile";
import SignIn from "./pages/SignIn";

export default function AppRoutes() {
  const { getUserInfo } = globalContext();

  useEffect(() => {
    const userInfo = getUserInfo();
    
    if(userInfo.length === 0 && window.location.pathname !== '/signin') {
      window.location.pathname = '/signin';
    }
  }, []);

  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route component={HomeRoot} path="/" exact/>
      <Route component={ProfileRoot} path="/profile" />
    </Switch>
  );
}