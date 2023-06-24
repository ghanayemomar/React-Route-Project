import { json , useRouteLoaderData} from "react-router-dom";
import EventItem from './../components/EventItem';
function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}
export default EventDetailPage;

export async function loader({request,params}){
  // request.url
  const id = params.eventId
 const response = await fetch('http://localhost:1237/events/' + id);
 if(!response.ok){
  throw json({message: 'Could not fetch detils for selected event.'}),{
    status:500,
  }
 }else{
  return response;
 }
 
}