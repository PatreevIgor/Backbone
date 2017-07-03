var Person = Backbone.Model.extend({

	defaults: {
		name: 'Defaults name',
		age: 30,
		job: 'Default job'
	},

	walk: function() {
		return this.get('name') + ' is walking.';
	}
	
});