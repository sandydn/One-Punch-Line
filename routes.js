const router = require('express').Router();
const bodyParser = require('body-parser');

const characters = require('./characters.json');
const punchlines = require('./punchlines.json');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

// CHARACTERS

router.get('/character', (req, res) => {
  res.json(characters.cartman);
});

// PUNCHLINES

router.get('/punchline', (req, res) => {
  res.json(punchlines[0]);
})

// FIGHT

module.exports = router;
