from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Records"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Pool Record",
                },
                {
                    "type": "doctype",
                    "name": "Water Tank Record",
                },
            ]
        },
        {"label": _("Setup"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Pool",
                },
                {
                    "type": "doctype",
                    "name": "Water Tank",
                },
                {
                    "type": "doctype",
                    "name": "Chemicals",
                    "label": "Water Chemicals",
                },
            ]
        },
        {"label": _("Laboratory"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Testing Records",
                },
            ]
        },
    ]
