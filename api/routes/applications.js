import express from "express";
import { Applications } from "../models/applications.js";
const router = express.Router();

//POST
router.post('/', async (req, res) => {
    try {
        if (
          !req.body.id ||
          !req.body.firstName ||
          !req.body.lastName ||
          !req.body.email ||
          !req.body.subjects ||
            !req.body.roleApplyingFor ||
            !req.body.phoneNumber 
        ) {
          return res.status(400).send({
            message: "send all required fields!",
          });
        } 
        const newApplication = {
          _id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          subjects: req.body.subjects,
          availability: req.body.availability,
          comments: req.body.comments,
            roleApplyingFor: req.body.roleApplyingFor,
          phoneNumber: req.body.phoneNumber,
        };
        const application = await Applications.create(newApplication);
        return res.status(201).send(application);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//GET ALL APPLICATIONS
router.get('/', async (req, res) => {
    try {
        const applications = await Applications.find({});
        return res.status(200).json({
            data: applications
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }

});

//DELETE APPLICATION
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Applications.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({message: "Application Not Found"})
        }
        return res.status(200).send({message: "Application Deleted Successfully!"})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})


export default router;