import express from 'express';
import router from './routes/route.js';

const app = express();
const PORT = 3000;


app.use('/', router);
app.use(express.json());

app.listen(PORT, () =>{
    console.log('Server is live');
})