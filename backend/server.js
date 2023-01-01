const express = require("express");
const db = require("./config/db");
require("dotenv").config({ path: "./config/.env" })
const app = express();
const userRoute = require("./routes/userRoute")
const authRoute = require("./routes/authRoute")
const servicesRoute = require("./routes/serviceRoute")
const professionalRoute = require("./routes/professionalRoute")
const cors = require("cors")
db()
app.use(cors())
app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/professional", professionalRoute)
app.use("/api/services", servicesRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server is Running on Port ${process.env.PORT}`);
})

