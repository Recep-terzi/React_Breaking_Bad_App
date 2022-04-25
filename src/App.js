import React from "react";
import Main from "./components/Main/Main";
import Character from "./components/Character/Character";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/character/:id" element={<Character />}></Route>
      </Routes>
    </>
  );
}

export default App;
