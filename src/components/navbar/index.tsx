import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar, Nav, Dropdown, Figure } from "react-bootstrap";
import Styles from "../../styles/navbar.module.css";
import * as Icon from "react-bootstrap-icons";

const NavBar: React.FC<{
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  docked: boolean;
  setDocked: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setSidebarOpen, docked, setDocked }): JSX.Element => {
  const isMidScreen = useMediaQuery({
    query: "(max-width: 576px)",
  });

  const showSidebar = () => {
    if (!isMidScreen) {
      setDocked(!docked);
      return;
    }
    setSidebarOpen(true);
  };

  return (
    <Navbar className={Styles.navbar} variant="light">
      <Navbar.Brand>
        <Icon.List
          onClick={showSidebar}
          className={Styles.hamburger}
          size="1.7rem"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item className={Styles.customnav}>
          <Nav.Link>
            <Icon.Bell className="mr-4 mt-1" size="1.4rem" />
          </Nav.Link>
          <Nav.Link>
            <Dropdown style={{ height: "2rem" }}>
              <Navbar.Text className={Styles.name}>Some name</Navbar.Text>
              <Figure>
                <Figure.Image
                  className={Styles.avatar}
                  src="https://freesvg.org/img/Male-Avatar.png"
                />
              </Figure>
              <Dropdown.Toggle
                variant=""
                className={Styles.dropdown}
              ></Dropdown.Toggle>
              <Dropdown.Menu className={Styles.dropdownmenu}>
                <Dropdown.Item href="">Logout</Dropdown.Item>
                <Dropdown.Item href="">Settings</Dropdown.Item>
                <Dropdown.Item href="">Etc...</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
