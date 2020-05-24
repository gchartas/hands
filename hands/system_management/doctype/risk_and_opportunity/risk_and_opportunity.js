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
	likelihood:function(frm){
        if(cur_frm.doc.likelihood && cur_frm.doc.previous_occurances){
            calculate_propability(frm);
        }
    },
    previous_occurances:function(frm){
        if(cur_frm.doc.likelihood && cur_frm.doc.previous_occurances){
            calculate_propability(frm);
        }
    },
    loss: function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    inability:function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    health:function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    regulations:function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    reputation: function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    penalty:function(frm){
        if(cur_frm.doc.loss && cur_frm.doc.inability && cur_frm.doc.health && cur_frm.doc.regulations && cur_frm.doc.reputation && cur_frm.doc.penalty){
            calculate_impact(frm);
        }
    },
    detectability: function(frm){
        if(cur_frm.doc.detectability){
            calculate_detectability(frm);
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

var calculate_propability = function(frm){
    var p1 = 0;
    var p2 = 0;
    var prate = 0;
    switch(cur_frm.doc.likelihood){
        case "Cannot occur / not applicable": p1=1; break;
        case "Unlikely to occur": p1=2; break;
        case "Somewhat likely to occur": p1=3; break;
        case "Likely to occur": p1=4; break;
        case "Very likely to occur": p1=5;
    }
    switch(cur_frm.doc.previous_occurances){
        case "Has never occurred": p2=1; break;
        case "Has not occurred in past 10 years": p2=2; break;
        case "Has occurred in past 10 years": p2=3; break;
        case "Has occurred in past 5 years": p2=4; break;
        case "Has occurred in past year": p2=5;
    }
    prate = (p1+p2)/2;
    if(prate<=1.6){
        cur_frm.set_value("risk_propability", "Low");
    }
    else if (prate>1.6 && prate<=3.3){
        cur_frm.set_value("risk_propability", "Medium");
    }
    else if (prate>3.3){
        cur_frm.set_value("risk_propability", "High");
    }
    cur_frm.set_value("propability_rate", prate);
};

var calculate_impact=function(frm){
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    var i5 = 0;
    var i6 = 0;
    var irate = 0;
    switch(cur_frm.doc.loss){
        case "None / NA": i1=1; break;
        case "Minor": i1=2; break;
        case "Moderate": i1=3; break;
        case "High": i1=4; break;
        case "Very High":i1=5;
    }
    switch(cur_frm.doc.inability){
        case "None / NA": i2=1; break;
        case "Minor": i2=2; break;
        case "Moderate": i2=3; break;
        case "High": i2=4; break;
        case "Very High": i2=5;
    }
    switch(cur_frm.doc.health){
        case "None / NA": i3=1; break;
        case "Minor": i3=2; break;
        case "Moderate": i3=3; break;
        case "High": i3=4; break;
        case "Very High": i3=5;
    }
    switch(cur_frm.doc.regulations){
        case "None / NA": i4=1; break;
        case "Unlikely": i4=2; break;
        case "Possible": i4=3; break;
        case "Very likely": i4=4; break;
        case "Legal Risk": i4=5;
    }
    switch(cur_frm.doc.reputation){
        case "None": i5=1; break;
        case "Minimal": i5=2; break;
        case "Moderate": i5=3; break;
        case "Severe": i5=4; break;
        case "Very severe": i5=5;
    }
    switch(cur_frm.doc.penalty){
        case "€0 or N/A": i6=1; break;
        case "less than €10.000": i6=2; break;
        case "less than €100.000": i6=3; break;
        case "less than €500.000": i6=4; break;
        case "more than €500.000": i6=5;
    }
    irate= (i1+i2+i3+i4+i5+i6)/6;
    cur_frm.set_value("impact_rate",irate)
    if(irate<=1.6){
        cur_frm.set_value("risk_impact", "Low");
    }
    else if (irate>1.6 && irate<=3.3){
        cur_frm.set_value("risk_impact", "Medium");
    }
    else if (irate>3.3){
        cur_frm.set_value("risk_impact", "High");
    }
};
var calculate_detectability=function(frm){
    var d1=0;
    switch(cur_frm.doc.detectability){
        case "Always detected / NA": d1=1; break;
        case "Easy to detect": d1=2; break;
        case "Somewhat easy to detect": d1=3; break;
        case "Difficult to detect": d1=4; break;
        case "Impossible to detect": d1=5; 
    }
    cur_frm.set_value("detectability_rate",d1)
    
};