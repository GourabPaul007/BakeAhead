import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import BakeAheadLogo from "../assets/logo.png";
import "./NavbarComponent.css";

interface NavbarProps {
  textColor: string;
}

const NavbarComponent: React.FC<NavbarProps> = ({ textColor }) => {
  const [show, setShow] = useState(false);
  const _showDropdown = () => {
    setShow(!show);
  };
  const _hideDropdown = () => {
    setShow(false);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          width: "100%",
          fontSize: 16,
          fontWeight: 600,
          // color: "#fff",
        }}
      >
        <Navbar
          bg="transparent"
          expand="lg"
          // variant={textColor === "white" ? "dark" : "light"}
          // style={{ height: 100 }}
        >
          <Container>
            {/* Branding */}
            <Navbar.Brand>&nbsp;</Navbar.Brand>
            <Navbar.Brand
              as={Link}
              to="/"
              className="navbarBrand"
              // style={{ position: "absolute", top: 8, left: 50 }}
            >
              <img
                src={BakeAheadLogo}
                className="logoImg"
                // style={{ width: 200 }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-5 ms-auto bg-transparent"
                style={{ fontSize: 16 }}
              >
                <NavDropdown
                  title={
                    <span
                      className="my-auto"
                      style={{ color: textColor === "white" ? "#fff" : "#000" }}
                    >
                      STORE
                    </span>
                  }
                  // as={Link}
                  // to="/store"
                  id="basic-nav-dropdown"
                  className="mx-1 bg-transparent navItem"
                  show={show}
                  onMouseEnter={_showDropdown}
                  onMouseLeave={_hideDropdown}
                  style={{ textDecoration: "none" }}
                >
                  <NavDropdown.Divider
                    style={{
                      border: "2px solid",
                      borderColor: textColor === "white" ? "#fff" : "#000",
                    }}
                  />
                  <NavDropdown.Item
                    as={Link}
                    to="/store/cakes"
                    style={{ color: textColor === "white" ? "#fff" : "#000" }}
                  >
                    Cakes
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/store/savoury"
                    style={{ color: textColor === "white" ? "#fff" : "#000" }}
                  >
                    Savoury
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/store/others"
                    style={{ color: textColor === "white" ? "#fff" : "#000" }}
                  >
                    Others
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/store/dog_menu"
                    style={{ color: textColor === "white" ? "#fff" : "#000" }}
                  >
                    Dog Menu
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  href="/"
                  className="mx-1 navItem"
                  style={{ color: textColor === "white" ? "#fff" : "#000" }} //Works for now
                >
                  HOME
                </Nav.Link>

                <Nav.Link
                  href="/ContactUs"
                  className="mx-1"
                  style={{ color: textColor === "white" ? "#fff" : "#000" }}
                >
                  OUR SERVICES
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
