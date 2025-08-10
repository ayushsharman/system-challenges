import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mainRoutes from './routes/blogs.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(morgan('dev'));


app.use('/', mainRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})

