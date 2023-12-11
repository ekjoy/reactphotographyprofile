import Message from "./Message";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/post/:id" component={Post} />
    //   </Switch>
    // </Router>
    <Router>
      <Routes>
        <Route path="/post/:id" element={<Post></Post>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
