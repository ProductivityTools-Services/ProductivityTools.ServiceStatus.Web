
const dev = {
    configUrls : 'https://script.google.com/macros/s/AKfycbxC1WPg97vdYHjorK6OHNbiu-jc-qUSxSw54yIWq3sbZ4KIq12COsqMYrGw_8joQiW5/exec'
}


const prod = {
    configUrls : 'https://script.google.com/macros/s/AKfycbxC1WPg97vdYHjorK6OHNbiu-jc-qUSxSw54yIWq3sbZ4KIq12COsqMYrGw_8joQiW5/exec'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;