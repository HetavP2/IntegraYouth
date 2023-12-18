import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
  
const applicationsSchema = new Schema(
    {
        _id: {
            type: mongoose.Schema.Types.UUID,
            default: () => uuidv4(),
            required: true
        },
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
        }, roleApplyingFor: {
            type: String,
            required: true,
        }
    }, { timestamps: true })

export const Applications = mongoose.models.Applications || mongoose.model("Applications", applicationsSchema);


// {
//     "firstName": "H",
//     "lastName": "H",
//     "email": "aasjlj@gmail.com",
//     "roleApplyingFor": "tutor",
//     "questions": {
//         "507f191e810c19729de860ea": "Quest 1",
//         "507f191e810c19729de860en": "Quest 2"
//     },
//     "lengthOfResponses": {
//         "507f191e810c19729de860ea": 45,
//         "507f191e810c19729de860en": 66
//     }
// }

// # Create answer data table
// class QuestionAnswers(UserMixin, db.Model):
//     QuestionAnswerId = db.Column(db.String(36), primary_key=True)
//     StudentId = db.Column(db.String(36), nullable=False)
//     ClubId = db.Column(db.String(36), nullable=False)
//     RoleId = db.Column(db.String(36), nullable=True)
//     ApplicationQuestionId = db.Column(db.String(36), nullable=False)
//     Answer = db.Column(db.String(5000), nullable=True)
//     Date_Answer_Created = db.Column(db.Date, default=datetime.utcnow)
