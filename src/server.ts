import express from 'express';
import "reflect-metadata";

import "./database";
import { router } from "./routes";

const app = express();

app.use(router)

require('dotenv').config()
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))