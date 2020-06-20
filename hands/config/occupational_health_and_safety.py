from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Employe HS"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Employee Daily Check",
                },
                {
                    "type": "doctype",
                    "name": "Employee Daily Check Template",
                },            
            ]
        },
        {"label": _("Incident Management"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Incident Record",
                },
            ]
        },
        {"label": _("PPE"),
            "items": [
                {
                    "type": "doctype",
                    "name": "PPE Handing",
                },
                {
                    "type": "doctype",
                    "name": "PPE Equipment",
                },
            ]
        },
        {"label": _("Training"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Personel Training",
                },
                {
                    "type": "doctype",
                    "name": "Personel Training Event",
                },
                {
                    "type": "doctype",
                    "name": "Personel Training Result",
                },
                {
                    "type": "doctype",
                    "name": "Personel Training Feedback",
                },
            ]
        },
        {"label": _("Visitor Questionnaire"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Visitors Questionnaire",
                },
                {
                    "type": "doctype",
                    "name": "Visitors Questionnaire Template",
                },
            ]
        },        
        ]
