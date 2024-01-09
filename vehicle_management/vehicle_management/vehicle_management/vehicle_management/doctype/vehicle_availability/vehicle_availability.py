import frappe

@frappe.whitelist()
def get_vehicle_info(chassis_number):
    vehicle_info = frappe.get_doc("Vehicle Details", chassis_number)
    return {
        "vehicle_name": vehicle_info.car_model,
        "model_year": vehicle_info.model_year,
        "shape": vehicle_info.shape,
        "auction_grade": vehicle_info.auction_grade,
        "color": vehicle_info.color,
        "mileage": vehicle_info.mileage,
        "cc": vehicle_info.cc,
        "description": vehicle_info.description
    }

