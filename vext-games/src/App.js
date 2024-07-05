import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vextorial from "./pages/Vextorial";

const App = () => {
  return (
    <>
    {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vextorial" element={<Vextorial />} />
        </Routes>
    {/* </Router> */}
    </>
  );
};

export default App;
