import React from "react";
import { useState } from "react";
import { Grid } from "semantic-ui-react";
import { sampleData } from "../api/sampleData";
import EventDetails from "./eventDetails/EventDetails";
import EventForm from "./EventForm";
import EventsList from "./EventsList";

const EventsDashboard = ({ isFormOpen, setIsFormOpen }) => {
  const [events, setEvents] = useState(sampleData);
  const [event, setEvent] = useState(null);
  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
    setIsFormOpen(false);
  };
  const handleEditEvent = (event) => {
    setEvents([...events.filter((x) => x.id !== event.id), event]);
    setIsFormOpen(false);
  };
  const handleDeleteEvent = (id) => {
    setEvents([...events.filter((x) => x.id !== id)]);
  };
  const selectEvent = (evt) => {
    setEvent(evt);
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            event={event}
            key={event ? event.id : null}
            editEvent={handleEditEvent}
          />
        )}
        {!isFormOpen && event !== null && <EventDetails event={event} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventsDashboard;
