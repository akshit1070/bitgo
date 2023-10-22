

var BitGoJS = require('bitgo');
require('dotenv').config();

var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN });



let id;

const createWallet = async (seed, name) => {

    try {
        await bitgo.wallets().createWalletWithKeychains({ "passphrase": seed, "label": name }, function (err, result) {
            if (err) { console.dir(err); throw new Error("Error creating wallet!"); }
            console.log("Wallet Created: " + result.wallet.id());
            id = result;

        });
        return {
            status: true,
            message: id
        };

    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            message: "error"
        }
    }

}

const getBalance = async (walletId) => {
    let bal;
    try {
        await bitgo.wallets().get({ type: 'bitcoin', id: walletId }, function (err, wallet) {
            if (err) { console.log(err); process.exit(-1); }
            console.log('Wallet balance is: ');
            console.log(wallet.balance() + ' Satoshis');
            bal = wallet.balance();

        });

        return {
            status: true,
            balance: bal,
        };
    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            message: "error"
        }
    }
}

var sendBitcoin = async function (receiverAddress, senderId, Amount, seed) {
    try {
        let res;
        let a = Amount * 1e8;
        let c = await bitgo.wallets()
        let wallet = await c.get({ type: 'bitcoin', id: senderId })

        let resp = await wallet.sendCoins({ address: receiverAddress, amount: a, walletPassphrase: seed },
        );

        //   console.log(resp)
        return {
            status: true,
            message: resp,
        };
    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            message: e
        }
    }
}

module.exports = {
    sendBitcoin,
    getBalance,
    createWallet
}