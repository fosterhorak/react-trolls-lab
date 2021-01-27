const Troll = require('../../models/troll');

module.exports = {
    index,
    create,
    show,
    update,
    //delete: deleteOne
};


async function index(req, res) {
    const trolls = await Troll.find({});
    res.status(200).json(trolls);
}

async function create(req, res) {
    const troll = await Troll.create(req.body);
    res.status(201).json(troll);
}

async function show(req, res) {
    const troll = await Troll.findById(req.params.id);
    res.status(200).json(troll);
}

async function update(req, res) {
    const updatedTroll = await Troll.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedTroll);
}

// async function deleteOne(req, res) {
//     const deletedTroll = await Troll.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedTroll)
// }