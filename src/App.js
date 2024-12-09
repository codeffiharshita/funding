import { Button, Stack } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/commom/Footer/Footer";
import Header from "./components/commom/Header/Header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Terms from "./components/Terms";

function App() {
  return (
    <div className="main">
      <section className="header">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
      <section className="pb-2">
        <Footer />
      </section>
    </div>
  );
}

export default App;
