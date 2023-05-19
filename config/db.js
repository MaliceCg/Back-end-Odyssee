const mongoose = require("mongoose");

mongoose 
    .connect(
       
        "mongodb://odyDB:af917524d5ddf1cd9b48fa1ffebc96d2@dokku-mongo-odyDB:27017/odyDB",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}
)
.then(()=> console.log("Connected to MongoDB"))
.catch ((err)=> console.log("Failed to connect to MongoDB",err));
