import React from "react";

function ClearResults({ clearResults }) {
  return (
    <button
      className="bg-red-500 text-white rounded-md p-2 mt-4"
      onClick={clearResults}
    >
      Clear Results
    </button>
  );
}

export default ClearResults;
