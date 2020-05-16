// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Feedback', {
    refresh: function(frm) {
		frm.set_value("date", frappe.datetime.get_today());
    
	},
	template:function(frm){
	    frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Customer Feedback Template",
				name: frm.doc.template
			},
			callback: function(data){
				frm.fields_dict.parameters.grid.remove_all();
				for (var i in data.message.parameters){
					frm.add_child("parameters");
					frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
					frm.fields_dict.parameters.get_value()[i].weight = data.message.parameters[i].weight;
					
				}
				frm.refresh();
			}
		});
	},
	validate: function(frm){
	    var sw=0;
	    var sxw=0;
	    var grade=null;
	    var score=0;
	    $.each(frm.doc.parameters ||[], function(i,d) {
	        sxw = sxw + flt(d.rating)*d.weight;
	        sw = sw + d.weight;
	    });
	    score = 100*sxw/(4*sw);
	    cur_frm.set_value("score",score);
	    if(score<=20){
	        grade="D";
	    }
	    else if (score >20 && score<=50){
	        grade="C";
	    }
	    else if (score >50 && score<=80){
	        grade="B";
	    }
	    else if (score >80 && score<=95){
	        grade="A";
	    }
	    else if (score >95){
	        grade="A+";
	    }
	    cur_frm.set_value("grade",grade);
	}
});