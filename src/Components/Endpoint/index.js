import React from 'react';
import { useState, useEffect } from 'react'
import service from '../../Services/api'
import moment from 'moment';



function Endpoint({ config }) {


    const [isLoading, setIsLoading] = useState(true);

    const [dbInstanceName, setDbInstanceName] = useState(null);
    const [dbInstanceNameError, setDbInstanceNameError] = useState(null);
    const [appName, setAppName] = useState(null);
    const [appNameError, setappNameError] = useState(null);
    const [date, setDate] = useState(null);
    const [dateError, setdateError] = useState(null);
    const [reloader,setReloader]=useState(0);


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
    }, [reloader]);

    const getClassName = (error, config, serverValue) => {
        if (error) {
            return 'error'
        }
        if (config == serverValue) {
            return 'green'
        }
    }

    const getCurerntDate = () => {
        return new Date().toJSON().slice(0, 16).replace(/-/g, '.').replace('T', ' ');;
    }

    const parseDate = (date) => {
        if (date) {
            const date3 = moment(date, 'DD.MM.YYYY HH:mm:SS').toDate();
            
            return date3.toJSON().slice(0, 16).replace(/-/g, '.').replace('T', ' ');
        }
        else {
            return "waiting"
        }
    }
    const reload=(config)=>{
        setReloader(reloader+1);
    }

    return (
        <>
            <tr>
                <td rowSpan={2}>
                    {config.rr}
                </td>
                <td>Sheet</td>
                <td className={getClassName(appNameError, config.Service, appName)}>
                    {config.Service}
                </td>
                <td className={getClassName(appNameError, config.DbInstanceName, dbInstanceName)}>
                    {config.DbInstanceName}
                </td>
                <td className={getClassName(dateError, null, null)}>
                    {getCurerntDate()}
                </td>
                <td><button onClick={()=>reload(config)}>Reload</button></td>
                
            </tr>
            <tr>
                <td>Server</td>
                <td className={getClassName(appNameError, config.Service, appName)}>
                    {appNameError ?? appName}
                </td>
                <td className={getClassName(dbInstanceNameError)}>
                    {dbInstanceNameError ?? dbInstanceName}
                </td>
                <td className={getClassName(dateError, null, null)}>
                    {dateError ?? parseDate(date)}
                </td>
                <td><button onClick={()=>reload(config)}>Reload</button></td>
            </tr>
        </>
    );
}

// Export the component so it can be imported and used elsewhere
export default Endpoint;