import React from 'react';

function Header(props) {
  const headerStyles = {
    backgroundColor: 'purple',
    fontFamily: 'sans-serif',
    paddingTop: '20px'
  }
  return (
    <div style={headerStyles}>
      <h1>Things a cat might say</h1>
    </div>
  );
}

export default Header;