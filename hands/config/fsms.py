from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Daily Schedule"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Cleaning Control",
                },
                {
                    "type": "doctype",
                    "name": "Fridge Temp Control",
                },
                {
                    "type": "doctype",
                    "name": "Deep Fryer Oil Change",
                },
                {
                    "type": "doctype",
                    "name": "Receiving Goods",
                },
                {
                    "type": "doctype",
                    "name": "Reheating Control",
                },

            ]
        },
        {"label": _("Items and Purchase"),
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
                    "name": "Receiving Goods",
                },
                {
                    "type": "doctype",
                    "name": "Raw Material",
                },
                {
                    "type": "doctype",
                    "name": "FSMS Chemicals",
                },
                
            ]
        },
        {"label": _("Setting Up"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Cleaning Control Template",
                },
                {
                    "type": "doctype",
                    "name": "Fridge List",
                },
                {
                    "type": "doctype",
                    "name": "Deep Fryer",
                },
                {
                    "type": "doctype",
                    "name": "Product",
                },
                {
                    "type": "doctype",
                    "name": "Recipe",
                },
            ]
        },
        {"label": _("FSMS Plan"),
            "items": [
                {
                    "type": "doctype",
                    "name": "HACCP Process",
                },
                {
                    "type": "doctype",
                    "name": "HACCP Plan",
                },
                {
                    "type": "doctype",
                },
            ]
        },
        {"label": _("Employee Health Check"),
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
    ]
