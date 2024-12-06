#!/usr/bin/env node

const axios = require('axios');

const getExternalIp = async () => {
    const response = await axios.get('https://api-bdc.net/data/client-info');
    const ip = response.data.ipString;
    return ip;
}

(async () => {
    const ip = await getExternalIp();
    console.log(ip);
})();