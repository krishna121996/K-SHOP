import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import mongoose from "mongoose";
import foodRouter from './routes/foodRoute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//DB connections
connectDB()

// Api end point
app.use('/api/food', foodRouter)



//mongodb+srv://krishnaprasath00:tljAb8r7m8PoJWEJ@cluster0.7jedlwq.mongodb.net/?
// mongoose.connect('mongodb+srv://krishnaprasath00:tljAb8r7m8PoJWEJ@cluster0.7jedlwq.mongodb.net/kshop-project-db')
// mongoose.connect('mongodb+srv://krishnaprasath00:tljAb8r7m8PoJWEJ@cluster0.7jedlwq.mongodb.net/kshop', { })
//   .then(() => console.log('Database connected successfully'))
//   .catch((err) => {
//     console.error('Database connection error:', err.message);
//     process.exit(1);
//   });

// mongoose.connection.on('error', err => {
//   console.error('Mongoose connection error:', err.message);
// });
// mongoose.set('debug', true);

app.get('/', (req, res)=> {
res.send("APi success")
})

app.listen(port, ()=> {
    console.log(`Server started and listenting on ${port}`)
})


// mongodb+srv://kshop:kshop@cluster0.6kyjwkh.mongodb.net/?