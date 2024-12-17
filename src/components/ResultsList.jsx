import React from "react";

function ResultsList({ results, statistics }) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.requestNumber}>
            Request {result.requestNumber}: {result.statusCode} -{" "}
            {result.reasonPhrase}, Response Time:{" "}
            {result.responseTime ? parseFloat(result.responseTime.toFixed(4)) : "N/A"} ms

          </li>
        ))}
      </ul>
      
      {statistics && (
        <div className="bg-black p-4 rounded-md shadow-md mt-4">
          <p>Total Requests: {statistics.totalRequests}</p>
          <p>Successful Requests: {statistics.successfulRequests}</p>
          <p>Failed Requests: {statistics.failedRequests}</p>
          <p>Total Response Time: {statistics.totalResponseTime.toFixed(2)} ms</p>
          <p>Average Response Time: {statistics.averageResponseTime.toFixed(2)} ms</p>
        </div>
      )}
    </div>
  );
}

export default ResultsList;
