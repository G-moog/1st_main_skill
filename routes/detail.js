const express = require("express");
const Carts = require("../schemas/detail");
const main = require("../schemas/main");
const router = express.Router();

router.get("/detail", async (req, res) => {
    const details = await Carts.find();
    const goodsIds = details.map((cart) => detail.Id);
  
    const goods = await main.find({ Id: Id });
  
    const results = details.map((detail) => {
          return {
              quantity: cart.quantity,
              goods: goods.find((item) => item.goodsId === cart.goodsId)
          };
    });
  
    res.json({
      carts: results,
    });
  });

module.exports = router;