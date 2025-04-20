import React from 'react';
import { useState, useEffect } from 'react'
import service from '../../Services/api'


function Endpoint({url}) {

    const [serverStatus, setServerStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {



        const fetchServerStatus = async () => {
            setIsLoading(true); // Set loading state before starting the fetch
            setError(null);     // Clear any previous errors

            try {
                
                const response = await service.call(url);

                // Check if the response was successful (status code 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                setServerStatus(data);

            } catch (err) {
                console.error("Failed to fetch server status:", err);
                setError(err.message || 'Failed to fetch data'); // Store the error message
                setServerStatus(null); // Optionally reset status on error
            } finally {
                setIsLoading(false); // Set loading state to false
            }
        };

        fetchServerStatus();
    }, []);

    return (
        <span>hello</span>
    ); 
}

// Export the component so it can be imported and used elsewhere
export default Endpoint;