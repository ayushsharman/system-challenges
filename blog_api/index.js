import express from 'express';

const app = express();

const PORT = 3000;

import mainRoutes from './routes/blogs.js';

app.use(express.json());
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

