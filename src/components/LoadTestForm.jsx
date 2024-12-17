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
    <div>
      <div>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number of Requests:
          <input
            type="number"
            value={numberOfRequests}
            onChange={(e) => setNumberOfRequests(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Timeout (seconds):
          <input
            type="number"
            value={timeout}
            onChange={(e) => setTimeoutValue(Number(e.target.value))}
          />
        </label>
      </div>
      <button className="bg-white text-black rounded-md p-2" onClick={handleStartTest}>Start Load Test</button>
    </div>
  );
  
}

export default LoadTestForm;
