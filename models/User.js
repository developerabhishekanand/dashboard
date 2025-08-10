import mongoose from "mongoose";
const Schmea = mongoose.Schema;

const userSchema = new Schmea({fullname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },})


export const User = mongoose.model("User", userSchema);