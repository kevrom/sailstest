var Emailer = require('../../utils/emailer');

module.exports.sendEmail = function(options, data, cb) {

	var opts = {
		template: 'main',
		subject: 'sup',
		to: {
			name: options.name,
			email: options.email
		}
	}

	var email = new Emailer(opts, data);
	email.send(function(err, info) {
		if (err) {
			console.log(err);
		}
		if (cb) {
			cb();
		}
	});
}
