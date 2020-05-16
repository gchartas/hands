from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Daily Schedule"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Fridge Temp Control",
                },
                {
                    "type": "doctype",
                    "name": "Receiving Goods Test",
                    "label": "Receiving Goods"
                },
                {
                    "type": "doctype",
                    "name": "Place Check",
                    "label": "Clean Check",
                },
                
            ]
        },
        {"label": _("Setting Up"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Raw Material",
                },
                {
                    "type": "doctype",
                    "name": "Product",
                },
                {
                    "type": "doctype",
                    "name": "Recipe",
                },
                {
                    "type": "doctype",
                    "name": "Place Template",
                    "label": "Clean Check Template",
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
                },
            ]
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
            ]
        },
    ]
