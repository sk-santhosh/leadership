import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {connect} from "mongoose";
import apiRouter from "./src/routes/Api";

dotenv.config();

(async function() {
  await connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () =>console.log('Database Connected'));
})();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', apiRouter)

app.listen(process.env.PORT, () => console.log(`Server running in port: ${process.env.PORT}`))