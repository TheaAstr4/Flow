import React, { useEffect, useState } from 'react';
import { LogViewer } from '@patternfly/react-log-viewer';
import axios from 'axios';

const BasicLogViewer = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchLogs = () => {
      setLoading(true); // Set loading to true before the request
      axios.get('http://localhost:5000/logs')
        .then(response => {
          setApiData(response.data);
          setError(null); // Clear any previous errors
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false); // Reset loading state
        });
    };

    fetchLogs(); // Fetch immediately on mount
    const intervalId = setInterval(fetchLogs, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array to run only once on mount

  if (loading) return <div>Loading logs...</div>; // Loading indicator
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>; // Error handling

  // Check if apiData has data before rendering LogViewer
  const logData = apiData.length > 0 ? apiData[0].Data : [];

  return (
    <React.Fragment>
      <LogViewer hasLineNumbers={false} height={200} data={logData} theme="dark" />
    </React.Fragment>
  );
};

export default BasicLogViewer;
