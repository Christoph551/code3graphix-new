module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },

    format_date: (date) => {
        // Using JavaScript Date methods, we get and format the month, date, and year
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
            // We add five years to the 'year' value to calculate the end date
            new Date(date).getFullYear()
            }`;
    },

    format_timestamp: (date) => {
        let p = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).formatToParts(date).reduce((acc, part) => {
            acc[part.type] = part.value;
            return acc;
        }, {});

        return `${p.month}/${p.day}/${p.year}, ${p.hour}:${p.minute} ${p.dayPeriod}`;
    },

    // In the event you find that you'll need dynamically generated data for order history, that code will need to be written here to retrieve from the database. 
    
    // get_order_history: (order) => {

    //     // const order = await Order.findAll({
    //     //     where: {
    //     //         user_id: req.session.user_id
    //     //     },
    //     //     include: [
    //     //         {
    //     //             model: Product,
    //     //             attributes: ['product_name', 'price', 'stock', 'category_id'],
    //     //             include: {
    //     //                 model: Category,
    //     //                 attributes: ['category_name']
    //     //             }
    //     //         }
    //     //     ]
    //     // });
    
    //     return order;
    // }


}