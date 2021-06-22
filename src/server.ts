import express from 'express';
import "reflect-metadata";

import "./database";

const app = express();
require('dotenv').config()
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))