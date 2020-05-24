// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee Daily Check', {
	template: function(frm){
	    frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Employee Daily Check Template",
				name: frm.doc.template
			},
			callback: function(data){
				frm.fields_dict.parameters.grid.remove_all();
				for (var i in data.message.parameters){
					frm.add_child("parameters");
					frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
				}
				frm.refresh();
			}
		});
	}
});