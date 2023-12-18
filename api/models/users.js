import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }, email: {
            type: String,
            required: true,
        }, password: {
            type: String,
            required: true,
        }, role: {
            type: String,
            required: true,
        }
    }, { timestamps: true })

export const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);
