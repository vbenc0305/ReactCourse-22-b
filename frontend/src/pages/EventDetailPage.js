import React from 'react';
import { useParams, Link } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId;

  return (
    <div>
      <h1>Event Detail</h1>
      <p>Event ID: {eventId}</p>
      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
      <p>
        <Link to="edit">Edit Event</Link>
      </p>
    </div>
  );
}

export default EventDetailPage;
