import React from 'react';

import Header from './Header';
import NoteList from './NoteList';

export default () => {
      return (
        <div>
          <Header title="Your Links" />
          <div className="page-content">
            <NoteList />
          </div>
        </div>
      );
}