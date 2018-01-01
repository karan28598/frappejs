const frappe = require('frappe-core');

class todo extends frappe.document.Document {
	validate() {
		if (!this.status) {
			this.status = 'Open';
		}
	}
}

module.exports = { todo: todo };