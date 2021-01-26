const express = require('express');
const router = express.Router();
const generalKnowledgeController = require('../controllers/generalKnowledgeController');

//Attach some routes


router.get('/', generalKnowledgeController.getAllGKQuestions);
router.post('/', generalKnowledgeController.createNewGKQuestions);

router.delete("/:id", (req, res) => {
    console.log(req.params);
    console.log('delete a driving test');
    res.send('you deleted a post');
})


//Export the router
module.exports = router;