import React from 'react';
import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';
import classes from './EventsLayout.module.css';

function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}

export default EventsLayout;
