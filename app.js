const express = require("express");
const router = require("./src/router/api")
const app = new express();
const bodyParser = require("body-parser")

// Security middleware 
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const xss  = require("xss-clean");

// Database
const mongoose = require("mongoose");

// all security middleware implemantion
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

// Body-parser
app.use(bodyParser.json());

// Rate limit
const limit = rateLimit({
    windoMs: 15*60*100,
    max:3000
})

// Database


app.use("/api/v1", router);
module.exports=app;