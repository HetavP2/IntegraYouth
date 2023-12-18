import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";


const questionAnswersSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.UUID,
      default: () => uuidv4(),
      required: true,
    },
    applicantId: {
      type: mongoose.Schema.Types.UUID,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    }
  },
  { timestamps: true }
);

export const QuestionAnswers =
  mongoose.models.QuestionAnswers ||
  mongoose.model("QuestionAnswers", questionAnswersSchema);
