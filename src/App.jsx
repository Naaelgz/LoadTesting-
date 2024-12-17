import React, { useState } from "react";

import LoadTestForm from "./components/LoadTestForm";
import ResultsList from "./components/ResultsList";
import ResourceUsage from "./components/ResourceUsage";
import ClearResults from "./components/ClearResults";
import Help from "./Footer/Help";
import Info from "./Footer/info";

function App() {
  const [url, setUrl] = useState("");
  const [numberOfRequests, setNumberOfRequests] = useState(1);
  const [timeout, setTimeoutValue] = useState(10);
  const [results, setResults] = useState([]);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);
  const [statistics, setStatistics] = useState({
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    totalResponseTime: 0,
    averageResponseTime: 0,
  });

  // Fungsi untuk memulai load test
  const handleStartTest = async () => {
    // Validasi input: URL harus diisi, jumlah request dan timeout harus > 0
    if (!url || numberOfRequests <= 0 || timeout <= 0) {
      alert("Please provide valid input values.");
      return;
    }

    try {
      new URL(url);
    } catch (error) {
      alert("Invalid URL! Please enter a valid URL (e.g., http://example.com)");
      return;
    }

   
    const testResults = [];
    let totalResponseTime = 0;
    let successfulRequests = 0;
    let failedRequests = 0;

    // Loop untuk mengirim permintaan sesuai jumlah yang ditentukan
    for (let i = 0; i < numberOfRequests; i++) {
      const startTime = performance.now(); // Waktu mulai request
      try {
        // Atur mekanisme timeout menggunakan AbortController
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout * 1000);

        // Kirim request ke server dengan endpoint proxy dan URL target
        const response = await fetch(`/proxy?target=${encodeURIComponent(url)}`, {
          signal: controller.signal, // Menghubungkan abort signal
        });

        clearTimeout(timeoutId); // Hentikan timeout jika request berhasil

        // Simulasikan waktu respons antara 50ms hingga 250ms
        const responseTime = Math.random() * 200 + 50;
        totalResponseTime += responseTime;
        successfulRequests++; // Tambahkan jumlah permintaan yang berhasil

        // Simpan hasil request
        testResults.push({
          requestNumber: i + 1,
          statusCode: response.status,
          reasonPhrase: response.statusText,
          responseTime,
        });
      } catch (error) {
        failedRequests++; // Tambahkan jumlah request yang gagal
        testResults.push({
          requestNumber: i + 1,
          statusCode: "Error",
          reasonPhrase: error.name === "AbortError" ? "Timeout" : error.message,
          responseTime: 0,
        });
      }
    }

    // Hitung total requests dan rata-rata waktu respons
    const totalRequests = successfulRequests + failedRequests;
    const averageResponseTime =
      successfulRequests > 0 ? totalResponseTime / successfulRequests : 0;

 
    setResults(testResults);
    setStatistics({
      totalRequests,
      successfulRequests,
      failedRequests,
      totalResponseTime,
      averageResponseTime,
    });

    setCpuUsage(Math.random() * 100);
    setRamUsage(Math.random() * 1000);

    
    console.log("Statistics:");
    console.log("Total Requests:", totalRequests);
    console.log("Successful Requests:", successfulRequests);
    console.log("Failed Requests:", failedRequests);
    console.log("Total Response Time:", totalResponseTime.toFixed(2), "ms");
    console.log("Average Response Time:", averageResponseTime.toFixed(2), "ms");
  };


  const clearResults = () => {
    setResults([]);
    setStatistics({
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      totalResponseTime: 0,
      averageResponseTime: 0,
    });
    setCpuUsage(0);
    setRamUsage(0);
    alert("Results cleared!");
  };

  return (
    <div className="h-screen w-full flex justify-center">
      <div>
        <h1 className="text-3xl flex justify-center font-bold text-black rounded-md4xl mb-4 ">Load Testing</h1>
        <LoadTestForm
          url={url}
          setUrl={setUrl}
          numberOfRequests={numberOfRequests}
          setNumberOfRequests={setNumberOfRequests}
          timeout={timeout}
          setTimeoutValue={setTimeoutValue}
          handleStartTest={handleStartTest}
        />
        <ResultsList results={results} statistics={statistics} />
        <ResourceUsage cpuUsage={cpuUsage} ramUsage={ramUsage} />
        <div className="flex gap-2">
        <ClearResults clearResults={clearResults} />
        <Help />
        <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
