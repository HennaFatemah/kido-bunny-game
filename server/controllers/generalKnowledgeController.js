const generalKnowledgeModel = require('../models/generalKnowledgeModel');


function getAllGKQuestions(_, res){
    res.status(200).json(generalKnowledgeModel.readNotes());
}

function createNewGKQuestions(req, res){
    const newNote = {

        "question": req.body.question,
        "image": req.body.image,
        "options": req.body.options,
        "answer": req.body.answer
    };
    res.status(201).json(generalKnowledgeModel.add(newNote));
}

module.exports = {
    getAllGKQuestions,
    createNewGKQuestions
}