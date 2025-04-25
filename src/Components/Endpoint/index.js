import React from 'react';
import { useState, useEffect } from 'react'
import service from '../../Services/api'


function Endpoint({ config }) {

    console.log("Endpoint Url:", config)

    const [isLoading, setIsLoading] = useState(true);

    const [dbInstanceName, setDbInstanceName] = useState(null);
    const [dbInstanceNameError, setDbInstanceNameError] = useState(null);
    const [appName, setAppName] = useState(null);
    const [appNameError, setappNameError] = useState(null);
    const [date, setDate] = useState(null);
    const [dateError, setdateError] = useState(null);


    useEffect(() => {

        setDbInstanceNameError(null);
        setappNameError(null);
        setdateError(null);
        const fetchDbInstanceName = async () => {
            try {

                const dbInstanceName = await service.getDbInstanceName(config.Address);
                setDbInstanceName(dbInstanceName);

            } catch (err) {
                console.error("Failed to fetch server status:", err);
                setDbInstanceNameError(err.message + ' ' + err.name || 'Failed to fetch data'); // Store the error message
            }
        }
        const fetchAppName = async () => {
            try {

                const appName = await service.getAppName(config.Address);
                setAppName(appName);

            } catch (err) {
                console.error("Failed to fetch server status:", err);
                setappNameError(err.message + ' ' + err.name || 'Failed to fetch data'); // Store the error message
            }
        }
        const fetchDate = async () => {
            try {

                const date = await service.getDate(config.Address);
                setDate(date);

            } catch (err) {
                console.error("Failed to fetch server status:", err);
                setdateError(err.message + ' ' + err.name || 'Failed to fetch data'); // Store the error message
            }
        }

        fetchDbInstanceName();
        fetchAppName();
        fetchDate();
    }, []);

    const getClassName = (error, config, serverValue) => {
        if (error) {
            return 'error'
        }
        if (config == serverValue) {
            return 'green'
        }
    }

    const getCurerntDate = () => {
        return new Date().toJSON().slice(0, 16).replace(/-/g, '.');
    }

    return (
        <>
            <tr>
                <td>
                    Configuration
                </td>
                <td className={getClassName(appNameError, config.Service, appName)}>
                    {config.Service}
                </td>
                <td className={getClassName(appNameError, config.Server, dbInstanceName)}>
                    {config.Server}
                </td>
                <td className={getClassName(dateError,null,null)}>
                    {getCurerntDate()}
                </td>
            </tr>
            <tr>
                <td>
                    HealthCheck
                </td>
                <td className={getClassName(appNameError, config.Service, appName)}>
                    {appNameError ?? appName}
                </td>
                <td className={getClassName(dbInstanceNameError)}>
                    {dbInstanceNameError ?? dbInstanceName}
                </td>
                <td className={getClassName(dateError,null,null)}>
                    {dateError ?? date}
                </td>
            </tr>
        </>
    );
}

// Export the component so it can be imported and used elsewhere
export default Endpoint;