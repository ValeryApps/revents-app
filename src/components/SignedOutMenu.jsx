import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ setAuthenticated }) => {
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => setAuthenticated(true)}
        content="Login"
        inverted
        basic
      />
      <Button
        content="Register"
        inverted
        basic
        style={{ marginLeft: "0.5rem" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
