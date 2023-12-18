import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

const questionsSchema = new Schema(
    {
        _id: {
            type: mongoose.Schema.Types.UUID,
            default: () => uuidv4(),
            required: true
        }, forRole: {
            type: String,
            required: true,
        }, question: {
            type: String,
            required: true,
        }, lengthOfResponse: {
            type: Number,
            required: true,
        }
    }, { timestamps: true })

export const Questions = mongoose.models.Questions || mongoose.model("Questions", questionsSchema);

