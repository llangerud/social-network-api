const router = require('express').Router();
const { ObjectId } = require('mongoose').Types;
const {User} = require('../models');

//  /api/users

//get all users
router.get('/api/users', (req, res) => {
User.find({}).then((users) => res.json(users));

});

//get a singler user by _id and populate related thought and friend data

//post a new user by accepting incoming JSON body with username and email

//put - update a user by its _id

//delete - remove a user by its _id

//BONUS - remove a user's associated thoughts when deleted


// /api/users/:userId/friends/:friendId

//POST to add a new friend to a user's friend list

//DELETE to remove a friend from a user's friend list


module.exports = router;