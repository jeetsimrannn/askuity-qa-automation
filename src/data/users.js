/**
 * Practice accounts listed on the login page.
 */
module.exports = {
    // Can log in and shop normally
    standard: {
        username: 'fern_signal',
        password: 'test_sauce',
    },
    // Login is rejected with a locked-out error
    locked: {
        username: 'quiet_lock',
        password: 'test_sauce',
    },
    // Can log in, but product images are on the wrong products
    imageVariation: {
        username: 'lens_warp',
        password: 'test_sauce',
    },
    // Can log in, but the cart badge shows the wrong count
    cartBadge: {
        username: 'count_echo',
        password: 'test_sauce',
    },

    // Login error messages
    errors: {
        lockedOut: 'Sorry, this user has been locked out.',
        usernameRequired: 'Username is required',
        passwordRequired: 'Password is required',
    },
};
