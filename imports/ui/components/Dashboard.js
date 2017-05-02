import React from 'react';

import Header from './Header';
import NoteList from './NoteList';

export default Dashboard = () => {
      return (
        <div>
          <Header title="Dashboard" />
          <div className="page-content">
            <NoteList />
          </div>
        </div>
      );
}