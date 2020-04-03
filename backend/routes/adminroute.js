const express = require("express");

const adminController = require("../controllers/adminController");

const router = (module.exports = require("express").Router());

router.post("/addProduct", adminController.addProduct);
