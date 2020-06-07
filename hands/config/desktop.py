# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
	    {
	        "module_name": "HandS App",
	        "color": "grey",
	        "icon": "octicon octicon-file-directory",
	        "type": "module",
	        "label": _("HandS App")
	    },
	    {
	        "module_name": "System Management",
	        "color": "grey",
	        "icon": "octicon octicon-star",
	        "type": "module",
	        "label": _("ISO Systems Management")
	    },
	    {
	        "module_name": "FSMS",
	        "color": "grey",
	        "icon": "fa fa-cutlery",
	        "type": "module",
	        "label": _("HACCP")
	    },	    
	    {
	        "module_name": "Occupational Health and Safety",
	        "color": "grey",
	        "icon": "fa fa-heartbeat",
	        "type": "module",
	        "label": _("OHS")
	    }
	    ]
