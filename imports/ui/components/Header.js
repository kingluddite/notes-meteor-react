import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const Header = (props) => {

  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';

  return (
    <header className="header">
      <div className="header__content">
        {/* add this propType */}
        <img className="header__nav-toggle" onClick={props.handleNavToggle} src={navImageSrc} />
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout() }>Logout</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleNavToggle: PropTypes.func.isRequired, // add this line
  isNavOpen: PropTypes.bool.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout(),
    // add this line below
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen'),
  };
}, Header);
