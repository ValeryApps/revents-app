import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

const EventDetailsInfo = ({ event }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          {/* <Grid.Column width={4}>
               <Button 
                  //  onClick={() => setMapOpenToggle(!mapOpen)}
                   color="teal" size="tiny" 
                   content={mapOpen ? 'Hide map' : 'Show map'}
               />
           </Grid.Column> */}
        </Grid>
      </Segment>
      {/* {mapOpen &&
   <EventDetailedMap latLng={event.venue.latLng} />} */}
    </Segment.Group>
  );
};

export default EventDetailsInfo;
