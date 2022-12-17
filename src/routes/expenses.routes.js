import { Router } from "express";
import { createExpense, deleteExpense, getExpenseById, getExpenses, updateExpense } from "../controllers/expense.controller.js";


const router = Router();

router.get('/all', getExpenses);

router.get('/:id', getExpenseById);

router.post('/', createExpense);

router.put('/:id', updateExpense);

router.delete('/:id', deleteExpense);

export default router