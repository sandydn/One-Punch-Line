const router = require('express').Router();
const bodyParser = require('body-parser');

const characters = require('./characters.json');
const punchlines = require('./punchlines.json');

const fight = require('./functions/fight');

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
router.post('/fight', (req, res) => {
  res.json(fight(req.body.pj, req.body.pnj, req.body.pnjAttq));
})

module.exports = router;
