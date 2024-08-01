import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout1 from "./Components/Layouts/Layout1.jsx";
import HomeNewsComp from './Components/NewsComp/HomeNewsComp/HomeNewsComp.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1/>}>
          <Route index element={<HomeNewsComp categary='example'/>}/>
          <Route path="technology" element={<HomeNewsComp categary='technology'/>} />
          <Route path="education" element={<HomeNewsComp categary='education'/>} />
          <Route path="trending" element={<HomeNewsComp categary='trending'/>} />
          <Route path="sports" element={<HomeNewsComp categary='sports'/>} />
          <Route path="search/:categary" element={<HomeNewsComp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
