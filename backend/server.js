const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DB_NAME = "jobportal"
const app = express();
const PORT = 4000
const cors = require('cors');
//routes
var testRouter = require("./routes/test");

let VendorRouter = require("./routes/vendor")
let BuyerRouter = require("./routes/buyer");
const common_router = require('./routes/common');
const itemRouter = require('./routes/items');
const orderRouter = require('./routes/order');
//Middleware
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})
//API endpoints
console.log("Okkk");
app.use("/test",testRouter);

app.use("/vendor",VendorRouter);
app.use("/buyer",BuyerRouter);
app.use("/common",common_router)
app.use("/item",itemRouter)
app.use("/order",orderRouter)
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
