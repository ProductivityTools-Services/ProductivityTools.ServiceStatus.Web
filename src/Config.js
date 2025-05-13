
const dev = {
    configUrls : 'https://script.google.com/macros/s/AKfycbx7ieTYTvIpJAO2DQ9zjtGG_jdCW41vh9tD8k1ozzPiCGPhBdI6XtEU70nxHj_GFZDL/exec'
}


const prod = {
    configUrls : 'https://script.google.com/macros/s/AKfycbx7ieTYTvIpJAO2DQ9zjtGG_jdCW41vh9tD8k1ozzPiCGPhBdI6XtEU70nxHj_GFZDL/exec'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;