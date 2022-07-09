import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());
app.use(urlencoded());

app.get('/', (request, response) => {
    response.send('Hello GraphQL server!');
});

app.listen(port, (url) => {
    console.log(`🚀 express-server ready @ http://localhost:${port} `);
});
