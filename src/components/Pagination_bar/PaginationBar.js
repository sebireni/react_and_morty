import React from "react";
import { useState } from "react";
import "./PaginationBar.css";

function PaginationBar(props) {
  const [pageCounter, setPageCounter] = useState(1);

  function nextPage() {
    setPageCounter(pageCounter + 1);
  }

  function prevPage() {
    setPageCounter(pageCounter - 1);
  }

  return (
    <div className="buttonWrapper">
      <button onClick={prevPage}>Previous page</button>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
}

export default PaginationBar;
