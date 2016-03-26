/**
 * ItemController
 *
 * @description :: Server-side logic for managing Items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getItems: function(req, res) {
		ItemService.getItems(function(items) {
			res.json(items);
		});
	},
	addItem: function(req, res) {
		var itemVal = (req.body.value) ? req.body.value : undefined
		ItemService.addItem(itemVal, function(success) {
			res.json(success);
		});
	},
	removeItem: function(req, res) {
		var itemVal = (req.body.value) ? req.body.value : undefined
		ItemService.removeItem(itemVal, function(success) {
			res.json(success);
		});
	}
};

