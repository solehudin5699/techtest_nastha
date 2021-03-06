import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddEvent from "./pages/AddEvent/AddEvent";
import Home from "./pages/Home/Home";

function AppRouter() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "rgba(218, 201, 245, 0.884)",
          height: "100vh",
          overflowY: "scroll",
        }}>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/addevent' component={AddEvent} />
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}
export default AppRouter;
