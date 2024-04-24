const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const database = require("./config/db")

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5009

app.use(cors())
app.use(express.json())

app.use("/auth", require("./routes/userRoute"))
app.use("/bus", require("./routes/busRoute"))
app.use("/company", require("./routes/companyRoute"))
app.use("/trip", require("./routes/tripRoute"))
app.use("/ticket", require("./routes/ticketRoute"))
app.use("/seat", require("./routes/seatRoute"))




 

database()
app.listen(PORT, ()=>{
    console.log("Server port:", PORT);
})