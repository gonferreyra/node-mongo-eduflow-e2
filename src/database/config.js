import mongoose from "mongoose";

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const uri = process.env.MONGODB_CNN

mongoose.connect(uri)
    .then(db => console.log("DataBase Conected"))
