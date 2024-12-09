import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { LogoSvg } from "../../svg";
import { useEffect, useState } from "react";
function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 998px)").matches
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 998px)");

    const handleMediaChange = e => {
      setIsLargeScreen(e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup event listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  return (
 <>
    <Navbar
      expand="lg"
      className={`${isScrolled ? "header2" : "nav-bg"} navbar-main`}
      fixed="top"
      // bg="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="text-white brand">
          <LogoSvg />
          <span>Funding Pipe</span>
        </Navbar.Brand>

        <Navbar.Collapse
          className="nav-content"
          style={{ display: window.innerWidth <= 990 ? "none" : "block" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white nav-font">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-font">
              Terms of use
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-font">
              About us
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-font">
              {" "}Affiliate Program
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-font">
              FAQ
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
            <Button variant="border text-white border rounded-3">
              Sign in
            </Button>
            <Button className="nav-btn text-white rounded-3">Dashboard</Button>
          </div>
        </Navbar.Collapse>
      </Container>

    
    </Navbar>
    {(isPopupOpen &&
        !isLargeScreen )&&
       <>
        <div className="popup-overlay">
          <div className="popup-container">
            <Nav className="flex-column text-center">
              <Nav.Link href="#home" className="popup-link text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#terms" className="popup-link text-white">
                Terms of Use
              </Nav.Link>
              <Nav.Link href="#contact" className="popup-link text-white">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#about" className="popup-link text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#about" className="popup-link text-white">
                Blog
              </Nav.Link>
              <Nav.Link href="#about" className="popup-link text-white">
                Brand Kit
              </Nav.Link>
              <Nav.Link href="#affiliate" className="popup-link text-white">
                Affiliate Program
              </Nav.Link>
              <Nav.Link href="#faq" className="popup-link text-white">
                FAQ
              </Nav.Link>
            </Nav>
            <div className="popup-buttons d-flex flex-column gap-3">
              <Button variant="outline-light" className="popup-button">
                Sign Up
              </Button>
              <Button variant="primary" className="popup-button">
                Dashboard
              </Button>
            </div>
          </div>
          {/* <div className="popup-backdrop" onClick={togglePopup} /> */}
        </div>
       </>
        }
      {
        !isLargeScreen &&  <div
        className={"navbar-toggler d-flex gap-2 justify-content-center align-items-center rounded-3"}
        variant="dark"
        onClick={() => setPopupOpen(!isPopupOpen)}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.75 3.5C14.75 3.69891 14.671 3.88968 14.5303 4.03033C14.3897 4.17098 14.1989 4.25 14 4.25H2C1.80109 4.25 1.61032 4.17098 1.46967 4.03033C1.32902 3.88968 1.25 3.69891 1.25 3.5C1.25 3.30109 1.32902 3.11032 1.46967 2.96967C1.61032 2.82902 1.80109 2.75 2 2.75H14C14.1989 2.75 14.3897 2.82902 14.5303 2.96967C14.671 3.11032 14.75 3.30109 14.75 3.5ZM14.75 8C14.75 8.19891 14.671 8.38968 14.5303 8.53033C14.3897 8.67098 14.1989 8.75 14 8.75H2C1.80109 8.75 1.61032 8.67098 1.46967 8.53033C1.32902 8.38968 1.25 8.19891 1.25 8C1.25 7.80109 1.32902 7.61032 1.46967 7.46967C1.61032 7.32902 1.80109 7.25 2 7.25H14C14.1989 7.25 14.3897 7.32902 14.5303 7.46967C14.671 7.61032 14.75 7.80109 14.75 8ZM14 13.25C14.1989 13.25 14.3897 13.171 14.5303 13.0303C14.671 12.8897 14.75 12.6989 14.75 12.5C14.75 12.3011 14.671 12.1103 14.5303 11.9697C14.3897 11.829 14.1989 11.75 14 11.75H2C1.80109 11.75 1.61032 11.829 1.46967 11.9697C1.32902 12.1103 1.25 12.3011 1.25 12.5C1.25 12.6989 1.32902 12.8897 1.46967 13.0303C1.61032 13.171 1.80109 13.25 2 13.25H14Z"
              fill="white"
            />
          </svg>
        </span>
        <h3 className="">Navigation</h3>
      </div>
      }
 </>
  );
}

export default Header;
