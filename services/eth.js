

// const accessToken =
//   "v2x5bf54aefdaa1a27582724343ea5f908b99c9a16e126c5a19771be96840f4ae04"
// const walletPassphrase ="mywallethgjgs567"

const { BitGoAPI } = require('@bitgo/sdk-api')
const { Btc } = require('@bitgo/sdk-coin-btc');
var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: 'v2x5bf54aefdaa1a27582724343ea5f908b99c9a16e126c5a19771be96840f4ae04'});

 
// const sdk = new BitGoAPI({
//   accessToken,
//   env: 'test'
// })

// sdk.register('tbtc', Btc.createInstance);

// sdk.register('gteth', Gteth.createInstance)

// const targetAddress = '2NFK6b6Vxn9wauEHJ3siZwdTgxjBnjrRocQ'

bitgo
  .coin('tbtc')
  .wallets()
  .generateWallet({
    label: 'My Test Wallet',
    passphrase: 'secretpassphrase1a5df8380e0e30',
  })
  .then(function (wallet) {
    // print the new wallet
    console.dir(wallet);
  });
