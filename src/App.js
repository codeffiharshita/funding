import { Button, Stack } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/commom/Footer/Footer";
import Header from "./components/commom/Header/Header";
import { useState } from "react";

function App() {
  // const [isNavOPen, setNavOpen] = useState(false);
  // const navbarHeight = 0; // Adjust as needed
  // const responsiveNavbarHeight = 330; // Height when expanded

  // const contentStyle = {
  //   marginTop: isNavOPen ? responsiveNavbarHeight : navbarHeight
  //   // marginTop: window.innerWidth <= 990 ? responsiveNavbarHeight : navbarHeight
  // };
  return (
    <div className="main">
      <section className="header">
        <Header />
      </section>
      <section>
        <Home />
      </section>
      <section className="pb-2">
        <Footer />
      </section>
    </div>
  );
}

export default App;
