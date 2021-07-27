import React from "react";
import { Link } from "react-router-dom";
import { Icon, Item, List, Segment, Button } from "semantic-ui-react";
import EventAttendees from "./EventAttendees";

const EventsListItem = ({ event, selectEvent, deleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src="/assets/user.png" size="tiny" circular />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>{event.description}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {event.date}
          <Icon name="marker" />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventAttendees attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>Event Description</span>
        <Button
          content="delete"
          color="red"
          floated="right"
          onClick={() => deleteEvent(event.id)}
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          content="View"
          color="teal"
          floated="right"
          onClick={() => selectEvent(event)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventsListItem;
