import React, { useState, useEffect } from 'react';
import Endpoint from '../Endpoint'; // Adjust the import path based on your file structure
import service from '../../Services/api'



function EndpointsTable() {

  const [serviceConfig, setServiceConfig] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddressList = async () => {
      setIsLoading(true);
      setError(null);

      try {

        const response = await service.getUrlConfiguration();
        console.log("config urls", response)
        setServiceConfig(response);

      } catch (err) {
        console.error("Failed to fetch address listXXXXXXXXXXX:", err);
        setError(err.message || 'Failed to fetch the list of addresses');
        setServiceConfig([]); // Clear URLs on error
      } finally {
        setIsLoading(false); // Done loading the list
      }
    };

    fetchAddressList();

  }, []);


  if (isLoading) {
    return <div>Loading service addresses...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error loading addresses: {error}</div>;
  }

  if (serviceConfig.length === 0) {
    return <div>No service addresses found or returned from the API.</div>;
  }

  return (
    <div className="address-table-container"> {/* Optional wrapper */}
      <h2>Service Status Dashboard</h2>

      <table  class="blueTable">
        <thead>
          <tr>
            <th>Service</th>
            <th>
              Category
            </th>
            <th>
              Service
            </th>
            <th>
              SQLInstanceName
            </th>
            <th>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {serviceConfig && serviceConfig.map((config, index) => (
            <Endpoint key={config.Address || index} config={config} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EndpointsTable;
