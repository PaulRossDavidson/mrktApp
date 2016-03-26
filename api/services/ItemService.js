module.exports = {
	getItems: function(next) {
		Item.find().exec(function(err, items) {
			if(err) throw err;
			next(items);
		});
	},
	addItem: function(itemVal, next) {
		Item.create({value: itemVal}).exec(function(err, item) {
			if(err) throw err;
			next(item);
		});
	},
	removeItem: function(itemVal, next) {
		Item.destroy({value: itemVal}).exec(function(err, item) {
			if(err) throw err;
			next(item);
		});
	}
};