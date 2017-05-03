import React from 'react';

import Header from './Header';
import NoteList from './NoteList';
import Editor from './Editor';

export default Dashboard = () => {
      return (
        <div>
          <Header title="Dashboard" />
          <div className="page-content">
            <NoteList />
            <Editor />
          </div>
        </div>
      );
}