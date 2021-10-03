import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MyLink.module.css';
const MyLink = ({ to, children, style }) => {
  return (
    <Link style={style} className={cl.myLink} to={to} data-testid={'my-link'}>
      {children}
    </Link>
  );
};
export default MyLink;
