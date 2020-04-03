const express = require("express");
const Product = require("../models/product");

exports.addProduct = (req, res, next) => {
  console.log("the product", req.body);
  // will be changer later jst for testing
  const name = req.body.name;
  const provider = req.body.provider;
  const file = req.body.file;
  const category = req.body.category;
  const dimension = req.body.dimension;

  const product = new Product({
    name: name,
    provider: provider,
    file: file,
    category: category,
    dimension: dimension
  });
  product
    .save()
    .then(result => console.log("created"))
    .catch(err => console.log(err));
};
