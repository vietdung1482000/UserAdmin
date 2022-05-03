const mongoosee = require('mongoose')

const connectDB = async () => {
    try{
        const con = await mongoosee.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`MONGODB connected : $(con.connection.host)`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB