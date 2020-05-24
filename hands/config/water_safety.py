from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {"label": _("Pool"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Pool Record",
                },
                {
                    "type": "doctype",
                    "name": "Pool",
                },
                {
                    "type": "doctype",
                    "name": "Chemicals",
                    "label": "Water Chemicals",
                },
            ]
        },
    ]

