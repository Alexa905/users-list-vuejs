'use strict'

const express = require('express')
const encryptor = require('./encryptor')
const userManager =  require('./userManager')
const router = express.Router()

router.route('/users/')
	.get(function (req, res, next) {
		res.json(userManager.getUsers())
	})
	.post(function (req, res, next) {
		const user = req.body
    userManager.addUser(user)
		res.status(200).json(userManager.getUsers())

	});

router.route('/user/:id')
	.get(function (req, res, next) {
		const user = userManager.findUser(req.params.id)
		if (user) {
			res.status(200).json(user)
		}
		else {
			res.status(404);
			next();
		}
	})
	.delete(function (req, res, next) {
		const user = userManager.findUser(req.params.id)
		if (user) {
      userManager.deleteUser(user)
			res.status(200).json(userManager.getUsers())
		}
		else {
			res.status(404);
			next();
		}
	})
	.put(function (req, res, next) {
		const updatedUser = req.body;
		const user = userManager.findUser(req.params.id)
		if (user) {
      userManager.updateUser(user, updatedUser)
			res.status(200).json(userManager.getUsers());
		}
		else {
			res.status(404);
			next();
		}
	});

module.exports = router
