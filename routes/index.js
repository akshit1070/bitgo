const express = require('express');
const router = express.Router();
const walletController = require("../controllers/wallet");

router.post("/wallet", walletController.createWallet);
router.post("/balance", walletController.getBalance);
router.post("/send", walletController.sendBitcoin);



module.exports = router;
