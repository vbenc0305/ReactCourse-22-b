import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';

function HomePage() {
  return (
    <div className={classes.home}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          Discover Amazing <span>Events</span> Near You
        </h1>
        <p className={classes.description}>
          Join our community and explore the best events happening around you. Create, share, and participate in unforgettable experiences.
        </p>
        <div className={classes.actions}>
          <Link to="/events" className={classes.button}>
            Browse Events
          </Link>
          <Link to="/events/new" className={`${classes.button} ${classes.secondary}`}>
            Create Event
          </Link>
        </div>
      </div>

      <div className={classes.features}>
        <div className={classes.feature}>
          <div className={classes.featureIcon}>🔍</div>
          <h2 className={classes.featureTitle}>Discover</h2>
          <p className={classes.featureDescription}>
            Find events that match your interests and schedule
          </p>
        </div>
        <div className={classes.feature}>
          <div className={classes.featureIcon}>✨</div>
          <h2 className={classes.featureTitle}>Create</h2>
          <p className={classes.featureDescription}>
            Host your own events and share them with the community
          </p>
        </div>
        <div className={classes.feature}>
          <div className={classes.featureIcon}>🎉</div>
          <h2 className={classes.featureTitle}>Participate</h2>
          <p className={classes.featureDescription}>
            Join events and connect with like-minded people
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
