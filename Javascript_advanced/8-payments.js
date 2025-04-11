function processPayment(amout) {
    console.log(`Collecting payment of ${amout}`);
}

function processOrder(orderId, amout) {
    console.log(`${orderId} is being processed`);
    processPayment(amout);
    console.log(`${orderId} has been fully processed`);
}

function main() {
    console.log("Processing orders");
    processOrder(12321, 10.99);
    processOrder(12322, 12.99);
    processOrder(12323, 15.0);
    console.log("All the orders have been processed");
}
