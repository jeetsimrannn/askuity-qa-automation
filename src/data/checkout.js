/**
 * Cart and checkout data.
 */
module.exports = {
    // Tax added to the subtotal in the cart and order summary
    taxRate: 0.08,

    // Information entered at checkout
    shippingInfo: {
        firstName: 'Test',
        lastName: 'Shopper',
        postalCode: 'L6R 2V2',
    },

    // Error shown under each field when it is left empty
    errors: {
        firstName: 'First Name is required',
        lastName: 'Last Name is required',
        postalCode: 'Postal Code is required',
    },

    // Page messages
    messages: {
        emptyCart: 'Your cart is empty',
        orderPlaced: 'Order Placed!',
        orderThankYou: 'Thank you for your purchase. Your order has been successfully submitted.',
    },
};
