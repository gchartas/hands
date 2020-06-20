// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Visitors Questionnaire', {
    start:function(frm){
        cur_frm.set_value("start_time", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
    },
    finish:function(frm){
        cur_frm.set_value("finish_time", moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
    },
    visitor_name:function(frm){
        cur_frm.set_value("template", "Covid-19");
    },
    template:function(frm){
	    frappe.call({
	        "method": "frappe.client.get",
	        args: {
	            doctype: "Visitors Questionnaire Template",
	            name: cur_frm.doc.template
	        },
	        callback:function(data){
	            frm.fields_dict.parameters.grid.remove_all();
	            for (var i in data.message.parameters){
	                frm.add_child("parameters");
	                frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
	            }
	            frm.refresh();
	        }
	    });
	},
});