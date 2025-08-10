import express from 'express';

const app = express();

const port = process.env.PORT || 3000

import mainRoutes from './routes/blogs.js';

app.use(express.json());
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})

