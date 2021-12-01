import React from 'react';
import Header from './Header';
import PostControl from './PostControl';

function App() {
  const appStyles = {
    backgroundColor: 'orange',
  }
  return (
    <div className="App" style={appStyles}>
      <Header />
      <PostControl />
    </div>
  );
}

export default App;
