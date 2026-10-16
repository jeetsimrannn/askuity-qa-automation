/**
 * Filter and sort options on the products page.
 */
module.exports = {
    // Total products shown with "All categories"
    totalProducts: 12,

    // Filter options and how many products each should show
    categories: [
        { value: 'apparel', label: 'Apparel', count: 5 },
        { value: 'accessories', label: 'Accessories', count: 4 },
        { value: 'gear', label: 'Gear', count: 2 },
        { value: 'books', label: 'Books', count: 1 },
    ],

    // Sort options
    sortOptions: [
        { value: 'name-az', label: 'Name: A to Z' },
        { value: 'name-za', label: 'Name: Z to A' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
    ],
};
