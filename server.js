const express=require ('express');
// init app
const app=express();


require("dotenv").config({ path: "./config/.env" });
const connectDB= require('./config/dbConnect');
connectDB();

/* const BodyParser=require('body-parser'); */
/*app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));*/
app.use(express.json());
app.use('/', require('./routes/userRoutes'));

const port=process.env.PORT 
 app.listen(port, (err, msg) =>{
           if (err) throw err;
           console.log(`server is running on port ${port}`);
 });


































