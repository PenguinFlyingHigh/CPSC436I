var express = require("express");
var router = express.Router();
const uuidv4 = require("uuid/v4");
const db = require("../db.js");
const COLLECTION_NAME = "Messages";

router.get("/", function(req, res, next) {
  db.get()
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .then(messages => {
      res.json(messages);
    });
});

router.post("/", function(req, res, next) {
  req.body.uuid = uuidv4();
  db.get()
    .collection(COLLECTION_NAME)
    .insertOne(req.body, function(err, result) {
      if (err) {
        console.log(err);
      }
      res.status(201).json(result.ops[0]);
    });
});

router.delete("/", function(req, res, next) {
  console.log("What have you done...You deleted everything!");
  db.get()
    .collection(COLLECTION_NAME)
    .drop(function(err, result) {
      if (err) {
        console.log(err);
      }
      res.status(204).send();
    });
});

router.put("/:uuid", function(req, res, next) {
  //params format: messages/d2b33931-6e60-4ba0-89bb-31639df87774
  db.get()
    .collection(COLLECTION_NAME)
    .findOneAndUpdate(
      { uuid: req.params.uuid },
      {
        $set: {
          message: req.body.message,
          name: req.body.name,
          timestamp: req.body.timestamp
        }
      },
      { returnOriginal: false },
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(404).send();
        }

        console.log(result);
        res.json(result.value);
      }
    );
});

router.delete("/:uuid", function(req, res, next) {
  //params format: messages/d2b33931-6e60-4ba0-89bb-31639df87774
  db.get()
    .collection(COLLECTION_NAME)
    .deleteOne({ uuid: req.params.uuid }, function(err, result) {
      if (err) {
        console.log(err);
        res.status(404).send();
      }
      res.status(204).send();
    });
});

module.exports = router;
