// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Asset Calibration', {
    calibration_template: function(frm){
        frappe.call({
            "method": "frappe.client.get",
			args: {
				doctype: "Asset Calibration Template",
				name: frm.doc.calibration_template
			},
			callback: function(data){
				frm.fields_dict.parameters.grid.remove_all();
				for (var i in data.message.parameters){
					frm.add_child("parameters");
					frm.fields_dict.parameters.get_value()[i].parameter = data.message.parameters[i].parameter;
					frm.fields_dict.parameters.get_value()[i].uom = data.message.parameters[i].uom;
					frm.fields_dict.parameters.get_value()[i].ideal_value = data.message.parameters[i].ideal_value;
					frm.fields_dict.parameters.get_value()[i].tolerance = data.message.parameters[i].tolerance;
					
				}
				frm.refresh();
			}
        });
    },
    validate: function(frm){
        var days = 0;
        var d = flt(cur_frm.doc.calibration_frequency_no);
        //alert(d);
        if (cur_frm.doc.calibration_frequency=="Weekly"){
            days = 7/d;
        }
        else if (cur_frm.doc.calibration_frequency=="Monthly"){
            days = 30/d;
        }
        else if (cur_frm.doc.calibration_frequency=="Yearly"){
            days = 365/d;
        }
        cur_frm.set_value("next_calibration", frappe.datetime.add_days(cur_frm.doc.date, days));
        var x1=0;
        var x2=0;
        var x3=0;
        var pass=null;
        $.each(frm.doc.parameters ||[], function(i,u) {
            x1=Math.abs(u.value_1-u.ideal_value);
            x2=Math.abs(u.value_2-u.ideal_value);
            x3=Math.abs(u.value_3-u.ideal_value);
            if(x1<=u.tolerance && x2<=u.tolerance && x3<=u.tolerance){
                frappe.model.set_value(u.doctype, u.name, "status", "Pass");
            }
            else{
                frappe.model.set_value(u.doctype, u.name, "status", "Fail");
                pass = "Fail";
            }
        });
        if(pass=="Fail"){
            cur_frm.set_value("cal_status","Fail");
        }
        else {
            cur_frm.set_value("cal_status","Pass");
        }
    },
    before_submit:function(frm){
        if(!frm.doc.employee_signature){
            frappe.throw("You Cannot Submit without Employee Signature");
            frappe.validated = false;
        }
    },
    responsible_party:function(frm){
        if(frm.doc.responsibility=="Employee"){
            frappe.call({
                "method": "frappe.client.get",
                args: {
                    doctype: "Employee",
                    name: frm.doc.responsible_party
                },
                callback:function (data) {
                    cur_frm.set_value("employee_name", data.message.employee_name );
                    //alert("I Love Annoula");
                }
            });
        }
        else if (frm.doc.responsibility=="Supplier"){
            frappe.call({
                "method": "frappe.client.get",
                args: {
                    doctype: "Supplier",
                    name: frm.doc.responsible_party
                },
                callback:function (data) {
                    cur_frm.set_value("supplier_name", data.message.supplier_name );
                    //alert("I Love Annoula");
                }
            });
        }
    }
    
});
