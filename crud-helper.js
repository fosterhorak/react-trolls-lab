// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Troll = require('./models/troll');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy
let u, t, c, o;



// to clear out any of model... (Plus console log what's been deleted)
// User.deleteMany({}).then(result => console.log(result));
// Troll.deleteMany({}).then(result => console.log(result));