const mongoose = require("mongoose");

mongoose 
    .connect(
       
        "mongodb+srv://" + process.env.PASS + "@cluster0.iclbrtp.mongodb.net/test",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}
)
.then(()=> console.log("Connected to MongoDB"))
.catch ((err)=> console.log("Failed to connect to MongoDB",err));
