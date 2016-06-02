var express = require('express');
var Link = require('../models/link');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Link.find(function(err, links) {
      if (err) return res.status(500).send(err);
      res.send(links);
    });
  })
  .post(function(req, res) {
    Link.create(req.body, function(err, link) {
      if (err) return res.status(500).send(err);
      res.send(link);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Link.findById(req.params.id, function(err, link) {
      if (err) return res.status(500).send(err);
      res.send(link);
    });
  })
  .put(function(req, res) {
    Link.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Link.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
