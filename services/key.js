const BitGoJS = require('../../../src/index.js');
const bitgo = new BitGoJS.BitGo({ env: 'test' });

// Set your access token here
const accessToken = 'v2xcbe8617bd58947a9ec41cc7a92e0a9a9d81dc2780669faa59eab3016ad5792ae';
// Set your coin of choice here
const coin = 'tbtc';

bitgo.authenticateWithAccessToken({ accessToken });
let key = bitgo.coin(coin).keychains().create();
console.dir(key);