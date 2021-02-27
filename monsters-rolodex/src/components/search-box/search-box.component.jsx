import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className='search'>
        <input 
            type='search' className="input-box" placeholder={placeholder}
            onChange={handleChange}
        />  
    </div>
);