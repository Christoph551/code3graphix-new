const { ProductTag } = require('../models');


// This should be the relationship of a product associated with a tag. i.e. Tumbler being associated with a size as well as a color.
// Currently, these are just random tags that I've come up with.
const productTagData = [
    {
        product_id: 1,
        tag_id: 2,
    },
    {
        product_id: 1,
        tag_id: 1,
    },
    {
        product_id: 1,
        tag_id: 3,
    },
    {
        product_id: 1,
        tag_id: 4,
    },
    {
        product_id: 1,
        tag_id: 5,
    },
    {
        product_id: 2,
        tag_id: 14,
    },
    {
        product_id: 3,
        tag_id: 14,
    },
    {
        product_id: 4,
        tag_id: 6,
    },
    {
        product_id: 5,
        tag_id: 14,
    },
    {
        product_id: 6,
        tag_id: 14,
    }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
