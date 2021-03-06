import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchAllPastEvents, storeSinglePastEvent } from '../../actions/events';
import '../css/event-lists.css';
import { Link } from 'react-router-dom';


export class PastEvents extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPastEvents());
  }

  EventsList(props) {
    const events = this.props.past.map((event, index) => (
      <li key={index}>
        <Link
          className="li-event"
          to={{ pathname: `/events/past/${event.id}` }}
          onClick={() => this.props.dispatch(storeSinglePastEvent(event.id))}
        >
          {event.eventName}: {event.date} {event.time}
        </Link>
      </li >
    ));

    return (
      <ul className="past-events" id="past-events">
        {events}
      </ul>
    );
  }

  render() {
    return (
      this.EventsList(this.props)
    );
  }
}

const mapStateToProps = state => {

  return {
    username: state.auth.currentUser.username,
    name: state.auth.currentUser.fullName,
    past: state.event.past
  };
};

export default requiresLogin()(connect(mapStateToProps)(PastEvents));