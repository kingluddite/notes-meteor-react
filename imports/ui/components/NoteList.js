import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';

import { Notes } from './../../api/notes';

import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export const NoteList = (props) => {

    const renderNotes = props.notes.map((note) => {
       return <NoteListItem key={note._id} note={note} />;
    });

    return (
      <div>
        <NoteListHeader />
        {(props.notes.length === 0) ? <NoteListEmptyItem /> : undefined }
        {renderNotes}
        NoteList { props.notes.length }
      </div>
    );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};


export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  // 1. subscribe to the subscription (we set up in notes.js)
  Meteor.subscribe('notes');

  // we want to fetch the notes from here
  return {
     // keys in here end up being props on Component
     // we need to access our API to get access to notes so we import it up top
     notes: Notes.find().fetch().map((note) => {
       return {
         ...note,
         selected: note._id === selectedNoteId
       };
     })
  };
}, NoteList );