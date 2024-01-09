

from frappe import _

def get_data():
    return [
        {
            "label": _("Vehicle Management"),
            "icon": "icon-car",
            "items": [
                {
                    "type": "doctype",
                    "name": "Vehicle Details",
                    "label": _("Vehicle Details"),
                    "description": _("Form to manage vehicle details"),
                },
                {
                    "type": "doctype",
                    "name": "Vehicle Availability",
                    "label": _("Vehicle Availability"),
                    "description": _("Form to track vehicle availability"),
                },
                {
                    "type": "doctype",
                    "name": "Vehicle Price",
                    "label": _("Vehicle Price"),
                    "description": _("Form to manage vehicle pricing"),
                },
                {
                    "type": "report",
                    "name": "Vehicle Details Report",
                    "label": _("Vehicle Details Report"),
                    "doctype": "Vehicle Details",
                    "is_query_report": True,
                }
            ]
        }
    ]

