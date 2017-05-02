import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function() {

    it('should render title and timestamp', function() {
      const title = 'My Title Test';
      const updatedAt = 1493705539257;
      const wrapper = mount( <NoteListItem note={{ title, updatedAt }} /> );

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('5/01/2017');
    });

    it('should set default title if not title set', function() {
       const title = '';
       const updatedAt = 1493705539257;
       const wrapper = mount( <NoteListItem note={{ title, updatedAt }} /> );

       expect(wrapper.find('h5').text()).toBe('Untitled Note');
    });
  });
}