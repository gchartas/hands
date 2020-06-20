// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Personel Training Event', {
	onload_post_render: function(frm) {
		frm.get_field("employees").grid.set_multiple_add("employee");
	},
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Personel Training Result"), function() {
				frappe.route_options = {
					training_event: frm.doc.name
				};
				frappe.set_route("List", "Personel Training Result");
			});
			frm.add_custom_button(__("Personel Training Feedback"), function() {
				frappe.route_options = {
					training_event: frm.doc.name
				};
				frappe.set_route("List", "Personel Training Feedback");
			});
		}
	}