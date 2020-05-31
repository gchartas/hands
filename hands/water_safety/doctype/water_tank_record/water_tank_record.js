// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Water Tank Record', {
	now:function(frm){
      cur_frm.set_value("date",frappe.datetime.get_today());
      cur_frm.set_value("time",moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
    },
    height:function(frm){
        var vol;
        vol=(cur_frm.doc.height/cur_frm.doc.max_height)*cur_frm.doc.water_tank_volume;
        cur_frm.set_value("volume",vol);
    },
    add_chlorine:function(frm){
        if(frm.doc.volume){
            var chlor;
            chlor=cur_frm.doc.volume*(cur_frm.doc.ideal_free_chlorine-cur_frm.doc.free_chlorine)*cur_frm.doc.coefficient;
            cur_frm.set_value("chlorine_addition",chlor);
        }
    }
});