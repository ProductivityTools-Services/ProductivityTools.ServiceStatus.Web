import axios from 'axios'
import { config } from '../Config';


async function call(url) {
    const response = await axios.get(url)
    return response.data;
}

async function getDate(url) {
    let dateUrl=`https://${url}/api/debug/date`
    const response = await axios.get(url)
    return response.data;
}

async function getDbInstanceName(url) {
    let serverNameUrl=`https://${url}/api/debug/serverName`
    const response = await axios.get(serverNameUrl)
    return response.data;
}

async function getAppName(url) {
    let appNameUrl=`https://${url}/api/debug/appName`
    const response = await axios.get(appNameUrl)
    return response.data;
}



async function getUrlConfiguration(){
    var configUrl=config.configUrls;
    const response = await axios.get(configUrl)
    var result= response.data;

    return result.data;
}

const service={
    call,
    getDate,
    getDbInstanceName,
    getAppName,
    getUrlConfiguration
}  


export default service;