import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export const NoteListHeader = (props) => {
   const handleButtonClick = () => {
      props.meteorCall('notes.insert');
   }
   return (
     <div>
       <button onClick={handleButtonClick}>+ Add Note</button>
     </div>
   );
};

NoteListHeader.propTypes = {
   meteorCall: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
     meteorCall: Meteor.call
  };
}, NoteListHeader);

