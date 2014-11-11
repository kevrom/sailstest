/**
 * MailController
 *
 * @description :: Server-side logic for managing Mails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
	sendEmail: function(req, res) {
		var data = req.body;
		var opts = {
			name: data.name,
			email: data.email
		};
		EmailService.sendEmail(opts, data, function() {
			res.redirect('/');
		});
	}
	

};

