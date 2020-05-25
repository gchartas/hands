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
	},
	
    validate: function(frm){
        if(cur_frm.doc.propability_rate && cur_frm.doc.impact_rate && cur_frm.doc.detectability_rate){
            cur_frm.set_value("risk_factor",cur_frm.doc.propability_rate*cur_frm.doc.impact_rate*cur_frm.doc.detectability_rate);
        }
        if(cur_frm.doc.risk_factor<=20 && cur_frm.doc.detectability){
            cur_frm.set_value("risk_rate","Low");
        }
        else if (cur_frm.doc.risk_factor>20 && cur_frm.doc.risk_factor <=35 && cur_frm.doc.detectability){
            cur_frm.set_value("risk_rate","Medium");
        }
        else if (cur_frm.doc.risk_factor>35 && cur_frm.doc.detectability){
            cur_frm.set_value("risk_rate","High");
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

