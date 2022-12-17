import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "The expense name is required"],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, "The amount of the expense is required"]
    },
},
    {
        timestamp: true,
        versionKey: false
    }
);

export default mongoose.model('Expense', expenseSchema);