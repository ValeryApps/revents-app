import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Image, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const AppNavBar = ({ setIsFormOpen }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact>
          <Image
            src="/assets/logo.png"
            alt=""
            style={{ marginRight: "0.5rem", width: "40px" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/events" />
        {isAuthenticated && (
          <Menu.Item as={NavLink} to="/create-event">
            <Button
              content="Create Event"
              inverted
              positive
              onClick={setIsFormOpen}
            />
          </Menu.Item>
        )}
        {isAuthenticated ? (
          <SignedInMenu setAuthenticated={setAuthenticated} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default AppNavBar;
