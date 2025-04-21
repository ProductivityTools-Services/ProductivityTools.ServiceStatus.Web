import axios from 'axios'
import { config } from '../Config';


async function call(url) {
    const response = await axios.get(url)
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
    getUrlConfiguration
}  


export default service;