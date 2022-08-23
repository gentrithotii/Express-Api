import express from 'express';
import { createObject, getAllOjects, logger } from './api.controller';

const app = express();
app.use(express.json());
app.use(logger)

app.get("/api", getAllOjects);
app.post("/api", createObject);


app.listen(3000, () => {
    console.log('Server is online on: http://localhost:3000');
});