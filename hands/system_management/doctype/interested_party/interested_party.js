// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Interested Party', {
	validate: function(frm){
	    $.each(cur_frm.doc.risk_table || [], function(i, v){
	        if(v.risk_propability && v.risk_impact){
	            calculate_risk(v);
	        }
	        frappe.model.set_value(v.doctype, v.name, "ms", cur_frm.doc.management_system);
	        frappe.model.set_value(v.doctype, v.name, "department", cur_frm.doc.department);
	        frappe.model.set_value(v.doctype, v.name, "ro_type", "Interested Party");
	        frappe.model.set_value(v.doctype, v.name, "ro_source", cur_frm.doc.stakeholder);
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
