import React from 'react';

import '../style/App.css';
import Search from '../containers/Search';

const App = (props) => {
  return (
    <div>
      <h1>Wikipedia Viewer</h1>
      <Search />
    </div>
  );
}

export default App;
