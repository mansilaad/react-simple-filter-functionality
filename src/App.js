import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      handleClick();
    }
  };

  const handleClick = () => {
    const val = inputRef.current.value;
    setItems([...items, val]);
    inputRef.current.value = '';
  };

  console.log(items);
  return (
    <>
      <label for="html">Search...</label>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <input type="text" ref={inputRef} onKeyDown={_handleKeyDown} />
      <button onClick={handleClick}>Add</button>
      <br />
      <br />
      {filteredItems.map((item, index) => {
        return <div>{item}</div>;
      })}
    </>
  );
}
