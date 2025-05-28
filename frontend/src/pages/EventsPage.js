
import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events || [];

  return (
      <>
        {<EventsList events={events}/>}
      </>
  );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        return response;
    }
}