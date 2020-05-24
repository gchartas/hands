// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Receiving Goods', {
	now: function(frm){
	    cur_frm.set_value('time',moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
	    cur_frm.set_value('date',frappe.datetime.get_today());
	},
	supplier:function(frm){
	     cur_frm.set_query("purchase_order", function(){
	         return {
	             filters:{
	                 "supplier": cur_frm.doc.supplier
	             }
	         };
	     });
	},
	purchase_order:function(frm){
	    frappe.call({
	        "method": "frappe.client.get",
	        args:{
	            doctype:"Purchase Order",
	            name: frm.doc.purchase_order
	        },
	        callback: function(data){
	            frm.fields_dict.received_goods_details.grid.remove_all();
	            for (var i in data.message.items){
	                frm.add_child("received_goods_details");
	                frm.fields_dict.received_goods_details.get_value()[i].item = data.message.items[i].item_code;
	                frm.fields_dict.received_goods_details.get_value()[i].item_name = data.message.items[i].item_name;
	                frm.fields_dict.received_goods_details.get_value()[i].order_qty = data.message.items[i].qty;
	                frm.fields_dict.received_goods_details.get_value()[i].received_qty = data.message.items[i].qty;
	                
	                
	            }
	            cur_frm.save();
	        }
	        
	    });
	},
	before_submit:function(frm){
	    if(!frm.doc.employee_signature){
	        frappe.throw("Δεν μπορείς να ολοκληρώσεις χωρίς υπογραφή!");
	        frappe.validated = false;
	    }
	}
});