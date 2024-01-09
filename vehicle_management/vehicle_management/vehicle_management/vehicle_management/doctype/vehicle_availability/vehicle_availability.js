

frappe.ui.form.on('Vehicle Availability', {
    refresh: function(frm) {
        frm.fields_dict['chassis_number'].get_query = function(doc) {
            return {
                filters: {
                    
                }
            };
        };
    },
    vehicle_chassis_no: function(frm) {
        frappe.call({
                    method:"vehicle_management.vehicle_management.doctype.vehicle_availability.vehicle_availability.get_vehicle_info",
            args: {
                chassis_no: frm.doc.chassis_number
            },
            callback: function(r) {
                if (r.message) {
                    frm.set_value('car_model', r.message.vehicle_name);
                    frm.set_value('model_year', r.message.model_year);
                    frm.set_value('shape', r.message.shape);
                    frm.set_value('auction_grade', r.message.auction_grade);
                    frm.set_value('color', r.message.color);
                    frm.set_value('mileage', r.message.mileage);
                    frm.set_value('cc', r.message.cc);
                    frm.set_value('description', r.message.description);
                }
            }
        });
    }
});



frappe.ui.form.on('Vehicle Availability', {
    refresh: function(frm) {
        frm.fields_dict['status'].get_query = function(doc) {
            return {
                filters: {
                    // Add any additional filters if needed
                }
            };
        };
    },
    status: function(frm) {
        refresh_status_fields(frm);
    }
});

function refresh_status_fields(frm) {
    var status = frm.doc.status;

    frm.toggle_display('port_location', status === 'Port');
    frm.toggle_display('shed_number', status === 'Port');

    frm.toggle_display('ship_details', status === 'Onship');
    
    frm.toggle_display('in_house_address', status === 'Inhouse');

    frm.toggle_display('workshop_address', status === 'Workshop');

    frm.toggle_display('other_details', status === 'Other');
}
