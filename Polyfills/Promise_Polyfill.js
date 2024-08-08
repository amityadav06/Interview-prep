// Polyfill of Promise

const cart = ['shoes', 'fruits', 'chocolates'];

// Promise consumer
// createOder, proceedToPayment, ShowOrderSummary, UpdateTheWalled

const promise = createOrder(cart);

console.log(promise);
promise
.then(function(orderId){
    console.log(orderId);
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){    
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return updateTheWallet(paymentInfo)
})
.then(function(walletInfo){
    console.log(walletInfo);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(card){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error('Cart is not valid');
            reject(err);
        }
        const orderId = '12344';
        setTimeout(() => {
            if(orderId){
                resolve(orderId)
            }
        }, 5000);
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment is successful")
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('Order Summmary')
        }, 2000);
    })
}
function updateTheWallet(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Walledt balance: 00")
        }, 2000);
    })
}

function validateCart(cart){
    return cart.length > 0 ? true : false
}