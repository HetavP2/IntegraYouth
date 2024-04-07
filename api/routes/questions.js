import express from "express";
import { Questions } from "../models/questions.js";
const router = express.Router();

//POST
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.forRole ||
            !req.body.question ||
            !req.body.lengthOfResponse
        ) {
            return res.status(400).send({
                message: "send all required fields!"
            });
        } 
        const newQ = {
            forRole: req.body.forRole, 
            question: req.body.question,
            lengthOfResponse: req.body.lengthOfResponse
        }
        const question = await Questions.create(newQ);
        return res.status(201).send(question);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//GET ALL APPLICATIONS
router.get('/', async (req, res) => {
    try {
        const questions = await Questions.find({});
        return res.status(200).json({
            data: questions
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }

});


router.get('/tutor', async (req, res) => {
    try {
        const questions = await Questions.find({ forRole: 'Tutor' && "tutor" });
        return res.status(200).json({
            data: questions
        });
    } catch (error) {
        console.log('ERROR: ' + error.message);
        res.status(500).send({message: error.message})
    }

});

router.get('/tutee', async (req, res) => {
    try {
        const questions = await Questions.find({ forRole: "Tutee" });
        return res.status(200).json({
            data: questions
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }

});

// DELETE APPLICATION
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await Questions.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({message: "Question Not Found"})
        }
        return res.status(200).send({message: "Question Deleted Successfully!"})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})


export default router;