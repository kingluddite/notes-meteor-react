import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { Header } from './Header';

if (Meteor.isClient) {
  describe('Header', function() {
    it('should set button text to logout', function() {
      const wrapper = mount( <Header title="Test Title" handleLogout={() => {}} /> )

      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should have h1 with title', function () {
      const title = 'Test title';
      const wrapper = mount( <Header title={title} handleLogout={() => {}} /> );

      const h1Text = wrapper.find('h1').text();

      expect(h1Text).toBe(title);
    });

    // it('should call the function', function () {
    //   const spy = expect.createSpy();
    //   spy(3, 4, 123);
    //   spy('Todd');
    //
    //   expect(spy).toHaveBeenCalledWith('Todd');
    // });

    it('should call handleLogout on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount( <Header title="title" handleLogout={spy} /> );

      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
}