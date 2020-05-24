// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Recipe', {
	validate:function(frm,cdt,cdn){
	    var peanut_check =null;
	    var tree_nuts_check =null;
	    var milk_check =null;
	    var eggs_check =null;
	    var wheat_check =null;
	    var sesame_check =null;
	    var fish_check =null;
	    var crustacens_check =null;
	    var molluscs_check =null;
	    var mustard_check =null;
	    var soya_check =null;
	    var sulphur_dioxide_check =null;
	    var lupin_check =null;
	    var celery_check =null;
	    $.each(cur_frm.doc.raw_materials || [], function(i, v){
	       if(v.peanut=="Contain"){
	           peanut_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.peanut=="May Contain" && peanut_check !="Contain"){
	           peanut_check="May Contain";
	       }
	       if(v.tree_nuts=="Contain"){
	           tree_nuts_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.tree_nuts=="May Contain" && tree_nuts_check !="Contain"){
	           tree_nuts_check="May Contain";
	       }
	       if(v.milk=="Contain"){
	           milk_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.milk=="May Contain" && milk_check !="Contain"){
	           milk_check="May Contain";
	       }
	       if(v.eggs=="Contain"){
	           eggs_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.eggs=="May Contain" && eggs_check !="Contain"){
	           eggs_check="May Contain";
	       }
	       if(v.wheat=="Contain"){
	           wheat_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.wheat=="May Contain" && wheat_check !="Contain"){
	           wheat_check="May Contain";
	       }
	       if(v.sesame=="Contain"){
	           sesame_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.sesame=="May Contain" && sesame_check !="Contain"){
	           sesame_check="May Contain";
	       }
	       if(v.fish=="Contain"){
	           fish_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.fish=="May Contain" && fish_check !="Contain"){
	           fish_check="May Contain";
	       }
	       if(v.crustacens=="Contain"){
	           crustacens_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.crustacens=="May Contain" && crustacens_check !="Contain"){
	           crustacens_check="May Contain";
	       }
	       if(v.molluscs=="Contain"){
	           molluscs_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.molluscs=="May Contain" && molluscs_check !="Contain"){
	           molluscs_check="May Contain";
	       }
	       if(v.mustard=="Contain"){
	           mustard_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.mustard=="May Contain" && mustard_check !="Contain"){
	           mustard_check="May Contain";
	       }
	       if(v.soya=="Contain"){
	           soya_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.soya=="May Contain" && soya_check !="Contain"){
	           soya_check="May Contain";
	       }
	       if(v.sulphur_dioxide=="Contain"){
	           sulphur_dioxide_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.sulphur_dioxide=="May Contain" && sulphur_dioxide_check !="Contain"){
	           sulphur_dioxide_check="May Contain";
	       }
	       if(v.lupin=="Contain"){
	           lupin_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.lupin=="May Contain" && lupin_check !="Contain"){
	           lupin_check="May Contain";
	       }
	       if(v.celery=="Contain"){
	           celery_check="Contain";
	           //alert("I Love Pastitsio");
	       }
	      else if (v.celery=="May Contain" && celery_check !="Contain"){
	           celery_check="May Contain";
	       }
	    });
	    cur_frm.set_value("peanut",peanut_check);
	    cur_frm.set_value("tree_nuts",tree_nuts_check);
	    cur_frm.set_value("milk",milk_check);
	    cur_frm.set_value("eggs",eggs_check);
	    cur_frm.set_value("wheat",wheat_check);
	    cur_frm.set_value("sesame",sesame_check);
	    cur_frm.set_value("fish",fish_check);
	    cur_frm.set_value("crustacens",crustacens_check);
	    cur_frm.set_value("molluscs",molluscs_check);
	    cur_frm.set_value("mustard",mustard_check);
	    cur_frm.set_value("soya",soya_check);
	    cur_frm.set_value("sulphur_dioxide",sulphur_dioxide_check);
	    cur_frm.set_value("lupin",lupin_check);
	    cur_frm.set_value("celery",celery_check);
	    
	    //alert("I Love Pastitsio")
	    
	    
	    
	    
	}
});