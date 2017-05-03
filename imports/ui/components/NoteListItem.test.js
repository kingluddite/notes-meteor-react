import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { notes } from './../../fixtures/fixtures';
import { NoteListItem } from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function() {
    let Session;

    beforeEach(() => {
      Session = {
        set: expect.createSpy()
      };
    });

    it('should render title and timestamp', function() {
      const wrapper = mount( <NoteListItem note={notes[0] } Session={Session} /> );

      expect(wrapper.find('h5').text()).toBe(notes[0].title);
      expect(wrapper.find('p').text()).toBe('5/01/2017');
    });

    it('should set default title if not title set', function() {
       const wrapper = mount( <NoteListItem note={ notes[1] } Session={Session} /> );

       expect(wrapper.find('h5').text()).toBe('Untitled Note');
    });

    it('should call set on click', function() {
      // Render NoteListItem using either note and Session
       const wrapper = mount( <NoteListItem note={ notes[0] } Session={Session} />);
      // Find div and simulate click event
      wrapper.find('div').simulate('click');
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id)
      // Expect Session.set to have been called with some arguments
    });
  });
}