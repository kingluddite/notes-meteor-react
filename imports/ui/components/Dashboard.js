import React from 'react';

import Header from './Header';
import NoteList from './NoteList';
import Editor from './Editor';

export default Dashboard = () => {
      return (
        <div>
          <Header title="Notes" />
          <div className="page-content">
            <aside className="page-content__sidebar">
              <NoteList />
            </aside>
            <main className="page-content__main">
              <Editor />
            </main>
          </div>
        </div>
      );
}