var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Podcast = require('../models/Podcast.js');

/* GET ALL PODCASTS */
router.get('/', function(req, res, next) {
  Podcast.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PODCAST BY ID */
router.get('/:id', function(req, res, next) {
  Podcast.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PODCAST */
router.post('/', function(req, res, next) {
  Podcast.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PODCAST */
router.put('/:id', function(req, res, next) {
  Podcast.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PODCAST */
router.delete('/:id', function(req, res, next) {
  Podcast.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
