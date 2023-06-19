import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:1237/events");

  if (!response.ok) {
    throw { meesage: "Could not fetch data." };
  } else {
    return response;
  }
}
