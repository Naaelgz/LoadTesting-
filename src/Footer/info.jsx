import React, { useState } from "react";

function Info() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  return (
    <div className="mt-4">
      {/* Button Info Icon */}
      <button
        onClick={toggleInfo}
        className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 focus:outline-none"
        title="Info"
      >
        i
      </button>

      {/* Konten Info */}
      {showInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-screen-sm w-full relative overflow-auto max-h-screen"
          >
            <h2 className="text-lg font-bold mb-4 text-black text-center">
              About This Software
            </h2>
            <h3 className="text-black text-xl font-bold">Load Testing</h3>
            <p className="text-gray-700 ">
              Load Testing is a type of software testing used to evaluate the performance of a system when subjected to a specific workload. The primary goal of load testing is to ensure that the system can function properly and meet expected performance criteria when accessed by multiple users simultaneously.
              Response Time measures the performance of an individual transaction or query. Response time is the amount of time from when a user sends a request to when the application indicates that the request has been completed. Response time is the total time it takes from when a user makes a request to when they receive a response.
            </p>
           
          <ol className="list-decimal list-inside text-gray-700 mb-4">
              <li>
                <strong>CPU Usage:</strong>
                <p>
                  a. Description: The CPU usage metric represents the percentage of the computer's processing power utilized during the load testing.
                </p>
                <p>b. Formula: CPU Usage = Current CPU Usage</p>
              </li>
              <li>
                <strong>RAM Usage:</strong>
                <p>
                  a. Description: The RAM usage metric indicates the amount of computer memory used during the load testing.
                </p>
                <p>b. Formula: RAM Usage = Current RAM Usage</p>
              </li>
              <li>
                <strong>Total Requests:</strong>
                <p>a. Description:</p>
                Total Requests is the sum of all requests sent during a single testing round.
                <p>b. Formula: Total Requests = Number of Requests Sent</p>
              </li>
              <li>
                <strong>Successful Requests:</strong>
                <p>
                  a. Description: Successful Requests is the sum of requests with an HTTP status code of 200 (OK).
                </p>
                <p>
                  b. Formula: Successful Requests = Number of Requests with HTTP Status Code 200 (OK)
                </p>
              </li>
              <li>
                <strong>Failed Requests:</strong>
                <p>
                  a. Description: Failed Requests is the sum of requests that failed, calculated as Total Requests minus Successful Requests.
                </p>
                <p>
                  b. Formula: Failed Requests = Total Requests - Successful Requests
                </p>
              </li>
              <li>
                <strong>Average Response Time:</strong>
                <p>
                  a. Description: Average Response Time represents the mean response time per request during a testing round.
                </p>
                <p>
                  b. Formula: Average Response Time = Total Response Time / Total Requests
                </p>
              </li>
            </ol>

            {/* Tombol OK dan Close */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={closeInfo}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
