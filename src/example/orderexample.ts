import {connection} from '../config/connection';
import { /*Product ,*/ Order, Item } from '../models';

// Product.findAll().then(products => {
//     products.forEach(p => console.log(p.name));
// })
async function addOrder() {
    let tx = connection.transaction();
    try{
        const item1 = await Item.create({"amount":129000,"qty":1,"product_fk": 2});
        const item2 = await Item.create({"amount":89000,"qty":2,"product_fk": 1});
        const order = await Order.create({
            customer_fk: "jack@gmail.com",
            order_date : new Date(),
            total : 1027000
        });
        await order.addItem(item1);
        await order.addItem(item2);
        
        (await tx).commit();
        connection.close();
    } catch(err){
    (await tx).rollback();
}
    
}
addOrder();
