
const dev = {
    configUrls : 'https://script.google.com/macros/s/AKfycbwbUDuWSA9tnka8WiV_ARVGKfxFVSfhnLDZ5kQs8m37OO1DOPpz7g5S9v-iwTJ3nuLV/exec'
}


const prod = {
    configUrls : 'https://script.google.com/macros/s/AKfycbwbUDuWSA9tnka8WiV_ARVGKfxFVSfhnLDZ5kQs8m37OO1DOPpz7g5S9v-iwTJ3nuLV/exec'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;