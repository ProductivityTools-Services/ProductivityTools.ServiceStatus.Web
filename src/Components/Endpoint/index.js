import React from 'react';
import { useState, useEffect } from 'react'
import service from '../../Services/api'


function Endpoint({ config }) {

    console.log("Endpoint Url:", config)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [dbInstanceName, setDbInstanceName] = useState(null);
    const [appName, setAppName] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {

        const fetchServerStatus = async () => {
            setIsLoading(true); // Set loading state before starting the fetch
            setError(null);     // Clear any previous errors
            console.log("fetchServerStatus", config.Address)
            try {

                const appName = await service.getAppName(config.Address);
                const dbInstanceName = await service.getDbInstanceName(config.Address);
                const date = await service.getDate(config.Address);
                console.log("ServerStatus", appName, dbInstanceName, date)
                setAppName(appName);
                setDbInstanceName(dbInstanceName);
                setDate(date);

            } catch (err) {
                console.error("Failed to fetch server status:", err);
                setError(err.message || 'Failed to fetch data'); // Store the error message
            } finally {
                setIsLoading(false); // Set loading state to false
            }
        };
        fetchServerStatus();
    }, []);

    return (
        <>
            <tr>
                <td>
                    Configuration
                </td>
                <td>
                    {config.Service}
                </td>
                <td>
                    {config.Server}
                </td>
                <td>
                    {new Date().toJSON().slice(0, 16).replace(/-/g, '.')}
                </td>
            </tr>
            <tr>
                <td>
                    HealthCheck
                </td>
                <td>
                    {appName}
                </td>
                <td>
                    {dbInstanceName}
                </td>
                <td>
                    {date}
                </td>
            </tr>
        </>
    );
}

// Export the component so it can be imported and used elsewhere
export default Endpoint;