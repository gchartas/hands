from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
	    {"label": _("Context"),
	        "items": [
	            {
	                "type": "doctype",
			"name": "Context of Organization",
			"description": _("Context of Organization "),
			"onboard": 1,
	            },
	            {
	                "type": "doctype",
			"name": "Interested Party",
			"description": _("Stakeholder or Interested Party"),
			"onboard": 1,
	            },
	            {
	                "type": "doctype",
			"name": "Issues",
			"description": _("Issues"),
			"onboard": 1,
	            },
	            {
	                "type": "doctype",
			"name": "Scope",
			"description": _("Scope"),
			"onboard": 1,
	            },
	            {
	                "type": "doctype",
			"name": "Lifecycle Management",
			"description": _("Lifecycle Management"),
			"onboard": 1,
	            },
	            {
	                "type": "doctype",
			"name": "Issue Types",
			"description": _("Issue Types"),
	            },
	        ]
	    },
	      {"label": _("Risks and Opportunities"),
	        "items": [
	            {
	                "type": "doctype",
	                "name": "Risk and Opportunity",
	                "description": _("Risk and Opportunity"),
	                "onboard": 1,
	            },
	            {
	                "type": "doctype",
	                "name": "Risk and Opportunity Type",
	                "description": _("Risk and Opportunity"),
	            },
	            {
	                "type": "doctype",
	                "name": "Risk Category",
	                "description": _("Risk and Opportunity"),
	            },
	            
	        ]
	      },
]
