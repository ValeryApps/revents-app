import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

const SignedInMenu = ({ setAuthenticated }) => {
  const history = useHistory();
  const signOut = () => {
    setAuthenticated(false);
    history.push("/");
  };
  return (
    <Menu.Item>
      <Image avatar circular src="/assets/user.png" />
      <Dropdown pointing="top left" text="Valery">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-event"
            content="create product"
            icon="plus"
          />
          <Dropdown.Item content="Your Profile" icon="user" />
          <Dropdown.Item onClick={signOut} content="sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
