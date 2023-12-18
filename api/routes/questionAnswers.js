import express from "express";
import { QuestionAnswers } from "../models/questionAnswers.js";
const router = express.Router();

//POST
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.applicantId ||
            !req.body.answers 
        ) {
            return res.status(400).send({
                message: "send all required fields!"
            });
        } 
        const newQuestionAnswer = {
            applicantId: req.body.applicantId, 
            answers: req.body.answers
        }
        const questionAnswer = await QuestionAnswers.create(newQuestionAnswer);
        return res.status(201).send(questionAnswer);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//GET ALL APPLICATIONS
// router.get('/', async (req, res) => {
//     try {
//         const applications = await Applications.find({});
//         return res.status(200).json({
//             data: applications
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//     }

// });

// //DELETE APPLICATION
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await Applications.findByIdAndDelete(id);

//         if (!result) {
//             return res.status(404).json({message: "Application Not Found"})
//         }
//         return res.status(200).send({message: "Application Deleted Successfully!"})

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//     }
// })


export default router;