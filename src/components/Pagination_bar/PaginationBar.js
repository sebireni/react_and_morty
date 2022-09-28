import React from 'react';
import { useState } from 'react';
import './PaginationBar.css';

const PaginationBar = (props) => {
  const [pageCounter, setPageCounter] = useState(1);

  const nextPage = () => {
    setPageCounter(pageCounter + 1);
  };

  const prevPage = () => {
    setPageCounter(pageCounter - 1);
  };

  return (
    <div className='buttonWrapper'>
      <button onClick={prevPage}>Previous page</button>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};

export default PaginationBar;
