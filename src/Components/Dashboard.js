import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import DrawerAppBar from "./Navbar";
import Home from "./Home";
import Aboute from "./Aboute";
import Contact from "./Contact";
import background_image from "../Components/Images/5166950.jpg";
import background_image02 from "../Components/Images/5172658.jpg";
import starbg from "../Components/Images/starBg.jpg";
function Dashboard() {
  return (
    <div>
      <DrawerAppBar></DrawerAppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
