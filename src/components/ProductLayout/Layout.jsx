import React from 'react';

const Layout = ({ name, children }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
