import { Link } from "react-router-dom";
const EVENT = [
  { id: "p1", title: "Some Event" },
  { id: "p2", title: "event 2" },
  { id: "p3", title: "event 3" },
];
function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENT.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default EventsPage;
