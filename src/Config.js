
const dev = {
    configUrls : 'https://script.google.com/macros/s/AKfycbzfyaODd00E7rwh4PsTwA3lgavnW_CDbtbE1agFULnAOPDJn7vWqsQz-nKHjQzc9J4W/exec'
}


const prod = {
    configUrls : 'https://script.google.com/macros/s/AKfycbzfyaODd00E7rwh4PsTwA3lgavnW_CDbtbE1agFULnAOPDJn7vWqsQz-nKHjQzc9J4W/exec'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;