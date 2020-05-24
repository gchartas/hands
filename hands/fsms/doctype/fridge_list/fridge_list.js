// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fridge List', {
	fridge_type: function(frm){
	    if(cur_frm.doc.fridge_type=="Freezer"){
	        cur_frm.set_value("naming_series","F-");
	        cur_frm.set_value("temp",-18);
	    }
	    else if(cur_frm.doc.fridge_type=="Refrigerator"){
	        cur_frm.set_value("naming_series","R-");
	        cur_frm.set_value("temp",6);
	    }
	}
});