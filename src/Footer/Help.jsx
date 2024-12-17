import React, { useState } from "react";

function Help() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp((prev) => !prev);
  };

  const closeHelp = () => {
    setShowHelp(false);
  };

  return (
    <div className="mt-4">
      {/* Button Help Icon */}
      <button
        onClick={toggleHelp}
        className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 focus:outline-none"
        title="Help"
      >
        ?
      </button>

      {/* Konten Help */}
      {showHelp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-screen-sm w-full relative"
            style={{ whiteSpace: "normal" }}
          >
            <h2 className="text-lg font-bold mb-4 text-black text-center">
              How to Use the Application
            </h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4">
              <li>
                <strong>Enter the target URL in the URL field.</strong>
              </li>
              <li>
                <strong>
                  Set the number of requests using the up-down numeric controls
                  or the up and down arrows.
                </strong>
              </li>
              <li>
                <strong>
                  Set the timeout value (maximum time allowed for each request)
                  using the up-down numeric controls or the up and down arrows.
                </strong>
              </li>
              <li>
                <strong>Click the 'Start' button to start the load test.</strong>
              </li>
              <li>
                <strong>
                  After the test, the output will display:
                  <p>a. Computer CPU usage (in percentage)</p>
                  <p>b. Computer RAM usage (in megabytes)</p>
                  <p>c. Detailed results for each request, including:</p>
                  <p>- Request Number</p>
                  <p>- HTTP Status Code</p>
                  <p>- Reason Phrase</p>
                  <p>- Response Time (in milliseconds)</p>
                  <p>- Total time</p>
                  <p>- Average time</p>
                </strong>
              </li>
              <li>
                <strong>
                  Click the 'Clear' button to clear the output area and reset
                  the test.
                </strong>
              </li>
            </ol>

            {/* Tombol OK dan Close */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={closeHelp}
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

export default Help;
