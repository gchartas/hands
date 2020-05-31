// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pool Record', {
    now:function(frm){
      cur_frm.set_value("date",frappe.datetime.get_today());
      cur_frm.set_value("time",moment(frappe.datetime.now_datetime()).format("HH:mm:ss"));
    },
    mode:function(frm){
        if(frm.doc.mode=="Superchlorination"){
            cur_frm.set_value("pool_free_chlorine",10);
            
        }
    },
    ph:function(frm){
        if(frm.doc.ph>7.6){
            cur_frm.fields_dict["ph_minus_column"].collapse(0);
        }
        else if(frm.doc.ph<7.2){
            cur_frm.fields_dict["ph_plus_column"].collapse(0);
        }
    },
    free_chlorine:function(frm){
        if(frm.doc.free_chlorine<=1.2){
            cur_frm.fields_dict["chemicals_section"].collapse(0);
        }
    },
    algae:function(frm){
        if(frm.doc.alge!="None"){
            cur_frm.fields_dict["algecide_column"].collapse(0);
        }
    },
    turbidity:function(frm){
        if(frm.doc.turbidity!="Clear"){
            cur_frm.fields_dict["flocculation_column"].collapse(0);
        }
    },
	add_chlorine:function(frm){
	    if(frm.doc.pool_free_chlorine>frm.doc.free_chlorine && frm.doc.chlorine){
	        var chlorine =0;
	        chlorine = frm.doc.pool_total_volume*(frm.doc.pool_free_chlorine - frm.doc.free_chlorine)*frm.doc.concentration;
	        //alert(chlorine);
	        cur_frm.set_value("chlor_addition",chlorine);
	    }
	},
	add_algecide:function(frm){
	    if(frm.doc.algecide){
	        var algecide;
	        algecide = frm.doc.pool_total_volume*frm.doc.coefficient_algecide;
	        cur_frm.set_value("algecide_addition",algecide);
	    }
	},
	add_ph_minus:function(frm){
	    if(frm.doc.ph>=frm.doc.pool_ph && frm.doc.acid){
	        //alert("Annoula is the Best");
	        var ph_minus = 0;
	        ph_minus = (frm.doc.ph-frm.doc.pool_ph)*frm.doc.pool_total_volume*frm.doc.coefficient_ph_minus;
	        //alert(ph_minus);
	        cur_frm.set_value("ph_minus_addition",ph_minus);
	    }
	},
	add_ph_plus:function(frm){
	    if(frm.doc.ph<=frm.doc.pool_ph && frm.doc.base){
	        //alert("Annoula is the Best");
	        var ph_plus = 0;
	        ph_plus = (frm.doc.pool_ph-frm.doc.ph)*frm.doc.pool_total_volume*frm.doc.coefficient_ph_plus;
	        //alert(ph_plus);
	        cur_frm.set_value("ph_plus_addition",ph_plus);
	    }
	},
	add_flocculant:function(frm){
	    if(frm.doc.floculant){
	        var floc;
	        floc = frm.doc.pool_total_volume*frm.doc.coefficient_flocculant;
	        cur_frm.set_value("flocculant_addition",floc);
	    }
	},
	add_dis_2: function(frm){
	    if(frm.doc.pool_copper>=frm.doc.copper && frm.doc.disinfectant_2){
	        var cop;
	        cop = frm.doc.pool_total_volume*(frm.doc.pool_copper-frm.doc.copper)*frm.doc.coefficient_disinfectant_2;
	        cur_frm.set_value("dis_2_addition",cop);
	    }
	},
	validate:function(frm){
	    if(frm.doc.free_chlorine<=1 && !frm.doc.chlor_addition){
	        alert("Πρέπει να Προσθέσεις Χλώριο");
	    }
	    if(frm.doc.ph<7 && !frm.doc.ph_plus_addition){
	        alert("Πρέπει να Ανεβάσεις το pH");
	    }
	    if(frm.doc.ph>7.8 && !frm.doc.ph_minus_addition){
	        alert("Πρέπει να Ανεβάσεις το pH");
	    }
	}
});