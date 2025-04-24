import React from 'react';
import { useState, useEffect } from 'react'
import service from '../../Services/api'


function Endpoint({url}) {

    console.log("Endpoint Url:", url)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [dbInstanceName, setDbInstanceName] = useState(null);
    const [appName, setAppName] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {

        const fetchServerStatus = async (callUrl) => {
            setIsLoading(true); // Set loading state before starting the fetch
            setError(null);     // Clear any previous errors

            try {
                
                const appName = await service.getAppName(url);
                const dbInstanceName = await service.getDbInstanceName(url);
                const date = await service.getDate(url);
                console.log("ServerStatus",appName,dbInstanceName,date)
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
        fetchServerStatus(url);
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Service
                        </th>
                        <th>
                            ServerName
                        </th>
                        <th>
                            Date
                        </th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
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
                </tbody>
            </table>
        </div>
    ); 
}

// Export the component so it can be imported and used elsewhere
export default Endpoint;