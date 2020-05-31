// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pool', {
	pool_volume: function(frm){
	    if(frm.doc.pool_volume && frm.doc.pool_storage){
	        calculate_total(frm);
	    }
	},
	pool_storage:function(frm){
	    if(frm.doc.pool_volume && frm.doc.pool_storage){
	        calculate_total(frm);
	    }
	}
});

var calculate_total = function(frm){
    var total_volume;
    total_volume = frm.doc.pool_volume + frm.doc.pool_storage;
    cur_frm.set_value("total_volume",total_volume);
    
};