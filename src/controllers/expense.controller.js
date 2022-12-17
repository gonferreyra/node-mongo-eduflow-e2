import { request, response } from "express";
import Expense from "../models/Expense.js";

export const getExpenses = async (req = request, res = response) => {
    const expenses = await Expense.find();
    return res.status(200).json(expenses)
};

export const getExpenseById = async (req = request, res = response) => {
    const { id } = req.params;
    // console.log(id)
    const expense = await Expense.findById(id);
    res.status(200).json(expense)
};

export const createExpense = async (req = request, res = response) => {
    try {
        const { name, amount } = req.body;
        const newExpense = new Expense({
            name,
            amount
        })
        const savedExpense = await newExpense.save();
        res.status(200).json(savedExpense)
    } catch (error) {
        return res.status(500).json(error)
    }
};

export const updateExpense = async (req = request, res = response) => {
    const { id } = req.params;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedExpense)
};

export const deleteExpense = async (req = request, res = response) => {
    const { id } = req.params;
    const expense = await Expense.findByIdAndDelete(id)
    res.status(200).json(expense)
};