import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};
const EventDetailsHeader = ({ event }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{event.date}</p>
                <p>
                  Hosted by{" "}
                  <strong>
                    <Link to={`/profile/${event.hostUid}`}>
                      {event.hostedBy}
                    </Link>{" "}
                  </strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom" clearing>
        {/* {!isHost && ( */}
        <>
          {/* {isGoing ? ( */}
          <Button
          //  onClick={handleUserLeaveEvent} loading={loading}
          >
            Cancel My Place
          </Button>
          {/* ) : ( */}
          <Button
            // onClick={authenticated ? handleUserJoinEvent : () => setModalOpen(true)}
            // loading={loading}
            color="teal"
          >
            JOIN THIS EVENT
          </Button>
          {/* )} */}
        </>
        {/* )} */}

        {/* {isHost && ( */}
        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
        {/* )} */}
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsHeader;
