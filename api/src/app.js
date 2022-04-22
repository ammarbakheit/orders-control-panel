const express = require("express");
const { deserializeUser } = require("./middleware/deserializeUser");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
const corsOrigin = "http://localhost:3000";


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: corsOrigin }));
// app.use(deserializeUser);


app.use("/", router);

const port = 2000;
const host = "localhost";

app.listen(port, host, () => {
    console.log(`server is running on ${host}:${port}`)
})   