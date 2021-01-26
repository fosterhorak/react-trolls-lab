require('dotenv').config();
require('./config/database');

const Troll = require('./models/troll');

(async function() {


  await Troll.deleteMany({});
  const trolls = await Troll.create([
    {name: 'Albert', breed: 'Green Snoot', age:12, temperament:'hangry'},
    {name: 'Alphonso', breed: 'Red Dinkle', age:6, temperament:'jolly'},
    {name: 'Grouchy', breed: 'Gray Goostle', age:19, temperament:'crotchety'},
    {name: 'Sunshine', breed: 'Golden Squeesh', age:10, temperament:'annoyingly happy'},
    {name: 'Zachariah', breed: 'Blue Dart', age:13, temperament:'very chill'},
  ]);

  console.log(trolls)

  process.exit();

})();