import React from "react";
import EventsListItem from "./EventsListItem";

const EventsList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventsListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};

export default EventsList;
