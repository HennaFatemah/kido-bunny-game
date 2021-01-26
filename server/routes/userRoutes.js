const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router
    .route("/")
    .post((req,res) => {
        new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        .save()
        .then(newUser => {
            res.status(201).json({ newUser });
        });
    })

router.route('/')
    .get((_,res) => {
        User
        // .where(req.query)
        .fetchAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(() => {
            res.status(400).json({"error": "Unknown query parameter"})
        });
    })
router
    .route("/:id")
    .get((req, res) => {
        console.log(req.params.id)
        User
        .where({ id: req.params.id })
        .fetch({ withRelated: ['chatRoomDetails']})
        .then(user => {
            res.status(200).json(user);
        })

    })
    .put((req, res) => {
        User
        .where({id: req.params.id})
        .fetch()
        .then(user => {
            return user
                .save({
                    name: req.body.name ? req.body.name : user.name,
                    username: req.body.username ? req.body.username : user.username,
                    password: req.body.password ? req.body.password : user.password
                })
                .then(updateUser => {
                    res.status(200).json(updateUser)
                })
            })
    })
    .delete((req, res) => {
        User
            .where({id: req.params.id})
            .destroy()
            .then(userDetails => {
                res.status(204).json(userDetails)
            })
    })

module.exports = router;
