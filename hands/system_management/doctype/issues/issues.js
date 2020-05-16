// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Issues', {
	ms: function(frm,cdt,cdn){
	    cur_frm.set_query("issue_type", function(){
	        return {
	            filters:{
	                "system": cur_frm.doc.ms
	            }
	        };
	    });
	},
	validate: function(frm){
	    $.each(cur_frm.doc.risk_table || [], function(i, v){
	        if(v.risk_propability && v.risk_impact){
	            calculate_risk(v);
	        }
	        frappe.model.set_value(v.doctype, v.name, "ms", cur_frm.doc.ms);
	        frappe.model.set_value(v.doctype, v.name, "department", cur_frm.doc.department);
	        frappe.model.set_value(v.doctype, v.name, "ro_type", cur_frm.doc.type);
	        frappe.model.set_value(v.doctype, v.name, "ro_source", cur_frm.doc.reason);
	    });
	}
});

var calculate_risk = function(v){
    var risk=null;
    if(v.risk_propability=="Low" && v.risk_impact=="Low"){
        risk="Low";
    }
    else if(v.risk_propability=="Medium" && v.risk_impact=="Low"){
        risk="Low";
    }
    else if(v.risk_propability=="High" && v.risk_impact=="Low"){
        risk="Medium";
    }
    else if(v.risk_propability=="Low" && v.risk_impact=="Medium"){
        risk="Low";
    }
    else if(v.risk_propability=="Medium" && v.risk_impact=="Medium"){
        risk="Medium";
    }
    else if(v.risk_propability=="High" && v.risk_impact=="Medium"){
        risk="High";
    }
    else if(v.risk_propability=="Low" && v.risk_impact=="High"){
        risk="Medium";
    }
    else if(v.risk_propability=="Medium" && v.risk_impact=="High"){
        risk="High";
    }
    else if(v.risk_propability=="High" && v.risk_impact=="High"){
        risk="High";
    }
    frappe.model.set_value(v.doctype, v.name, "risk_rate", risk);
} ;
