// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Incident Record', {
	now:function(frm){
	  cur_frm.set_value("date_completed", frappe.datetime.get_today());
	  cur_frm.set_value("time_completed", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));  
	},
	before_submit:function(frm){
	    if(!frm.doc.comp_signature){
	        frappe.throw("You cannot Submit without Signature");
	        frappe.validated = false;
	    }
	}
});