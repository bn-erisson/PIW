var express = require('express');
var router = express.Router();
var ProductService = require("../services/product.service");

router.get('/list',function(req,res){
    res.json(ProductService.list());
});

router.post('/register', function(req, res) {
    const product = ProductService.register(req.body);
    res.json(product);
});

  router.put('/update/:id', function(req, res){
    const product = ProductService.update(req.params.id, req.body);
    return res.json(product);
});

router.delete('/delete/:id', function(req, res){
    const ok = ProductService.delete(req.params.id);
    if(ok) return res.json({"sucess":true});
    else return res.json({"sucess":false});
  });

  router.get('/retrieve/:id', function(req, res){
    const out = ProductService.retrieve(req.params.id);
    return res.json(out);
  });

  module.exports = router;
