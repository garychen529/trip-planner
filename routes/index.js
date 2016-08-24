var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

module.exports = router;


router.get('/', function(req, res, next) {
	var getHotelsPromise = Hotel.findAll()
	.then(function(allHotels) {
		return allHotels;
	})
	.catch(function(err) {
		throw err;
	})

	var getRestaurantsPromise = Restaurant.findAll()
	.then(function(allRestaurants) {
		return allRestaurants;
	})
	.catch(function(err) {
		throw err;
	})

	var getActivitiesPromise = Activity.findAll()
	.then(function(allActivities) {
		return allActivities;
	})
	.catch(function(err) {
		throw err;
	})

	Promise.all([getHotelsPromise, getRestaurantsPromise, getActivitiesPromise])
	.then(function(result) {
		return res.render('index', {hotels: result[0],
			restaurants: result[1],
			activities: result[2]})
	})
	.catch(function(err) {
		throw err;
	})
});