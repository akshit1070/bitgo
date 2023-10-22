

const crypto = require('../services/wallet.js')
const createWallet = async (req, res) => {
    try {
      let { seed , label } = req.body;

      const result = await crypto.createWallet(seed,label);
      res.status(200).send({
        data: result,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };
  const getBalance = async (req, res) => {
    try {
      let { walletId } = req.body;
      console.log(walletId)
      const result = await crypto.getBalance(walletId);
      res.status(200).send({
        data: result,
      });
    } catch (error) {

        console.log(error)
      res.status(500).send({ message: "Internal Server Error" });
    }
  };
  const sendBitcoin = async (req, res) => {
    try {
       // let { receiver } = req.body;

      let {receiver, sender, amount, seed } = req.body;
        console.log(receiver, sender, amount, seed)
        const result = await crypto.sendBitcoin(receiver, sender, amount, seed);
      res.status(200).send({
        data: result,
      });
    } catch (error) {
        console.log(error)
      res.status(500).send({ message: "Internal Server Error" });
    }
  };

  module.exports={
    sendBitcoin,
    getBalance,
    createWallet
}