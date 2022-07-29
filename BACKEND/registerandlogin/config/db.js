const mongoose = require('mongoose');
 
exports.dbConn = async ()=>{
    try{
        const dbURL = "mongodb+srv://Parthamanbaral:9078984063@cluster0.j8tmatn.mongodb.net/?retryWrites=true&w=majority"; 
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Database Connected');
    }
    catch(err){
        console.log(`Database connection error ${err.message}`);
    } 
}