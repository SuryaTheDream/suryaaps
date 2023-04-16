const mongoose = require("mongoose");

uri =
 "mongodb+srv://narendrasuryaagrawal24:JZXduVWvFDHlP1vn@suryaapi.fnnpxth.mongodb.net/SuryaApi?retryWrites=true&w=majority";
const connectDB = () => {
   // console.log(" db connected");
    return mongoose.connect(uri , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;