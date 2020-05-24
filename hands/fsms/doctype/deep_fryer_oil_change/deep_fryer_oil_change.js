// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Deep Fryer Oil Change', {
    now:function(frm){
        cur_frm.set_value("date", frappe.datetime.get_today());
        cur_frm.set_value("next_change", frappe.datetime.add_days(cur_frm.doc.date, cur_frm.doc.days));
    },
    before_submit:function(frm){
        if(!frm.doc.employee_signature){
            frappe.throw("Δεν μπορείς να ολοκληρώσεις χωρίς υπογραφή!");
            frappe.validated = false;
        }
    }
});