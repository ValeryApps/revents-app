import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

const Home = ({ history }) => {
  return (
    <Segment inverted className="masthead" vertical textAlign="center">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ bottomMargin: 12 }}
          />
          Re-vents
        </Header>
        <Button size="huge" inverted onClick={() => history.push("/events")}>
          Get Started
          <Icon name="arrow right" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
