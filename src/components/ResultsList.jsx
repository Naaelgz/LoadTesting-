import React from "react";

function ResultsList({ results, statistics }) {
  return (
    <div className="mt-4 ">
      <h2 className="text-black text-bold text-lg font-bold">Results :</h2>
      <ul className="text-black ">
        {results.map((result) => (
          <li key={result.requestNumber}>
            Request {result.requestNumber}: {result.statusCode} -{" "}
            {result.reasonPhrase}, Response Time:{" "}
            {result.responseTime ? parseFloat(result.responseTime.toFixed(4)) : "N/A"} ms

          </li>
        ))} 
      </ul>
      
      {statistics && (
        <div className="border-2 border-slate-950 p-4 rounded-md  text-black">
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
