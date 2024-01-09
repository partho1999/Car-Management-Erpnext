from frappe import _

def get_data():
    return [
        {
            "label": _("Vehicle Management"),
            "icon": "fa fa-car",
            "items": [
                {
                    "type": "doctype",
                    "name": "Vehicle Details",
                    "label": _("Vehicle Details"),
                },
                
        },
    ]

