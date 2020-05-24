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
        {"label": _("HR"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Department",
                },
                {
                    "type": "doctype",
                    "name": "Designation",
                },
                {
                    "type": "doctype",
                    "name": "Employee",
                    "onboard": 1,
                },
                {
                    "type": "doctype",
                    "name": "Ideal Competence",
                },
                {
                    "type": "doctype",
                    "name": "Competence Evaluation",
                    "label": "Competence and Evaluation"
                },
                {
                    "type": "doctype",
                    "name": "Teams",
                    "label": "Teams"
                },

            ]
        },
        {"label": _("Training"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Training Program",
                },
                {
                    "type": "doctype",
                    "name": "Training Event",
                },
                {
                    "type": "doctype",
                    "name": "Training Result",
                },
                {
                    "type": "doctype",
                    "name": "Training Feedback",
                },
            ]
        },
        {"label": _("Marketing"),
        
            "items": [
                {
                    "type": "doctype",
                    "name": "Lead",
                },
                {
                    "type": "doctype",
                    "name": "Customer Feedback",
                },
                {
                    "type": "doctype",
                    "name": "Customer Feedback Template",
                },
                {
                    "type": "doctype",
                    "name": "Complaints",
                },
            ]
        },
        {"label": _("Purchase"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Supplier",
                },
                {
                    "type": "doctype",
                    "name": "Purchase Order",
                },
                {
                    "type": "doctype",
                    "name": "Supplier Evaluation",
                },
                {
                    "type": "doctype",
                    "name": "Supplier Evaluation Template",
                },]
        },
        {"label": _("Process"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Process Identification",
                },
                ]
        },
        {"label": _("Assets and Equipment"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Assets",
                },
                {
                    "type": "doctype",
                    "name": "Asset Calibration",
                },
                {
                    "type": "doctype",
                    "name": "Asset Calibration Template",
                },
                {
                    "type": "doctype",
                    "name": "Assets Maintenance",
                },
                ]
        },
        {"label": _("Policies and Objectives"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Policy",
                },
                {
                    "type": "doctype",
                    "name": "Objective",
                },
                {
                    "type": "doctype",
                    "name": "Manual",
                },]
        },
        {"label": _("Documented Information"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Procedure",
                },
                {
                    "type": "doctype",
                    "name": "Forms",
                },
                {
                    "type": "doctype",
                    "name": "External Documents",
                },
                {
                    "type": "doctype",
                    "name": "WD",
                    "label": "Work Directive",
                },
]
        },
    ]
