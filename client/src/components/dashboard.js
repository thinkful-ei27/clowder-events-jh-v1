import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import UpcomingEvents from './upcoming-events';
import PastEvents from './past-events';
import CreateEvent from './create-event-form';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <UpcomingEvents />
        <PastEvents />
        <CreateEvent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: state.auth.currentUser.fullName,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
