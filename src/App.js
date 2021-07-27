import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import AppNavBar from "./components/AppNavBar";
import EventDetails from "./events/eventDetails/EventDetails";
import EventForm from "./events/EventForm";
import EventsDashboard from "./events/EventsDashboard";
import Home from "./Home";
import Sandbox from "./sandBox/Sandbox";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <AppNavBar />
            <Container style={{ marginTop: "7rem" }}>
              <Route exact path="/events" component={EventsDashboard} />
              <Route exact path="/sandBox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetails} />
              <Route path={["/create-event","/manage/:id"]} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
