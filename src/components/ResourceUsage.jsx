import React from "react";

function ResourceUsage({ cpuUsage, ramUsage }) {
  return (
    <div>
      <p>CPU Usage: {cpuUsage.toFixed(2)}%</p>
      <p>RAM Usage: {ramUsage.toFixed(2)} MB</p>
    </div>
  );
}

export default ResourceUsage;
