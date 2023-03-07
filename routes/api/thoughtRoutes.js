const router = require('express').Router();
const {User, Thought} = require('../../models');
// /api/thoughts

//GET to get all thoughts
router.get('/', (req, res) => {
    Thought.find({}).then((thoughts) => res.json(thoughts));
    
    });

//GET to get a single thought by its _id
router.get('/:thoughtId', (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
    .populate('reactions')
    .then((thought) => res.json(thought));
    
    });

//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/newThought', async (req,res) => {
    let newThought = await Thought.create(req.body);
    let thisUser = await User.findOne({ username: req.body.username });
    thisUser.thoughts.push(newThought);
    res.json(newThought);

});
//PUT to update a thought by its _id
router.put('/updateThought/:thoughtId', (req,res) => {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        { $set: req.body },
        { runValidators: true, new: true }
        )
    .then((thought) => res.json(thought));
});

//DELETE to remove a thought by its _id
router.delete('/deleteThought/:thoughtId', (req,res) => {
    Thought.findOneAndRemove(
        {_id: req.params.thoughtId}
        )
    .then((thought) => res.json({message:"deleted"}));
});

// /api/thoughts/:thoughtId/reactions

//POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions/create', async (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
        )
    .populate('reactions')
    .then((thought)=> res.json(thought));
    });
//DELETE to pull and remove a reaction by the reaction's reactionID value
router.delete('/:thoughtId/reactions/delete/:reactionId',  (req,res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      ).then((thought)=> res.json(thought));

    });

  

module.exports = router;

