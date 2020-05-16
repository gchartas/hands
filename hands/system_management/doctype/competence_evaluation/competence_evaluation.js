// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Competence Evaluation', {
	employee:function(frm){
	    //alert("I love Annoula!");
	   
	   frappe.call({
	       "method": "frappe.client.get",
	       args:{
	           doctype: "Ideal Competence",
	           name: frm.doc.employee_designation
	       },
	       callback: function(data){
	           frm.fields_dict.comp_evalution_details.grid.remove_all();
	           for (var i in data.message.ideal_comp_details){
	               frm.add_child("comp_evalution_details");
	               frm.fields_dict.comp_evalution_details.get_value()[i].competence_type= data.message.ideal_comp_details[i].competence_type;
	               frm.fields_dict.comp_evalution_details.get_value()[i].description= data.message.ideal_comp_details[i].description;
	               frm.fields_dict.comp_evalution_details.get_value()[i].ideal_value= data.message.ideal_comp_details[i].ideal_value;
	               frm.fields_dict.comp_evalution_details.get_value()[i].weight= data.message.ideal_comp_details[i].weight;
	           }
	           frm.refresh();
	       }
	   });
	   
	   //alert("Annoula is the Best");
	    
	},
	validate: function(frm){
	    var sw=0;
	    var swx=0;
	    var wx=0;
	    var x=0;
	    $.each(frm.doc.comp_evalution_details ||[], function(i,d) {
	        wx= d.weight*(d.current_value-d.ideal_value)/(10-d.ideal_value);
	        swx= swx + wx;
	        sw=sw+d.weight;
	    });
	    x=100*swx/sw;
	    cur_frm.set_value("score",x);
	    var grade=null;
	    if(x<0){
	        grade="F";
	    }
	    else if (x>=0 && x<20){
	        grade="D";
	    }
	    else if (x>=20 && x<40){
	        grade="C";
	    }
	    else if (x>=40 && x<60){
	        grade="B";
	    }
	    else if (x>=60 && x<80){
	        grade="A";
	    }
	    else if (x>=80){
	        grade="A+";
	    }
	    cur_frm.set_value("grade",grade);
	},
	date: function(frm){
	    cur_frm.set_value("next_date", frappe.datetime.add_days(cur_frm.doc.date, 365));
	}
});