import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Session } from 'meteor/session';

// import App from './../imports/ui/components/App';

import Signup from './../ui/components/Signup';
import Dashboard from './../ui/components/Dashboard';
import NotFound from './../ui/components/NotFound';
import Login from './../ui/components/Login';

const onLeaveNotePage = () => {
  Session.set('selectedNoteId', undefined);
};

const onEnterNotePage = (nextState) => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  } else {
    // console.log(nextState);
    Session.set('selectedNoteId', nextState.params.id);
  }
};

export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
  const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
  const isAuthenticatedPage = currentPagePrivacy === 'auth';

  // if public page and logged in - let them in
  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    // if private page and not logged in - kick them out
    browserHistory.replace('/');
  }
}

export const globalOnChange = (prevState, nextState) => {
  globalOnEnter(nextState);
};
export const globalOnEnter = (nextState) => {
  const lastRoute = nextState.routes[nextState.routes.length - 1];
  Session.set('currentPagePrivacy', lastRoute.privacy);
};

export const routes = (
  <Router history={browserHistory}>
    <Route onEnter={globalOnEnter} onChange={globalOnChange}>
      <Route path="/" component={Login} privacy="unauth" />
      <Route path="/signup" component={Signup} privacy= "unauth" />
      <Route path="/dashboard" component={Dashboard} privacy="auth" />
      <Route path="/dashboard/:id" component={Dashboard} privacy="auth" onEnter={onEnterNotePage} onLeave={onLeaveNotePage} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);