// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Risk and Opportunity', {
	risk_propability: function(frm){
	    if(cur_frm.doc.risk_propability && cur_frm.doc.risk_impact){
	        calculate_risk(frm);
	    }
	},
	risk_impact: function(frm){
	    if(cur_frm.doc.risk_propability && cur_frm.doc.risk_impact){
	        calculate_risk(frm);
	    }
	}
});

var calculate_risk = function(frm){
    var risk=null;
    if(cur_frm.doc.risk_propability=="Low" && cur_frm.doc.risk_impact=="Low"){
        risk="Low";
    }
    else if(cur_frm.doc.risk_propability=="Medium" && cur_frm.doc.risk_impact=="Low"){
        risk="Low";
    }
    else if(cur_frm.doc.risk_propability=="High" && cur_frm.doc.risk_impact=="Low"){
        risk="Medium";
    }
    else if(cur_frm.doc.risk_propability=="Low" && cur_frm.doc.risk_impact=="Medium"){
        risk="Low";
    }
    else if(cur_frm.doc.risk_propability=="Medium" && cur_frm.doc.risk_impact=="Medium"){
        risk="Medium";
    }
    else if(cur_frm.doc.risk_propability=="High" && cur_frm.doc.risk_impact=="Medium"){
        risk="High";
    }
    else if(cur_frm.doc.risk_propability=="Low" && cur_frm.doc.risk_impact=="High"){
        risk="Medium";
    }
    else if(cur_frm.doc.risk_propability=="Medium" && cur_frm.doc.risk_impact=="High"){
        risk="High";
    }
    else if(cur_frm.doc.risk_propability=="High" && cur_frm.doc.risk_impact=="High"){
        risk="High";
    }
    frappe.model.set_value(cur_frm.doctype,cur_frm.docname,"risk_rate",risk);
} ;