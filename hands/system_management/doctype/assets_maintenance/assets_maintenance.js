// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assets Maintenance', {
	validate: function(frm){
        var days = 0;
        var d = flt(cur_frm.doc.maintenance_frequency_no);
        //alert(d);
        if (cur_frm.doc.maintenance_frequency=="Weekly"){
            days = 7/d;
        }
        else if (cur_frm.doc.maintenance_frequency=="Monthly"){
            days = 30/d;
        }
        else if (cur_frm.doc.maintenance_frequency=="Yearly"){
            days = 365/d;
        }
        cur_frm.set_value("next_date", frappe.datetime.add_days(cur_frm.doc.date, days));
	}
});