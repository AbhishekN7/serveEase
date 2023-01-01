const express = require("express");
const db = require("./backend/config/db");
require("dotenv").config({ path: "./config/.env" })
const app = express();
const userRoute = require("./backend/routes/userRoute")
const authRoute = require("./backend/routes/authRoute")
const servicesRoute = require("./backend/routes/serviceRoute")
const professionalRoute = require("./backend/routes/professionalRoute")
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

