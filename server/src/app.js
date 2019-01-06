import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

import search from '../src/routes/Search'
import statistic from '../src/routes/Statistic'

const app = express();
const mongoUrl = 'mongodb+srv://admin:admin@cluster0-5h2k5.mongodb.net/iTunes?retryWrites=true';

/** connect to MongoDB datastore */
try {
    mongoose.connect(mongoUrl, {useNewUrlParser: true});
} catch (error) {
    console.log(error)
}

let port = 5000;



/** set up middlewares */
app.use(cors());


app.use(search);
app.use(statistic);

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});