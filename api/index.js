// Dependencies
const router = module.exports = require('express').Router();
const controller = require('../controller');

// API Routes
router.get('/assets', (req, res) => controller.getAssets(req, res));
router.get('/movies', (req, res) => controller.getMovies(req, res));
router.get('/search', (req, res) => controller.search(req, res));