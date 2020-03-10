import React from 'react';
import './search-box.styles.css';

// export const SearchBox = (props) => {
//     console.log(props);
//     return <input 
//         className = 'search'
//         type='search'
//         placeholder={props.placeholder}
//         onChange={props.handleChange} 
//     />
// }

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = 'search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange} 
    />
)