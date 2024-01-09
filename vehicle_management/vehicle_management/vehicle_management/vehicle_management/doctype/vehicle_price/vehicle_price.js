

frappe.ui.form.on('Vehicle Price', {
    refresh: function(frm) {
        frm.fields_dict['chassis_number'].get_query = function(doc) {
            return {
                filters: {
       
                }
            };
        };

        frm.fields_dict['other_vehicle_items'].grid.get_field('item').get_query = function(doc, cdt, cdn) {
            var row = locals[cdt][cdn];
            return {
                filters: {
                    // Add any additional filters if needed
                }
            };
        };
    },
    vehicle_chassis_no: function(frm) {
        refresh_vehicle_info(frm);
    },
    company_price: function(frm) {
        calculate_sale_price(frm);
    },
    customer_price: function(frm) {
        calculate_sale_price(frm);
    },
    other_vehicle_items_add: function(frm) {
        frm.fields_dict['other_vehicle_items'].grid.get_field('item').get_query = function(doc, cdt, cdn) {
            var row = locals[cdt][cdn];
            var existing_items = frm.doc.other_vehicle_items.map(item => item.item);
            return {
                filters: {
                    name: ['not in', existing_items]
                }
            };
        };
    },
    other_vehicle_items_remove: function(frm) {
        calculate_totals(frm);
    }
});

function refresh_vehicle_info(frm) {
    // Fetch and display vehicle information based on the selected chassis number
    // You can implement this based on your requirements
}

function calculate_sale_price(frm) {
    frm.set_value('sale_price', frm.doc.company_price + frm.doc.customer_price);
    calculate_grand_total(frm);
}

function calculate_amount(frm, cdt, cdn) {
    var row = locals[cdt][cdn];
    row.amount = row.quantity * row.rate;
    frm.refresh_field('other_vehicle_items');
    calculate_totals(frm);
}

function calculate_totals(frm) {
    var total_quantity = 0;
    var total_amount = 0;

    frm.doc.other_vehicle_items.forEach(function(row) {
        total_quantity += row.quantity;
        total_amount += row.amount;
    });

    frm.set_value('total_quantity', total_quantity);
    frm.set_value('total_amount', total_amount);
    calculate_grand_total(frm);
}

function calculate_grand_total(frm) {
    frm.set_value('grand_total', frm.doc.sale_price + frm.doc.total_amount);
}

