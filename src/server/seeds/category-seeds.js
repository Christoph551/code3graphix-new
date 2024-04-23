const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Drinkware',
    },
    {
        category_name: 'Personalized Gifts',
    },
    {
        category_name: 'Glass and Acrylics',
    },
    {
        category_name: 'Engraveable Metals',
    },
    {
        category_name: 'Sublimation',
    },
    {
        category_name: 'Laserable Leather',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
