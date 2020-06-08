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
	        "label": _("Systems Management")
	    },
	    {
	        "module_name": "FSMS",
	        "color": "grey",
	        "icon": "fa fa-cutlery",
	        "type": "module",
	        "label": _("HACCP")
	    },
	    {
	        "module_name": "Housekeeping",
	        "color": "grey",
	        "icon": "octicon octicon-home",
	        "type": "module",
	        "label": _("Housekeeping")
	    },
	    {
	        "module_name": "Water Safety",
	        "color": "grey",
	        "icon": "octicon octicon-git-branch",
	        "type": "module",
	        "label": _("Water Management")
	    },	
	    {
	        "module_name": "Occupational Health and Safety",
	        "color": "grey",
	        "icon": "fa fa-heartbeat",
	        "type": "module",
	        "label": _("OHS")
	    },
	    {
	        "module_name": "Audit",
	        "color": "grey",
	        "icon": "octicon octicon-eye",
	        "type": "module",
	        "label": _("Audit")
	    }
	    ]
