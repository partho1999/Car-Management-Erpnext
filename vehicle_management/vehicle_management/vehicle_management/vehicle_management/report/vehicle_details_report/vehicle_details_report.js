

frappe.query_reports["Vehicle Details Report"] = {
    "filters": [
        {
            "fieldname": "chassis_no",
            "fieldtype": "Data",
            "label": "Chassis No"
        },
        {
            "fieldname": "car_model",
            "fieldtype": "Link",
            "options": "Car Model",
            "label": "Car Model"
        },
        {
            "fieldname": "model_year",
            "fieldtype": "Link",
            "options": "Model Year",
            "label": "Model Year"
        },
        {
            "fieldname": "auction_grade",
            "fieldtype": "Link",
            "options": "Auction Grade",
            "label": "Auction Grade"
        },
        {
            "fieldname": "color",
            "fieldtype": "Link",
            "options": "Color",
            "label": "Color"
        },
        {
            "fieldname": "vehicle_status",
            "fieldtype": "Data",
            "label": "Vehicle Status"
        }
    ]
};

