
const axios = require('axios');

const getExternalIp = async () => {
    const response = await axios.get('https://api.ipify.org?format=json');
    const ip = response.data.ip;
    return ip;
}

(async () => {
    const ip = await getExternalIp();
    console.log(ip);
})();
