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
	    if(cur_frm.doc.place && cur_frm.doc.type_of_cleaning){
	        get_parameters(frm);
	    }
	},
	type_of_cleaning:function(frm){
	    if(cur_frm.doc.place && cur_frm.doc.type_of_cleaning){
	        get_parameters(frm);
	    }
	},
	before_submit:function(frm){
	    if(!frm.doc.employee_signature){
	        frappe.throw("You Cannot Submit without Signature");
	        frappe.validated = false;
	    }
	}
});

var get_parameters = function(frm){
    frappe.call({
	        "method": "frappe.client.get",
	        args: {
	            doctype: "Place Check Template",
	            name: cur_frm.doc.place
	        },
	        callback:function(data){
	            cur_frm.fields_dict.parameters.grid.remove_all();
	            for (var i in data.message.parameters){
	                frm.add_child("parameters");
	                frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
	                if(cur_frm.doc.type_of_cleaning=="Stay"){
	                    frm.fields_dict.parameters.get_value()[i].check = data.message.parameters[i].daily;
	                }
	                else if(cur_frm.doc.type_of_cleaning=="Switch"){
	                    frm.fields_dict.parameters.get_value()[i].check = data.message.parameters[i].switch;
	                }
	                else if(cur_frm.doc.type_of_cleaning=="Departure"){
	                    frm.fields_dict.parameters.get_value()[i].check = data.message.parameters[i].departure;
	                }
	                else if(cur_frm.doc.type_of_cleaning=="Forbidden"){
	                    frm.fields_dict.parameters.get_value()[i].check = 0;
	                }
	                else if(cur_frm.doc.type_of_cleaning=="Disinfection"){
	                    frm.fields_dict.parameters.get_value()[i].check = 1;
	                }
	            }
	            frm.refresh();
	        }
	    });
};