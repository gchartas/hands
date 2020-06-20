// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Personel Training Result', {
	training_event:function(frm){
	    frappe.call({
	        "method": "frappe.client.get",
	        args: {
	            doctype: "Personel Training Event",
	            name: frm.doc.training_event
	        },
	        callback:function(data){
	            frm.fields_dict.employees.grid.remove_all();
	            for (var i in data.message.employees){
	                frm.add_child("employees");
	                frm.fields_dict.employees.get_value()[i].employee = data.message.employees[i].employee;
	                frm.fields_dict.employees.get_value()[i].employee_name = data.message.employees[i].employee_name;
	            }
	            frm.refresh();
	        }
	    });
	}
});