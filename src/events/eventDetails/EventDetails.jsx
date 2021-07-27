import React from "react";
import { Grid } from "semantic-ui-react";
import { sampleData } from "../../api/sampleData";
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsInfo from "./EventDetailsInfo";
import EventDetailsSideBar from "./EventDetailsSideBar";

const EventDetails = ({ match }) => {
  const event = sampleData.find((x) => x.id === match.params.id);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSideBar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetails;
