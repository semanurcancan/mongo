import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/router.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/posts", router);

//callback func. ,çerisinde yapılan dataBAse bağlantısı
app.listen(process.env.PORT, () => {
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('connected to Db'))
.catch(err => console.log(err))
})
