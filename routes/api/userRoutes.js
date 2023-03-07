const router = require('express').Router();
const { ObjectId } = require('mongoose').Types;
const {User} = require('../../models');

//get all users
router.get('/', (req, res) => {
User.find({}).then((users) => res.json(users));

});

//get a singler user by _id and populate related thought and friend data
router.get('/:userId', (req, res) => {
    User.findOne({ _id: req.params.userId })
    .populate('friends')
    .populate('thoughts')
    .then((user) => res.json(user));
    
    });

//post a new user by accepting incoming JSON body with username and email
router.post('/newUser',  (req,res) =>{
     User.create(req.body).then((user) => res.json(user));
});

//put - update a user by its _id
router.put('/updateUser/:userId', (req,res) => {
    User.findOneAndUpdate(
        {_id: req.params.userId},
        { $set: req.body },
        { runValidators: true, new: true }
        )
    .then((user) => res.json(user));
});

//delete - remove a user by its _id
router.delete('/deleteUser/:userId', (req,res) => {
    User.findOneAndRemove(
        {_id: req.params.userId}
        )
    .then((user) => res.json(user));
});


//BONUS - remove a user's associated thoughts when deleted


// /api/users/:userId/friends/:friendId

//POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
let friendly = await User.findOne({ _id: req.params.userId });
friendly.friends.push(req.params.friendId);
res.json(friendly);
});

//DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/delete/:friendId', async (req,res) => {
let unfriendly = await User.findOne({_id: req.params.userId});
let deleteFriend = req.params.friendId;
unfriendly.friends = unfriendly.friends.filter(friend => friend != deleteFriend);
res.json({message: "deleted"});
});



module.exports = router;