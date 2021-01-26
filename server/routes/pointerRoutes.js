const express = require('express');
const router = express.Router();
const pointersController = require('../controllers/pointersController');

//Attach some routes


router.get('/', pointersController.getAllPointers);
router.post('/', pointersController.createNewPointers);

router.delete("/:id", (req, res) => {
    console.log(req.params);
    console.log('delete a pointer');
    res.send('you deleted a pointer');
})


//Export the router
module.exports = router;