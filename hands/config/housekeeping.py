from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Housekeeping Check"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Place Check Cleaning",
                },
            ]
        },
        {"label": _("Housekeeping Setup"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Place Check Template",
                },
                {
                    "type": "doctype",
                    "name": "Housekeeping Chemicals",
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
