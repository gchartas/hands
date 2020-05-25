// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fridge Temp Control', {
	now:function(frm,cdt,cdn){
	    cur_frm.set_value("date",frappe.datetime.get_today());
	    cur_frm.set_value("time",moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
	},
	before_submit:function(frm){
	    if(!frm.doc.employee_signature){
	        frappe.throw("You Cannot Submit without Signature");
	        frappe.validated = false;
	    }
	}	
});