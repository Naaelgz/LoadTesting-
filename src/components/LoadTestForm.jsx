import React from "react";

function LoadTestForm({
  url,
  setUrl,
  numberOfRequests,
  setNumberOfRequests,
  timeout,
  setTimeoutValue,
  handleStartTest,
}) {

  const validateAndStartTest = () => {
    try {
      new URL(url); // Ini akan memeriksa apakah URL valid
      handleStartTest();
    } catch (error) {
      alert("Invalid URL! Please enter a valid URL (e.g., http://example.com)");
    }
  };

  return (
    <div className="text-black ">
      <div className="flex flex-col">
        <label className="mr-4">
          URL:
        </label>
          <input className="border-2 border-slate-950 bg-white rounded-lg mt-1 px-2"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
      </div>
      <div className="flex flex-col mt-1">
        <label className="mr-4">
          Number of Requests:
        </label>
          <input className="border-2 mt-1 border-slate-950 bg-white rounded-lg px-2"
            type="number"
            value={numberOfRequests}
            onChange={(e) => setNumberOfRequests(Number(e.target.value))}
          />
      </div>
      <div className="flex flex-col mt-1">
        <label className="mr-4">
          Timeout (seconds):
        </label>
          <input className="border-2 mt-1 border-slate-950 bg-white rounded-lg px-2"
            type="number"
            value={timeout}
            onChange={(e) => setTimeoutValue(Number(e.target.value))}
          />
      </div>
      <button className="bg-lime-700 text-white rounded-md p-2 mt-4" onClick={handleStartTest}>Start Load Test</button>
    </div>
  );
  
}

export default LoadTestForm;
