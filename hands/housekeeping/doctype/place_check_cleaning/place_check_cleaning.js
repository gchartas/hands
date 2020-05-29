// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Place Check Cleaning', {
	start:function(frm){
	    cur_frm.set_value("date", frappe.datetime.get_today());
	    cur_frm.set_value("start_time", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
	},
	exit:function(frm){
	    cur_frm.set_value("exit_time", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
	},
	place:function(frm){
	    frappe.call({
	        "method": "frappe.client.get",
	        args: {
	            doctype: "Place Check Template",
	            name: cur_frm.doc.place
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