import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChnage}) => (
  <input
    className="search"
    onChange={handleChnage}
    type="search"
    placeholder={placeholder}
  />
);
