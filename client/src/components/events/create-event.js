import React from 'react';
import { connect } from 'react-redux';

import CreateEventForm from './create-event-form';

export function CreateEvent(props) {

  return (
    <div className="create-event-home">
      <CreateEventForm />
    </div>
  );
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateEvent);