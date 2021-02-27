import React from 'react';
import '../search-component/search.css';

export const Search = ({handleChange, placeholder}) => (
    <div className="search">
        <input type="search" className="input-box" placeholder="search for a cop" 
        onChange={handleChange} />
    </div>
)