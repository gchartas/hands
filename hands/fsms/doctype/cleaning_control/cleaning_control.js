// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cleaning Control', {
	now:function(frm){
	    cur_frm.set_value("date", frappe.datetime.get_today());
	    cur_frm.set_value("time", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
	},
	template:function(frm){
	    frappe.call({
	        "method": "frappe.client.get",
	        args: {
	            doctype: "Cleaning Control Template",
	            name: cur_frm.doc.template
	        },
	        callback:function(data){
	            frm.fields_dict.parameters.grid.remove_all();
	            for (var i in data.message.parameters){
	                frm.add_child("parameters");
	                frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
	                frm.fields_dict.parameters.get_value()[i].check = data.message.parameters[i].parameter_check;
	            }
	            frm.refresh();
	        }
	    });
	},
	before_submit:function(frm){
	    if(!frm.doc.employee_signature){
	        frappe.throw("You Cannot Submit without Signature");
	        frappe.validated = false;
	    }
	}
});