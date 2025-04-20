import axios from 'axios'

async function call(url) {
    const response = await axios.get(url)
    return response.data;
}

const service={
    call
}  
export default service;