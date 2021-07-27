import cuid from "cuid";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";

const EventForm = ({ createEvent, event, editEvent }) => {
  const initialValues = event ?? {
    title: "",
    description: "",
    category: "",
    venue: "",
    city: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleOnSubmit = () => {
    event
      ? editEvent({
          ...event,
          ...values,
        })
      : createEvent({
          ...values,
          id: cuid(),
          attendees: [],
          hostedBy: "Valery",
          hostPhotoURL: "/assets/user.png",
        });
  };
  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Segment clearing>
      <Header
        textAlign="center"
        content={event ? `Editing ${event.title}` : "Create New Event"}
        as="h2"
      />
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => handleOnInputChange(e)}
            value={values.title}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => handleOnInputChange(e)}
            value={values.category}
          />
        </Form.Field>
        <Form.Field>
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => handleOnInputChange(e)}
            value={values.description}
          ></textarea>
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            onChange={(e) => handleOnInputChange(e)}
            value={values.date}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            onChange={(e) => handleOnInputChange(e)}
            value={values.venue}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={(e) => handleOnInputChange(e)}
            value={values.city}
          />
        </Form.Field>
        <Button content="Submit" type="submit" positive floated="right" />
        <Button
          as={Link}
          to="/events"
          content="Cancel"
          type="buton"
          floated="right"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
