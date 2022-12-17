import express from "express";
import morgan from "morgan";
import routesExpenses from './routes/expenses.routes.js'


const app = express();
app.use(morgan('dev'))

app.use(express.json());

app.get('/', (req, res) => {
    res.json('Test App')
});

app.use('/expenses', routesExpenses);

export default app