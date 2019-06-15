var express = require('express');
var router = express.Router();
const uuidv4 = require('uuid/v4');

/* GET list of messages. */
let messages = [
  // you wouldn't store this in a list... you'd use a database
  {
    message: 'This is one of those awesome messages.',
    name: 'Jimmy',
    timestamp: 'Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)',
    uuid: 'd2b33931-6e60-4ba0-89bb-31639df87774'
  },
  {
    message: 'Oh look, another awesome message.',
    name: 'Queen',
    timestamp: 'Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)',
    uuid: '5c7ce07f-024b-47f0-8d11-997c9b64bf77'
  },
  {
    message: 'Funny.',
    name: 'Not',
    timestamp: 'Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)',
    uuid: '86699da0-cdb6-48da-950c-79aba08542b2'
  }
];

router.get('/', function(req, res, next) {
  res.json(messages);
});

router.post('/', function(req, res, next) {
  req.body.uuid = uuidv4();
  messages.push(req.body);
  res.status(201).json(req.body);
});

router.delete('/', function(req, res, next) {
  messages = [];
  console.log('What have you done...You deleted everything!');
  res.status(204).send();
});

router.put('/:uuid', function(req, res, next) {
  //params format: messages/d2b33931-6e60-4ba0-89bb-31639df87774
  let index = messages.findIndex(messages => messages.uuid === req.params.uuid);
  if (index !== -1) {
    let uuid = messages[index].uuid;
    let newMessage = req.body;
    newMessage.uuid = uuid;
    messages[index] = newMessage;
    res.json(messages[index]);
  }

  res.status(404).send();
});

router.delete('/:uuid', function(req, res, next) {
  //params format: messages/d2b33931-6e60-4ba0-89bb-31639df87774
  let index = messages.findIndex(messages => messages.uuid === req.params.uuid);
  if (index !== -1) {
    messages.splice(index, 1);
    res.status(204).send();
  }

  res.status(404).send();
});

module.exports = router;
